import styled from "styled-components/macro";

type EmailInputProps = {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  type: React.HTMLInputTypeAttribute;
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
  id: string;
};

type SubmitEmailBtnProps = {
  disabled: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const NewsletterFormContainer = styled.form`
  /* display: flex; */
  /* max-width: 300px; */
`;

export const FloatingLabel = styled.label<{ for: string }>`
  font-size: 14px;
  color: #666b70;
`;

export const EmailInput = styled.input<EmailInputProps>`
  border: 1px solid var(--secondary-color);
  border-radius: 5px 0 0 5px;
  outline: none;
  width: 140px;
  padding: 15px;
  &:hover {
    border: 2px solid var(--secondary-color);
  }

`;

export const SubmitEmailBtn = styled.button<SubmitEmailBtnProps>`
  color: white;
  border: none;
  background-color: var(--primary-color);
  border-radius: 0 5px 5px 0;
  height: 50px;
  padding: 0 10px;
  &:disabled {
    opacity: 0.7;
  }
`;
