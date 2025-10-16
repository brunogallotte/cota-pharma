import * as React from "react";
import { Text } from "@react-email/components";

import ReactEmailButton from "../components/ReactEmailButton";
import ReactEmailWrapper from "../components/ReactEmailWrapper";

type TProps = {
  name: string;
  emailVerificationToken: string;
  host: string;
  redirectURL?: string;
};

export default function RecoveryPasswordEmailTemplate(p: TProps) {
  const hasProps = Object.keys(p || {}).length > 0;

  const props: TProps = hasProps
    ? p
    : {
        name: "John Doe",
        emailVerificationToken: "1234567890",
        host: "localhost:3000",
      };

  const host = props.host.includes("localhost")
    ? "http://localhost:3000"
    : "https://" + props.host;

  return (
    <ReactEmailWrapper>
      <Text className="font-regular text-2xl text-neutral-100">
        Redefinição de <span className="font-bold">senha.</span>
      </Text>
      <Text className="font-bold text-neutral-100">
        Olá {props.name}, seu link para redefinir sua senha ficou pronto.
      </Text>
      <Text className="text-neutral-300">
        Para redefinir sua senha, basta clicar no botão abaixo.
      </Text>
      <ReactEmailButton
        href={`${host}/auth/recovery?token=${props.emailVerificationToken}${
          props.redirectURL ? `&redirect=${props.redirectURL}` : ""
        }`}
      >
        Redefinir senha
      </ReactEmailButton>
      <Text className="text-neutral-400 text-xs text-center">
        Se você não solicitou esta confirmação, pode ignorar este email.
      </Text>
    </ReactEmailWrapper>
  );
}
