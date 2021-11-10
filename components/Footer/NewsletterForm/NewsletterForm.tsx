import React, { FC, useState, useEffect } from "react";
import { EmailFormFields } from "react-mailchimp-subscribe";
import * as s from "./NewsletterForm.style";

type NewsletterFormProps = {
  status: "error" | "success" | "sending" | null;
  message: string;
  onValidated: (data: EmailFormFields) => void;
};

const NewsletterForm: FC<NewsletterFormProps> = ({
  status,
  message,
  onValidated,
}) => {
  const [error, setError] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    if (status === "sending") {
      setIsButtonDisabled(true);
    }
    if (status === "success" || status === "error") {
      setIsButtonDisabled(false);
    }
    if (status === "success") {
      setEmail("");
    }
  }, [status]);

  const handleFormSubmit = (event: { preventDefault: () => void }) => {
    setError("");
    if (!email) {
      setError("Please enter a valid email address");
      return null;
    }

    onValidated({ EMAIL: email });
    event.preventDefault();
  };

  const handleInputKeyEvent = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    setError("");
    if (event.key === "Enter") {
      event.preventDefault();
      handleFormSubmit(event);
    }
  };

  const getMessage = (message: string): null | any => {
    if (!message) {
      return null;
    }
    const result = message?.split("-") ?? null;
    if ("0" !== result?.[0]?.trim()) {
      return message;
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? formattedMessage : null;
  };

  return (
    <>
      <s.NewsletterFormContainer method="post">
        {/* <s.FloatingLabel for="email">Email Address *</s.FloatingLabel> */}
        <div style={{ display: "flex" }}>
          <s.EmailInput
            id="email"
            onChange={(event) => setEmail(event.target.value ?? "")}
            type="email"
            value={email}
            onKeyUp={(event) => handleInputKeyEvent(event)}
          />
          <s.SubmitEmailBtn
            disabled={isButtonDisabled}
            onClick={handleFormSubmit}
            // type="button"
          >
            Submit
          </s.SubmitEmailBtn>
        </div>
      </s.NewsletterFormContainer>
      <div>
        {"sending" === status ? "Loading..." : null}
        {"error" === status || error ? (
          <div
            style={{ maxWidth: "200px", color: "red" }}
            dangerouslySetInnerHTML={{ __html: error || getMessage(message) }}
          />
        ) : null}
        {"success" === status && !error && (
          <div dangerouslySetInnerHTML={{ __html: message }} />
        )}
      </div>
    </>

    // <div>
    //   <h3 className="mb-1 uppercase font-bold">Subscribe to newsletter</h3>
    //   <div className="flex newsletter-input-fields">
    //     <div className="mc-field-group">
    //       <input
    //         onChange={(event) => setEmail(event?.target?.value ?? "")}
    //         type="email"
    //         placeholder="Your email"
    //         className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-4 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
    //         onKeyUp={(event) => handleInputKeyEvent(event)}
    //       />
    //     </div>
    //     <div className="button-wrap wp-block-button">
    //       <button
    //         className="cursor-pointer	text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded"
    //         onClick={handleFormSubmit}
    //       >
    //         Submit
    //       </button>
    //     </div>
    //   </div>
    //   <div className="min-h-42px">
    //     {"sending" === status ? "Loading..." : null}
    //     {"error" === status || error ? (
    //       <div
    //         className="text-red-700 pt-2"
    //         dangerouslySetInnerHTML={{ __html: getMessage(message) }}
    //       />
    //     ) : null}
    //     {"success" === status && "error" !== status && !error && (
    //       <div
    //         className="text-green-200 font-bold pt-2"
    //         dangerouslySetInnerHTML={{ __html: message }}
    //       />
    //     )}
    //   </div>
    // </div>
  );
};

export default NewsletterForm;
