import ContentWrapper from "@/components/ContentWrapper";
import { LoginForm } from "./_pageResources/components/LoginForm/LoginForm";

export default function LoginPage() {
  return (
    <ContentWrapper
      className="h-full flex justify-center items-center"
      element="section"
    >
      <LoginForm />
    </ContentWrapper>
  );
}
