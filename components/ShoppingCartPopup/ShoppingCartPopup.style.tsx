import styled from "styled-components/macro";
import { motion } from "framer-motion";
import rightArrowIcon from "public/icons/right-arrow.svg";

export const ShoppingCartPopupContainer = styled(motion.aside)`
  height: 100vh;
  position: sticky;
  top: 0;
  width: 390px;
  margin-left: auto;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.header`
  height: 110px;
  width: 100%;
  background-color: var(--primary-color);
`;

export const RightArrowIcon = styled(rightArrowIcon)`
  font-size: 35px;
  margin-left: 40px;
  stroke: white;
  position: relative;
  top: 45%;
  transform: translateY(-45%);
  cursor: pointer;
`;

export const CartText = styled.h2`
  font-family: var(--secondary-font-family);
  font-size: 30px;
  text-align: center;
  color: white;
`;

export const CartItemsList = styled.ul`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  align-items: center;
  overflow: auto;
  height: 700px;
`;

export const CartItem = styled.li`
  display: flex;
  column-gap: 10px;
  align-items: center;
  margin-right: 35px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

export const FlexWrapper = styled.div`
  display: flex;
`;

export const Size = styled.p`
  font-size: 16px;
`;

export const Price = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

export const Footer = styled.footer`
  height: 150px;
  position: absolute;
  z-index: 1;
  width: 100%;
  bottom: 0;
  background-color: #f3e6e6;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ViewCartBtn = styled.button`
  color: white;
  background-color: var(--primary-color);
  border: none;
  width: 300px;
  height: 45px;
  font-size: 20px;
  border-radius: 6px;
  &:hover {
    opacity: 0.9;
  }
`;

export const SumWrapper = styled.div`
  display: flex;
  margin-top: 30px;
`;

export const SumText = styled.p`
  font-size: 30px;
  font-weight: bold;
  margin-left: 10px;
  font-family: var(--secondary-font-family);
`;
export const Sum = styled.p`
  font-size: 30px;
  font-family: var(--secondary-font-family);
`;
