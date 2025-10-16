"use client";

import ContentWrapper from "@/components/ContentWrapper";
import { useForm } from "react-hook-form";
import { RecoveryPasswordFormSchema } from "./RecoveryPasswordSchema";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const RecoveryPasswordForm = () => {
  const formStates = useForm<z.infer<typeof RecoveryPasswordFormSchema>>({
    resolver: zodResolver(RecoveryPasswordFormSchema),
  });

  const submit = async (data: z.infer<typeof RecoveryPasswordFormSchema>) => {};

  return (
    <ContentWrapper element="section">
      <form></form>
    </ContentWrapper>
  );
};
