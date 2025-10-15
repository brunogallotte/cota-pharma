import ContentWrapper from "@/components/ContentWrapper";
import { LoginForm } from "./_pageResources/components/LoginForm/LoginForm";

export default function LoginPage() {
  return (
    <ContentWrapper
      className="min-h-[calc(100vh-65px)] flex justify-center py-10"
      element="section"
    >
      <LoginForm />
    </ContentWrapper>
  );
}
