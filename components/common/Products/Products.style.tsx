import styled from "styled-components/macro";
import Image from "next/image";

import coupon from "public/icons/discount-part-2.svg";
import expandIcon from "public/icons/plus.svg";
import collapseIcon from "public/icons/minus.svg";
import arrowDownIcon from "public/icons/dropdown-arrow-down.svg";
import arrowUpIcon from "public/icons/dropdown-arrow-up.svg";

import Slider from "@mui/material/Slider";

export const WomenPageContainer = styled.div``;

export const WomenModelsImagesWrapper = styled.header`
  display: flex;
  column-gap: 10px;

  @media screen and (max-width: 1000px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 385px) {
    flex-direction: column;
  }
`;

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40vw;
  height: 550px;
  background-color: #e0effb;

  @media screen and (max-width: 1000px) {
    width: 100vw;
  }
`;

export const HeadingsWrapper = styled.div`
  @media screen and (max-width: 840px) {
    margin-top: 50px;
    padding: 0 10px;
  }
`;

export const Title = styled.h1`
  font-family: var(--secondary-font-family);
  color: var(--secondary-color);
  font-size: 40px;

  @media screen and (max-width: 350px) {
    margin-top: 50px;
    text-align: center;
  }
`;

export const Description = styled.p`
  line-height: 30px;
  font-size: 18px;
  margin-top: 20px;
  max-width: 324px;
`;

export const FirstImageWrapper = styled.div`
  width: 40vw;
  height: 550px;
  position: relative;
  @media screen and (max-width: 1000px) {
    width: calc(50vw - 15px);
  }

  @media screen and (max-width: 385px) {
    width: 100vw;
  }
`;
export const FirstImage = styled(Image)``;

export const SecondImageWrapper = styled.div`
  width: 20vw;
  height: 550px;
  position: relative;

  @media screen and (max-width: 1000px) {
    width: calc(50vw - 15px);
  }

  @media screen and (max-width: 385px) {
    width: 100vw;
  }
`;
export const SecondImage = styled(Image)``;

export const WritingArea = styled.div`
  position: absolute;
  bottom: 0;
  width: 192px;
  height: 100px;
  background-color: var(--primary-color);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WritingAreaText = styled.p`
  font-family: var(--secondary-font-family);
  font-size: 18px;
  text-align: center;
`;

export const CouponIconWrapper = styled.div`
  font-size: 22px;
  font-family: var(--secondary-font-family);
  position: absolute;
  bottom: 80px;
  left: 25px;
  width: 140px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpecialOfferText = styled.p`
  position: absolute;
  color: white;
  z-index: 999;
  bottom: 15px;
`;

export const CouponIcon = styled.img`
  position: absolute;
  bottom: 0;
  width: 140px;
  height: 50px;
`;

export const MainSection = styled.main`
  margin: 100px auto;
  display: flex;
  max-width: 1100px;
  position: relative;

  @media screen and (max-width: 1850px) {
    margin-top: 180px;
  }

  @media screen and (max-width: 1150px) {
    margin-left: 20px;
    margin-right: 20px;
  }

  @media screen and (max-width: 610px) {
    flex-direction: column;
  }
`;

export const LeftColumn = styled.aside``;

export const FilterWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 610px) {
    align-items: center;
  }
`;

export const FilterTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
`;

export const CollapsibleWrapper = styled.li`
  border-top: 1px solid #dcdcdc;
  border-bottom: 1px solid #dcdcdc;
  width: 200px;
  &:last-child {
    border-top: 0;
  }

  @media screen and (max-width: 1150px) {
    &:last-child {
      border-top: 1px solid #dcdcdc;
    }
  }
`;

export const CollapsibleBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 70px;
`;
export const CollapsibleContent = styled.div<{ height: number | undefined }>`
  overflow: ${(props) => (props.height ? "visible" : "hidden")};
  &:last-child {
    margin-right: 5px;
    margin-left: 5px;
  }
  transition: height 0.25s;
  height: ${(props) => `${props.height}px`};
  margin-bottom: ${(props) => props.height && "30px"};
`;

export const PriceSlider = styled(Slider)`
  margin-top: 25px;
`;

export const CollectionText = styled.p`
  font-size: 18px;
  color: var(--gray-color);
`;

export const PriceText = styled.p`
  font-size: 18px;
  color: var(--gray-color);
`;

export const OptionsWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const CollectionOptionLink = styled.a<{ isActive: boolean }>`
  // font-weight: bold;
  cursor: pointer;
  transition: all 0.1s;
  color: ${(props) =>
    props.isActive ? "var(--primary-color)" : "var(--gray-color)"};
  &:hover {
    color: var(--primary-color);
  }
  &:first-child {
    margin-bottom: 30px;
  }
`;

export const ExpandIcon = styled.img``;
export const CollapseIcon = styled.img``;

export const RightColumn = styled.section`
  max-width: 900px;

  @media screen and (max-width: 610px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const SortByWrapper = styled.div`
  position: absolute;
  min-width: 200px;
  display: inline-block;
  right: 0;

  @media screen and (max-width: 610px) {
    position: static !important;
    margin: 0 auto;
    margin-top: 20px;
  }
`;

export const SortByBtn = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 1px 5px;
  text-align: left;
  padding-left: 10px;
  font-size: 15px;
  color: var(--gray-color);
  min-width: 200px;
`;

export const SortByDropdown = styled.div<{ isDropdownOpen: boolean }>`
  display: ${(props) => (props.isDropdownOpen ? "block" : "none")};
  position: absolute;
  top: 42px;
  right: 0;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  z-index: 999;
`;

export const DropdownOptionLink = styled.a<{ isActive: boolean }>`
  display: block;
  padding: 10px;
  padding-left: 10px;
  color: var(--gray-color);
  cursor: pointer;
  font-size: 15px;
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  border: 1px solid transparent;
  background-color: ${(props) => (props.isActive ? "#e0e0e0" : "#fff")};
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const ArrowDownIcon = styled.img`
  margin-right: 5px;
  margin-left: 5px;
`;

export const ArrowUpIcon = styled.img`
  margin-right: 5px;
  margin-left: 5px;
`;

export const ProductsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 5px;
  row-gap: 5px;
  margin-left: 25px;
  margin-top: 70px;

  @media screen and (max-width: 1150px) {
    justify-content: center;
  }
`;

export const ProductWrapper = styled.li`
  &:hover {
    cursor: pointer;
  }
`;

export const ProductImage = styled(Image)``;

export const Name = styled.p`
  font-size: 17px;
`;
export const Price = styled.p`
  font-size: 20px;
  color: var(--secondary-color);
  font-family: var(--secondary-font-family);
  padding-bottom: 10px;
`;
