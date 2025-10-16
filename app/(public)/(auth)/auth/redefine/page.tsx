import { TNextPageParameters } from "@/@types/TNextPageParameters";
import ContentWrapper from "@/components/ContentWrapper";
import { redirect } from "next/navigation";
import { RedefinePasswordForm } from "./_pageResources/components/RedefinePasswordForm/RedefinePasswordForm";

export default async function Page(props: TNextPageParameters) {
  const queries = await props.searchParams;

  if (!queries.token) redirect("/login");

  return (
    <ContentWrapper element="section">
      <RedefinePasswordForm />
    </ContentWrapper>
  );
}
