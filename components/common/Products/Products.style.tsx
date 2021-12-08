import styled from "styled-components/macro";
import coupon from "public/icons/discount-part-2.svg";
import Image from "next/image";
import expandIcon from "public/icons/plus.svg";
import collapseIcon from "public/icons/minus.svg";
import arrowDownIcon from "public/icons/dropdown-arrow-down.svg";
import arrowUpIcon from "public/icons/dropdown-arrow-up.svg";
import Slider from "@mui/material/Slider";

export const WomenPageContainer = styled.div``;

export const WomenModelsImagesWrapper = styled.header`
  display: flex;
  column-gap: 10px;
`;

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40vw;
  height: 550px;
  background-color: #e0effb;
`;

export const HeadingsWrapper = styled.div``;

export const Title = styled.h1`
  font-family: var(--secondary-font-family);
  color: var(--secondary-color);
  font-size: 40px;
`;

export const Description = styled.p`
  line-height: 30px;
  font-size: 18px;
  margin-top: 20px;
  width: 324px;
`;

export const FirstImageWrapper = styled.div`
  width: 40vw;
  height: 550px;
  position: relative;
`;
export const FirstImage = styled(Image)``;

export const SecondImageWrapper = styled.div`
  width: 20vw;
  height: 550px;
  position: relative;
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

export const CouponIcon = styled(coupon)`
  position: absolute;
  bottom: 0;
  width: 140px;
  height: 50px;
`;

export const MainSection = styled.main`
  margin: 100px auto;
  display: flex;
  width: 1100px;
  position: relative;
`;

export const LeftColumn = styled.aside``;

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
  font-weight: bold;
  color: var(--gray-color);
`;

export const PriceText = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: var(--gray-color);
`;

export const OptionsWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const CollectionOptionLink = styled.a<{ isActive: boolean }>`
  font-weight: bold;
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

export const ExpandIcon = styled(expandIcon)``;
export const CollapseIcon = styled(collapseIcon)``;

export const RightColumn = styled.section`
  width: 900px;
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
  font-weight: bold;
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

export const DropdownOptionLink = styled.a<{ isActive?: boolean }>`
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

export const ArrowDownIcon = styled(arrowDownIcon)`
  margin-right: 5px;
  margin-left: 5px;
`;

export const ArrowUpIcon = styled(arrowUpIcon)`
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
  font-weight: bold;
  padding-bottom: 10px;
`;
