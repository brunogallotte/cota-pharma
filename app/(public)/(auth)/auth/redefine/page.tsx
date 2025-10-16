import { TNextPageParameters } from "@/@types/TNextPageParameters";
import ContentWrapper from "@/components/ContentWrapper";
import { redirect } from "next/navigation";
import { RecoveryPasswordForm } from "./_pageResources/components/RecoveryPasswordForm/RecoveryPasswordForm";

export default async function Page(props: TNextPageParameters) {
  const queries = await props.searchParams;

  if (!queries.token) redirect("/login");

  return (
    <ContentWrapper element="section">
      <RecoveryPasswordForm />
    </ContentWrapper>
  );
}
