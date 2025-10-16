import ReactEmailTemplates from "./react-emails";
import { resendConnection } from "./resend-connection";

export const EmailDAL = {
    resendConnection,
    reactEmails: ReactEmailTemplates,
}