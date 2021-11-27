import React, { FC } from "react";
import styled from "styled-components/macro";
import CircularProgress from "@mui/material/CircularProgress";

const CustomizedLoadingIndicator = styled(CircularProgress)`
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

type LoadingIndicatorProps = {
  color?:
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning"
    | "inherit";
};

const LoadingIndicator: FC<LoadingIndicatorProps> = ({ color }) => {
  return <CustomizedLoadingIndicator color={color} />;
};
export default LoadingIndicator;
