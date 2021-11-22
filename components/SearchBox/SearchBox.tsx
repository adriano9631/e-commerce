import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "features/store";
import * as s from "./SearchBox.style";
import { setIsPopupVisible } from "features/commonSlice";
import { useDispatch } from "react-redux";

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
      <s.WishListWrapper>
        <s.HeartIcon />
        <s.Wishlist>Wishlist</s.Wishlist>
      </s.WishListWrapper>
      <s.TrolleyWrapper onClick={() => dispatch(setIsPopupVisible(true))}>
        <s.TrolleyIcon />
        <s.TrolleyCurrentItems>{totalQuantity}</s.TrolleyCurrentItems>
      </s.TrolleyWrapper>
    </s.SearchBoxContainer>
  );
};

export default SearchBox;
