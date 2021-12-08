import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "features/store";
import * as s from "./SearchBox.style";
import { setIsPopupVisible } from "features/commonSlice";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/router";

const SearchBox: React.FC = () => {
  const router = useRouter();
  const totalQuantity = useSelector(
    (state: RootState) => state.products.totalQuantity
  );
  const [searchTerm, setSearchTerm] = useState("");

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
          <s.SearchIcon />
        </s.SearchBtn>
      </s.SearchBoxForm>
      <Link href="/account/my-wishlist">
        <a>
          <s.WishListBtnWrapper>
            <s.HeartIcon />
            <s.Wishlist>Wishlist</s.Wishlist>
          </s.WishListBtnWrapper>
        </a>
      </Link>
      <s.TrolleyWrapper onClick={() => dispatch(setIsPopupVisible(true))}>
        <s.TrolleyIcon />
        <s.TrolleyCurrentItems>{totalQuantity}</s.TrolleyCurrentItems>
      </s.TrolleyWrapper>
    </s.SearchBoxContainer>
  );
};

export default SearchBox;
