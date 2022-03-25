import styled from "styled-components";
import Image from "next/image";
import search from "public/icons/search.svg";
import trolley from "public/icons/trolley.svg";
import heart from "public/icons/heart.svg";

export const SearchBoxContainer = styled.div`
  width: 500px;
  position: absolute;
  right: 0;
  display: flex;
  height: 47px;

  @media screen and (max-width: 840px) {
    width: 100vw;
  }
`;

export const SearchBoxForm = styled.form<{ tabIndex: number }>`
  display: flex;
  flex: 0 1 60%;
  align-items: center;
  background-color: #414547;
  &:focus-within {
    border: 1px solid white;
    background: #4d5253;
  }

  @media screen and (max-width: 840px) {
    flex-basis: 71%;
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

  @media screen and (max-width: 840px) {
    padding-left: 30px;
  }
`;

export const SearchIcon = styled.img`
  transform: scale(0.6);
  margin-left: auto;
  margin-right: 15px;
  cursor: pointer;
  filter: invert(1);
`;

export const SearchBtn = styled.button`
  background: none;
  border: none;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WishListBtnWrapper = styled.button`
  display: flex;
  background-color: white;
  flex: 0 1 20%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 19px;

  @media screen and (max-width: 840px) {
    flex-basis: 15%;
  }
`;

export const HeartIcon = styled.img`
  stroke: var(--primary-color);
  transform: scale(0.5);
  margin-top: -1px;
`;

export const Wishlist = styled.p`
  color: var(--primary-color);
  margin-right: 10px;
`;

export const TrolleyWrapper = styled.button`
  display: flex;
  background-color: var(--primary-color);
  flex: 0 1 20%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 840px) {
    flex-basis: 15%;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const TrolleyIcon = styled.img`
  width: 20px;
  height: 20px;
  filter: invert(1);
`;

export const TrolleyCurrentItems = styled.p`
  padding: 0px 9px;
  border-radius: 50%;
  background-color: white;
  color: var(--primary-color);
  margin-left: 5px;
`;
