import styled from "styled-components";
import search from "public/icons/search.svg";
import trolley from "public/icons/trolley.svg";
import heart from "public/icons/heart.svg";

export const SearchBoxContainer = styled.div`
  width: 500px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  display: flex;
  height: 47px;
`;

export const SearchBoxWrapper = styled.div<{ tabIndex: number }>`
  display: flex;
  flex: 0 1 60%;
  align-items: center;
  background-color: #414547;
  &:focus-within {
    border: 1px solid white;
    background: #4d5253;
  }
`;

export const SearchInput = styled.input`
  border: none;
  background: none;
  outline: none;
  padding-left: 15px;
  width: 100%;
  height: 100%; 
  color: white;
  &::placeholder {
    color: white;
    opacity: 0.7;
  }
`;

export const SearchIcon = styled(search)`
  transform: scale(0.6);
  margin-left: auto;
  margin-right: 15px;
  stroke: white;
  cursor: pointer;
`;

export const SearchIconBtn = styled.button`
  background: none;
  border: none;
  height: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WishListWrapper = styled.button`
  display: flex;
  background-color: white;
  flex: 0 1 20%;
  cursor: pointer;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 100%; */
`;

export const HeartIcon = styled(heart)`
  stroke: #b73030;
  transform: scale(0.5);
  margin-top: -1px;
`;

export const Wishlist = styled.p`
  color: #b73030;
  margin-right: 10px;
`;

export const TrolleyWrapper = styled.button`
  display: flex;
  background-color: #b73030;
  flex: 0 1 20%;
  cursor: pointer;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 100%; */
`;

export const TrolleyIcon = styled(trolley)`
  width: 20px;
  height: 20px;
  stroke: white;
  fill: white;
`;

export const TrolleyCurrentItems = styled.p`
  padding: 1px 6px;
  border-radius: 50%;
  background-color: white;
  color: #b73030;
  margin-left: 5px;
`;
