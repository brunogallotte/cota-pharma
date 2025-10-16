"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Controller, useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextInput } from "@/components/TextInput";
import { Button } from "@/components/ui/button";
import { ArrowRight, Loader2 } from "lucide-react";
import { RedefinePasswordSchema } from "./RedefinePasswordSchema";

export const RedefinePasswordForm = () => {
  const formStates = useForm<z.infer<typeof RedefinePasswordSchema>>({
    resolver: zodResolver(RedefinePasswordSchema),
  });

  const submit = async (data: z.infer<typeof RedefinePasswordSchema>) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={formStates.handleSubmit(submit)}
      className="w-full max-w-2xl overflow-y-auto"
    >
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Redefinir senha</CardTitle>
          <CardDescription>Digite a nova senha para sua conta</CardDescription>
        </CardHeader>

        <CardContent>
          <div className="space-y-4 mt-6">
            <Controller
              control={formStates.control}
              name="password"
              render={({ field, fieldState }) => (
                <TextInput
                  label="Senha"
                  type="password"
                  placeholder="Digite a sua senha"
                  {...field}
                  error={fieldState.error?.message}
                />
              )}
            />

            <Controller
              control={formStates.control}
              name="confirmPassword"
              render={({ field, fieldState }) => (
                <TextInput
                  label="Confirmar Senha"
                  type="password"
                  placeholder="Digite a sua senha novamente"
                  {...field}
                  error={fieldState.error?.message}
                />
              )}
            />
          </div>

          <div className="mt-6 w-full">
            <Button
              disabled={formStates.formState.isSubmitting}
              type="submit"
              className="w-full cursor-pointer"
            >
              Redefinir senha
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
  );
};
