import Reactl, { FC } from "react";
import * as s from "./DiscardChangesModal.style";

type DiscardChangesModalProps = {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setDisplayName: React.Dispatch<React.SetStateAction<string | undefined>>;
  name: string | undefined;
};

const DiscardChangesModal: FC<DiscardChangesModalProps> = ({
  setIsModalOpen,
  name,
  setDisplayName,
}) => {
  const handleDiscardChanges = () => {
    setDisplayName(name);
    setIsModalOpen(false);
  };

  return (
    <s.DiscardChangesModalContainer onClick={() => setIsModalOpen(false)}>
      <s.Modal onClick={(e) => e.stopPropagation()}>
        <button onClick={() => setIsModalOpen(false)}>
          <s.CloseIcon />
        </button>
        <s.Title>Discard changes?</s.Title>
        <s.Description>
          Are you sure you want to discard the changes you made?
        </s.Description>
        <s.ButtonsWrapper>
          <s.CancelChangesBtn onClick={() => setIsModalOpen(false)}>
            Cancel
          </s.CancelChangesBtn>
          <s.DiscardChangesBtn onClick={handleDiscardChanges}>
            Discard
          </s.DiscardChangesBtn>
        </s.ButtonsWrapper>
      </s.Modal>
    </s.DiscardChangesModalContainer>
  );
};

export default DiscardChangesModal;
