import React, { ForwardedRef } from "react";
import styled from "styled-components";
import { motion, Variants } from "framer-motion";
import { btnStyles } from "components/home/MainSection/MainSection.style";

type ShopAllBtnContainerProps = {
  children: string;
  ref: ForwardedRef<HTMLButtonElement>;
  initial: string;
  variants: Variants & object;
  animate: object;
} | {};

export const ShopAllBtnContainer = styled(
  motion.a
)<ShopAllBtnContainerProps>`
  ${btnStyles}
`;
