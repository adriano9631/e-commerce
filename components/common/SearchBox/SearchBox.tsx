import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "features/store";
import * as s from "./SearchBox.style";
import { setIsPopupVisible } from "features/commonSlice";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";

import search from "public/icons/search.svg";
import trolley from "public/icons/trolley.svg";
import heart from "public/icons/heart.svg";

const SearchBox: React.FC = () => {
  const router = useRouter();
  const totalQuantity = useSelector(
    (state: RootState) => state.products.totalQuantity
  );

  const [searchTerm, setSearchTerm] = useState("");
  const { data: session } = useSession();

  const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    router.push(`/search-results?search_query=${searchTerm}`);
    event.preventDefault();
  };
  const dispatch = useDispatch();
  return (
    <s.SearchBoxContainer>
      <s.SearchBoxForm onSubmit={handleSearch} tabIndex={0}>
        <s.SearchInput
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Search..."
        />
        <s.SearchBtn>
          <s.SearchIcon src="/icons/search.svg" />
        </s.SearchBtn>
      </s.SearchBoxForm>
      {session ? (
        <Link href="/account/my-wishlist">
          <a>
            <s.WishListBtnWrapper>
              <s.HeartIcon src="/icons/heart.svg" width={24} height={24} />
              <s.Wishlist>Wishlist</s.Wishlist>
            </s.WishListBtnWrapper>
          </a>
        </Link>
      ) : (
        // <Link href="/account/my-wishlist">
          <a onClick={() => signIn("google")}>
            <s.WishListBtnWrapper>
              <s.HeartIcon src="/icons/heart.svg" width={24} height={24} />
              <s.Wishlist>Wishlist</s.Wishlist>
            </s.WishListBtnWrapper>
          </a>
        // </Link>
      )}

      <s.TrolleyWrapper onClick={() => dispatch(setIsPopupVisible(true))}>
        <s.TrolleyIcon src="/icons/trolley.svg" width={20} height={20} />
        <s.TrolleyCurrentItems>{totalQuantity}</s.TrolleyCurrentItems>
      </s.TrolleyWrapper>
    </s.SearchBoxContainer>
  );
};

export default SearchBox;
