"use client";

import ContentWrapper from "@/components/ContentWrapper";
import { Controller, useForm } from "react-hook-form";
import { RecoveryPasswordFormSchema } from "./RecoveryPasswordSchema";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TextInput } from "@/components/TextInput";
import { Button } from "@/components/ui/button";
import { ArrowRight, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { UserDAL } from "@/server/data-access-layer/UserDAL";

export const RecoveryPasswordForm = () => {
  const formStates = useForm<z.infer<typeof RecoveryPasswordFormSchema>>({
    resolver: zodResolver(RecoveryPasswordFormSchema),
  });

  const submit = async (data: z.infer<typeof RecoveryPasswordFormSchema>) => {
    const response = await UserDAL.recoveryPassword(data);
    if (response.status === "error")
      return toast.error(response.client?.toast?.title, {
        description: response.client?.toast?.description,
      });

    toast.success("E-mail de recuperação de senha enviado");
  };

  return (
    <ContentWrapper element="section">
      <form onSubmit={formStates.handleSubmit(submit)}>
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="font-bold">Digite o seu e-mail</CardTitle>
          </CardHeader>

          <CardContent className="">
            <Controller
              control={formStates.control}
              name="email"
              render={({ field, fieldState }) => (
                <TextInput
                  label="E-mail"
                  placeholder="johndoe@example.com"
                  {...field}
                  error={fieldState.error?.message}
                />
              )}
            />

            <div className="mt-6 w-full">
              <Button
                disabled={formStates.formState.isSubmitting}
                type="submit"
                className="w-full cursor-pointer"
              >
                Recuperar senha
                {formStates.formState.isSubmitting ? (
                  <Loader2 className="size-4 animate-spin" />
                ) : (
                  <ArrowRight className="size-4" />
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </ContentWrapper>
  );
};
