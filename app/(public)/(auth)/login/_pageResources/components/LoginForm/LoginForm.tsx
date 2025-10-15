"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import z from "zod";
import { ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TextInput } from "@/components/TextInput";
import { UserDAL } from "@/server/data-access-layer/UserDAL";
import { toast } from "sonner";
import Link from "next/link";
import { LoginFormSchema } from "./LoginFormSchema";
import { useRouter } from "next/navigation";

export const LoginForm = () => {
  const formStates = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    mode: "onChange",
  });

  const router = useRouter();

  const submit = async (data: z.infer<typeof LoginFormSchema>) => {
    const response = await UserDAL.loginUser(data);

    if (response.status === "error")
      return toast.error(response.client?.toast?.title, {
        description: response.client?.toast?.description,
      });

    router.push("/");
  };

  return (
    <form
      onSubmit={formStates.handleSubmit(submit)}
      className="w-full max-w-2xl"
    >
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">
            Faça login na CotaPharma
          </CardTitle>
          <CardDescription>
            Nao tem uma conta?{" "}
            <Link
              href="/register"
              className="font-bold underline underline-offset-2"
            >
              Registre-se agora
            </Link>
          </CardDescription>
        </CardHeader>

        <CardContent>
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

          <Controller
            control={formStates.control}
            name="password"
            render={({ field, fieldState }) => (
              <TextInput
                label="Senha"
                type="password"
                placeholder="********"
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
              Entrar
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
