import { EmailDAL } from ".";

const resend = await EmailDAL.resendConnection.emails.send({
    from: "Bruno Gallotte <onboarding@resend.dev>",
    to: "cotapharma@gmail.com",
    subject: "Teste de envio de email",
    text: "Teste de envio de email"
});