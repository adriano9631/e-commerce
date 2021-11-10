import { FC } from "react";

import MailchimpSubscribe, { EmailFormFields } from "react-mailchimp-subscribe";
import NewsletterForm from "../NewsletterForm";

const NewsletterSubscribe: FC = () => {
  const MAILCHIMP_URL: string = String(process.env.NEXT_PUBLIC_MAILCHIMP_URL);

  return (
    <MailchimpSubscribe
      url={MAILCHIMP_URL}
      render={(props) => {
        const { subscribe, status, message } = props || {};
        return (
          <NewsletterForm
            status={status}
            message={String(message)}
            onValidated={(formData: EmailFormFields) => subscribe(formData)}
          />
        );
      }}
    />
  );
};

export default NewsletterSubscribe;
