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

export default function ConfirmEmailTemplate(p: TProps) {
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
        Confirmação de <span className="font-bold">email.</span>
      </Text>
      <Text className="font-bold text-neutral-100">
        Olá {props.name}, seja Bem-vindo à Cota Pharma.
      </Text>
      <Text className="text-neutral-300">
        Estamos muito felizes que você agora irá fazer parte da nossa
        comunidade.
      </Text>
      <Text className="text-neutral-300">
        Para confirmar seu email e acessar a plataforma, basta clicar no botão
        abaixo.
      </Text>
      <ReactEmailButton
        href={`${host}/auth/verify?token=${props.emailVerificationToken}${
          props.redirectURL ? `&redirect=${props.redirectURL}` : ""
        }`}
      >
        Confirmar email
      </ReactEmailButton>
      <Text className="text-neutral-400 text-xs text-center">
        Se você não solicitou esta confirmação, pode ignorar este email.
      </Text>
    </ReactEmailWrapper>
  );
}
