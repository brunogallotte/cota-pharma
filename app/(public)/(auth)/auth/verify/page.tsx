import ContentWrapper from "@/components/ContentWrapper";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import { UserDAL } from "@/server/data-access-layer/UserDAL";
import getQueriesViaHeaders from "@/utils/getQueriesViaHeaders";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ReactNode, Suspense } from "react";
import { Success } from "./_pageResources/components/Success";
import { cn } from "@/lib/utils";

export default function Page() {
  return (
    <ContentWrapper
      element="section"
      className="min-h-[calc(100vh-40px)] flex flex-col items-center py-10"
    >
      <VerifyEmailSuspensed />
    </ContentWrapper>
  );
}

const VerifyEmailSuspensed = () => {
  return (
    <Suspense
      fallback={
        <VerifyEmailTemplate
          status="pending"
          title="Estamos verificando o seu email"
          description="Aguarde alguns segundos por favor..."
        >
          <Spinner className="size-10" />
        </VerifyEmailTemplate>
      }
    >
      <VerifyEmail />
    </Suspense>
  );
};

const VerifyEmail = async () => {
  const queries = await getQueriesViaHeaders();
  const token = queries.token;

  if (!token)
    return (
      <VerifyEmailTemplate
        status="error"
        title="Token não encontrado"
        description="Entre em contato com o suporte ou tente novamente mais tarde."
      >
        <Link href="/auth/login">
          <Button className="cursor-pointer">
            <ArrowLeft className="size-4" /> Voltar
          </Button>
        </Link>
      </VerifyEmailTemplate>
    );

  const response = await UserDAL.verifyEmail({ token });

  if (response.status === "error")
    return (
      <VerifyEmailTemplate
        status="error"
        title="Erro ao verificar o email"
        description="Entre em contato com o suporte ou tente novamente mais tarde."
      >
        <Link href="/auth/login">
          <Button className="cursor-pointer">
            <ArrowLeft className="size-4" /> Voltar
          </Button>
        </Link>
      </VerifyEmailTemplate>
    );

  return (
    <VerifyEmailTemplate
      status="success"
      title="O seu e-mail foi verificado com sucesso"
    >
      <Success />
    </VerifyEmailTemplate>
  );
};

const VerifyEmailTemplate = (props: {
  title: string;
  description?: string;
  children: ReactNode;
  status: "success" | "error" | "pending";
}) => {
  return (
    <Card className="gap-0">
      <CardHeader>
        <CardTitle className="text-center">{props.title}</CardTitle>
        {props.description && (
          <CardDescription className="text-center">
            {props.description}
          </CardDescription>
        )}
      </CardHeader>

      <CardContent
        className={cn(
          "text-center flex flex-col items-center justify-center",
          props.description ? "mt-4" : "mt-0"
        )}
      >
        {props.children}
      </CardContent>
    </Card>
  );
};
