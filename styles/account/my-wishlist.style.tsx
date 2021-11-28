import styled from "styled-components/macro";
import Image from "next/image";

export const MyWishlistContainer = styled.div`
  width: 980px;
  margin: 70px auto;
`;

export const MyWishlistTextWrapper = styled.div`
  margin-left: 20px;
  margin-top: 30px;
`;

export const Title = styled.h1`
  font-size: 26px;
  font-family: var(--secondary-font-family);
  margin-top: 25px;
`;

export const Description = styled.p`
  font-size: 16px;
  margin-top: 10px;
`;

export const WishlistWrapper = styled.ul`
  display: flex;
  column-gap: 10px;
  row-gap: 10px;
  border-top: 1px solid #dcdcdc;
  padding-top: 40px;
  margin-left: 20px;
  margin-top: 30px;
`;

export const ProductWrapper = styled.li`
  cursor: pointer;
`;

export const ProductImage = styled(Image)``;

export const Name = styled.p`
  font-size: 18px;
  margin-top: 10px;
`;

export const Price = styled.p`
  font-size: 16px;
  color: var(--gray-color);
`;

export const AddToCartBtn = styled.button`
  background-color: #2c3038;
  width: 100%;
  color: #fff;
  height: 40px;
  font-size: 16px;
  margin-top: 10px;
  transition: all 0.25s;
  &:hover {
    opacity: 0.8;
  }
`;
