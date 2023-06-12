"use client";

// import { useTransition } from "react";
import { buttonStyles } from "../styles/button";
import { EmailInput } from "../user/ui/EmailInput";
import { inputStyles } from "../styles/input";
// import { sendEmail } from "../actions/sendEmail";

export const SendEmailForm = () => {
  // const [isPending, startTransition] = useTransition();

  const startSendingEmail = (formData: FormData) => {
    // const to = formData.get("to")?.toString();
    // const subject = formData.get("subject")?.toString();
    // const text = formData.get("text")?.toString();
    // if (!to || !subject || !text) return;
    // startTransition(() => {
    //   sendEmail({
    //     to,
    //     subject,
    //     text,
    //   });
    // });
  };

  return (
    <form className="space-y-4" action={startSendingEmail}>
      <EmailInput placeholder="To" name="to" />
      <input
        required
        name="subject"
        placeholder="Subject"
        className={inputStyles}
      />
      <textarea
        required
        name="text"
        placeholder="Text"
        className={inputStyles}
      />
      <button disabled={true} type="submit" className={buttonStyles}>
        {/* {isPending ? "Sending..." : "Send"} */}
        Currently Disabled
      </button>
    </form>
  );
};

export default SendEmailForm;
