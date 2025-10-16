import * as React from "react";
import { Text } from "@react-email/components";

import ReactEmailButton from "../components/ReactEmailButton";
import ReactEmailWrapper from "../components/ReactEmailWrapper";

type TProps = { name: string };

export default function SupportEmailTemplate(p: TProps) {
  const hasProps = Object.keys(p || {}).length > 0;

  const props: TProps = hasProps ? p : { name: "John Doe" };

  return (
    <ReactEmailWrapper>
      <Text className="font-regular text-2xl text-neutral-100">
        Email de <span className="font-bold">suporte.</span>
      </Text>
      <Text className="font-bold text-neutral-100">Olá {props.name},</Text>
      <Text className="text-neutral-300">
        Recebemos sua solicitação de suporte e estamos aqui para ajudar.
      </Text>
      <Text className="text-neutral-300">
        Nossa equipe analisará sua mensagem e retornará em breve com uma
        solução.
      </Text>
      <Text className="text-neutral-300">
        Se você tiver alguma dúvida urgente, não hesite em nos contatar
        diretamente.
      </Text>
      <ReactEmailButton href="mailto:cotapharma@gmail.com">
        Entrar em contato
      </ReactEmailButton>
      <Text className="text-neutral-300 text-sm">
        Obrigado por escolher a Cota Pharma.
      </Text>
    </ReactEmailWrapper>
  );
}
