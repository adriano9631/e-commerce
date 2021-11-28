import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "features/store";
import * as s from "./SearchBox.style";
import { setIsPopupVisible } from "features/commonSlice";
import { useDispatch } from "react-redux";
import Link from "next/link";


const SearchBox: React.FC = () => {
  const totalQuantity = useSelector(
    (state: RootState) => state.products.totalQuantity
  );
  const dispatch = useDispatch();
  return (
    <s.SearchBoxContainer>
      <s.SearchBoxWrapper tabIndex={0}>
        <s.SearchInput placeholder="Search..." />
        <s.SearchIconBtn>
          <s.SearchIcon />
        </s.SearchIconBtn>
      </s.SearchBoxWrapper>
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
