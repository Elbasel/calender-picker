"use server";
import mailClient from "@sendgrid/mail";

const sendGridApiKey = process.env.SENDGRID_API_KEY;
if (!sendGridApiKey) throw new Error("SENDGRID_API_KEY is not defined");

const sendGridVerfiedSender = process.env.SENDGRID_VERIFIED_SENDER;
if (!sendGridVerfiedSender)
  throw new Error("SENDGRID_VERIFIED_SENDER is not defined");

mailClient.setApiKey(sendGridApiKey);

interface Args {
  to: string;
  subject: string;
  text: string;
  html?: string;
}

export const sendEmail = async ({ to, subject, text, html }: Args) => {
  const emailMessage = {
    to,
    from: sendGridVerfiedSender,
    subject,
    text,
    html,
  };
  try {
    const result = await mailClient.send(emailMessage);
    console.log("sendEmail result", result);
  } catch (error) {
    console.error("sendEmail error", error);
  }
};
