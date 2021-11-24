import React, { FC } from "react";
import ReactDOM from "react-dom";

import * as s from "./PaymentDisabledModal.style";

type PaymentDisabledModalProps = {
  setIsPaymentDisabledModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const PaymentDisabledModal: FC<PaymentDisabledModalProps> = ({
  setIsPaymentDisabledModalOpen,
}) => {
  return ReactDOM.createPortal(
    <s.PaymentDisabledModalContainer
      onClick={() => setIsPaymentDisabledModalOpen(false)}
    >
      <s.Modal onClick={(e) => e.stopPropagation()}>
        <button onClick={() => setIsPaymentDisabledModalOpen(false)}>
          <s.CloseIcon />
        </button>
        <s.ErrorMsg1>We are unable to accept online payments</s.ErrorMsg1>
        <s.ErrorMsg2>
          Please contact us to make a purchase. Thank you.
        </s.ErrorMsg2>
        <s.ConfirmBtn onClick={() => setIsPaymentDisabledModalOpen(false)}>
          OK
        </s.ConfirmBtn>
      </s.Modal>
    </s.PaymentDisabledModalContainer>,
    document.body
  );
};

export default PaymentDisabledModal;
