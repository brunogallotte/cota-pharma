import { EmailDAL } from "@/server/data-access-layer/EmailDAL";
import { NextResponse } from "next/server";
export async function GET(request: Request) {
    const resend = await EmailDAL.resendConnection.emails.send({
        from: "Bruno Gallotte <onboarding@resend.dev>",
        to: "cotapharma@gmail.com",
        subject: "Teste de envio de email",
        react: EmailDAL.reactEmails.ConfirmEmail({
            name: "Bruno Gallotte",
            emailVerificationToken: "1234567890",
            host: "localhost:3000"
        })
    });

    return NextResponse.json(resend);
}