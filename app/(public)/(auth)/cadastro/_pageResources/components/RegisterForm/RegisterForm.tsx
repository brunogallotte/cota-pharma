"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm, useWatch } from "react-hook-form";
import { RegisterFormSchema } from "./RegisterFormSchema";
import z from "zod";
import { Building2, Store } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const RegisterForm = () => {
  const formStates = useForm<z.infer<typeof RegisterFormSchema>>({
    resolver: zodResolver(RegisterFormSchema),
    mode: "onChange",
    defaultValues: {
      userType: "pharmacy",
      name: "",
      cnpj: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const userType = useWatch({
    control: formStates.control,
    name: "userType",
  });

  const submit = (data: z.infer<typeof RegisterFormSchema>) => {
    console.log(data);
  };

  console.log("get values", formStates.getValues());

  return (
    <form
      onSubmit={formStates.handleSubmit(submit)}
      className="w-full max-w-2xl"
    >
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Criar Conta</CardTitle>
          <CardDescription>Cadastre-se na CotaPharma</CardDescription>
        </CardHeader>

        <CardContent>
          <div className="space-y-3">
            <Label className="text-base font-bold">Tipo de Conta</Label>
            <RadioGroup
              value={userType}
              onValueChange={(value) =>
                formStates.setValue(
                  "userType",
                  value as "pharmacy" | "supplier"
                )
              }
              className="grid grid-cols-2 gap-4"
            >
              <Label
                htmlFor="pharmacy"
                className={`flex flex-col items-center justify-center rounded-lg border-2 p-4 cursor-pointer transition-all ${
                  userType === "pharmacy"
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <RadioGroupItem
                  value="pharmacy"
                  id="pharmacy"
                  className="sr-only"
                />
                <Store className="h-8 w-8 mb-2 text-primary" />
                <span className="font-medium">Farmácia</span>
                <span className="text-xs text-muted-foreground text-center mt-1">
                  Comprar matérias-primas
                </span>
              </Label>
              <Label
                htmlFor="fornecedor"
                className={`flex flex-col items-center justify-center rounded-lg border-2 p-4 cursor-pointer transition-all ${
                  userType === "supplier"
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <RadioGroupItem
                  value="supplier"
                  id="fornecedor"
                  className="sr-only"
                />
                <Building2 className="h-8 w-8 mb-2 text-primary" />
                <span className="font-medium">Fornecedor</span>
                <span className="text-xs text-muted-foreground text-center mt-1">
                  Vender matérias-primas
                </span>
              </Label>
            </RadioGroup>
          </div>

          <div className="space-y-4 mt-6">
            <Controller
              control={formStates.control}
              name="name"
              render={({ field }) => (
                <div className="space-y-1">
                  <Label className="text-sm font-bold">Nome Completo</Label>
                  <Input
                    placeholder="João Silva"
                    type="text"
                    className="w-full"
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              control={formStates.control}
              name="cnpj"
              render={({ field }) => (
                <div className="space-y-1">
                  <Label className="text-sm font-bold">CNPJ</Label>
                  <Input
                    placeholder="00.000.000/0000-00"
                    className="w-full"
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              control={formStates.control}
              name="email"
              render={({ field }) => (
                <div className="space-y-1">
                  <Label className="text-sm font-bold">E-mail</Label>
                  <Input
                    placeholder="example@gmail.com"
                    className="w-full"
                    type="email"
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              control={formStates.control}
              name="phone"
              render={({ field }) => (
                <div className="space-y-1">
                  <Label className="text-sm font-bold">
                    Celular (Whatsapp)
                  </Label>
                  <Input
                    placeholder="(00) 00000-0000"
                    type="tel"
                    className="w-full"
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              control={formStates.control}
              name="password"
              render={({ field }) => (
                <div className="space-y-1">
                  <Label className="text-sm font-bold">Senha</Label>
                  <Input
                    placeholder="Digite sua senha"
                    type="password"
                    className="w-full"
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              control={formStates.control}
              name="confirmPassword"
              render={({ field }) => (
                <div className="space-y-1">
                  <Label className="text-sm font-bold">Confirmar Senha</Label>
                  <Input
                    placeholder="Confirme sua senha"
                    type="password"
                    className="w-full"
                    {...field}
                  />
                </div>
              )}
            />
          </div>

          <div className="mt-6 w-full">
            <Button type="submit" className="w-full">
              Criar conta
            </Button>
          </div>
        </CardContent>
      </Card>
    </form>
  );
};
