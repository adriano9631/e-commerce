import React from "react";
import * as s from "./SearchBox.style";

const SearchBox: React.FC = () => {
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
        <s.TrolleyCurrentItems>0</s.TrolleyCurrentItems>
      </s.TrolleyWrapper>
    </s.SearchBoxContainer>
  );
};

export default SearchBox;
