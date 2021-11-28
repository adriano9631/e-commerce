import AccountHeader from "components/AccountHeader";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import axiosInstance from "lib/axios";
import * as s from "styles/account/my-account.style";
import DiscardChangesModal from "components/DiscardChangesModal";

const MyAccount = () => {
  const { data: session } = useSession();
  const [displayName, setDisplayName] = useState(session?.user.name);
  const [updatedDisplayName, setUpdatedDisplayName] = useState("");
  const [isDisabledButtons, setIsDisabledButtons] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUpdateUserInformation = async () => {
    try {
      const response = await axiosInstance.put(`users/${session?.id}`, {
        name: displayName,
      });
      const name = response.data;
      setUpdatedDisplayName(name);
    } catch (error: any) {
      throw new Error(error);
    }
    setIsDisabledButtons(true);
  };

  const handleSetDisplayName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsDisabledButtons(false);
    setDisplayName(event.target.value);
  };

  const handleDiscardChanges = () => {
    setIsModalOpen(true);
  };

  return (
    <s.MyAccountContainer>
      <AccountHeader updatedDisplayName={updatedDisplayName} />
      <s.MyAccountWrapper>
        <s.MyAccountTextWrapper>
          <s.MyAccountTitle>My account</s.MyAccountTitle>
          <s.MyAccountDescription>
            View and edit your personal information below.
          </s.MyAccountDescription>
        </s.MyAccountTextWrapper>
        <s.ButtonsWrapper>
          <s.DiscardChangesBtn
            disabled={isDisabledButtons}
            onClick={handleDiscardChanges}
          >
            Discard
          </s.DiscardChangesBtn>
          <s.ConfirmChangesBtn
            disabled={isDisabledButtons}
            onClick={handleUpdateUserInformation}
          >
            Confirm
          </s.ConfirmChangesBtn>
        </s.ButtonsWrapper>
      </s.MyAccountWrapper>
      <s.PublicInfromationsWrapper>
        <s.PublicInformationTitle>Public information</s.PublicInformationTitle>
        <s.MyAccountDescription>
          Your profile card is visible to all users of this website
        </s.MyAccountDescription>
        <s.NameChangeInputLabel>
          Display name *
          <s.NameChangeInput
            type="text"
            value={displayName}
            onChange={handleSetDisplayName}
          />
        </s.NameChangeInputLabel>
      </s.PublicInfromationsWrapper>
      {isModalOpen && (
        <DiscardChangesModal
          name={session?.user.name}
          setDisplayName={setDisplayName}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </s.MyAccountContainer>
  );
};

export default MyAccount;
