import ContentWrapper from "@/components/ContentWrapper";
import { RegisterForm } from "./_pageResources/components/RegisterForm/RegisterForm";

export default function Page() {
  return (
    <ContentWrapper
      className="min-h-[calc(100vh-40px)] flex flex-col items-center py-10"
      element="section"
    >
      <RegisterForm />
    </ContentWrapper>
  );
}
