import { Resend } from "resend";

export const resendConnection = new Resend(process.env.RESEND_API_KEY);
