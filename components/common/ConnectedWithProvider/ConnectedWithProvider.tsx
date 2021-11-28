import React from "react";
import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { RootState } from "features/store";
import ShoppingCartPopup from "components/common/ShoppingCartPopup";

const ConnectedWithProvider = () => {
  const isPopupVisible = useSelector(
    (state: RootState) => state.common.isPopupVisible
  );
  return (
    <>
      <AnimatePresence>
        {isPopupVisible && <ShoppingCartPopup />}
      </AnimatePresence>
    </>
  );
};

export default ConnectedWithProvider;
