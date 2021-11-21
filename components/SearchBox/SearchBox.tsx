import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "features/store";
import * as s from "./SearchBox.style";

const SearchBox: React.FC = () => {
  const totalQuantity = useSelector((state: RootState) => state.products.totalQuantity);
  return (
    <s.SearchBoxContainer>
      <s.SearchBoxWrapper tabIndex={0}>
        <s.SearchInput placeholder="Search..." />
        <s.SearchIconBtn>
          <s.SearchIcon />
        </s.SearchIconBtn>
      </s.SearchBoxWrapper>
      <s.WishListWrapper>
        <s.HeartIcon />
        <s.Wishlist>Wishlist</s.Wishlist>
      </s.WishListWrapper>
      <s.TrolleyWrapper>
        <s.TrolleyIcon />
        <s.TrolleyCurrentItems>{totalQuantity}</s.TrolleyCurrentItems>
      </s.TrolleyWrapper>
    </s.SearchBoxContainer>
  );
};

export default SearchBox;
