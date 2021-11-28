import React from "react";
import * as s from "styles/profile/[username].style";
import AccountHeader from "components/account/my-account/AccountHeader";
const Username = () => {
  return (
    <s.UsernameContainer>
      <AccountHeader />
    </s.UsernameContainer>
  );
};

export default Username;
