import styled from "styled-components/macro";
import Image from "next/image";
import removeIcon from "public/icons/cross.svg";

export const MyWishlistContainer = styled.div`
  max-width: 980px;
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

export const NoProductsWrapper = styled.section`
  max-width: 920px;
  height: 300px;
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const NoProductsText = styled.h2`
  font-size: 25px;
  text-align: center;
`;

export const NoProductsLink = styled.a`
  font-size: 20px;
  margin-top: 20px;
  text-decoration: underline;
`;

export const WishlistWrapper = styled.ul`
  display: flex;
  justify-content: center;
  column-gap: 10px;
  row-gap: 10px;
  border-top: 1px solid #dcdcdc;
  padding-top: 40px;
  margin-left: 20px;
  margin-top: 30px;
  flex-wrap: wrap;
  row-gap: 20px;
`;

export const RemoveProductFromWishlistBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 15px;
  margin-right: 15px;
  background-color: transparent;
  opacity: 0;
`;

export const RemoveIcon = styled(removeIcon)``;

export const ProductWrapper = styled.li`
  position: relative;
  &:hover ${RemoveProductFromWishlistBtn} {
    opacity: 1;
  }
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
