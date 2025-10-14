import ContentWrapper from "@/components/ContentWrapper";
import { Main } from "next/document";
import { RegisterForm } from "./_pageResources/components/RegisterForm/RegisterForm";

export default function Page() {
  return (
    <ContentWrapper
      className="min-h-[calc(100vh-65px)] flex justify-center items-center pt-[65px]"
      element="section"
    >
      <RegisterForm />
    </ContentWrapper>
  );
}
