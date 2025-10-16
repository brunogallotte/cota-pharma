import ContentWrapper from "@/components/ContentWrapper";
import { RecoveryPasswordForm } from "./_pageResources/components/RecoveryPasswordForm/RecoveryPasswordForm";

export default function Page() {
  return (
    <ContentWrapper element="section" className="min-h-[calc(100vh-40px)] flex flex-col items-center py-10">
      <RecoveryPasswordForm />
    </ContentWrapper>
  );
}
