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
import { Button } from "@/components/ui/button";
import { TextInput } from "@/components/TextInput";

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
      className="w-full py-10 max-w-2xl"
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
              render={({ field, fieldState }) => (
                <TextInput
                  label="Nome Completo"
                  {...field}
                  error={fieldState.error?.message}
                />
              )}
            />

            <Controller
              control={formStates.control}
              name="cnpj"
              render={({ field, fieldState }) => (
                <TextInput
                  label="CNPJ"
                  mask="##.###.###/####-##"
                  placeholder="00.000.000/0000-00"
                  {...field}
                  error={fieldState.error?.message}
                />
              )}
            />

            <Controller
              control={formStates.control}
              name="email"
              render={({ field, fieldState }) => (
                <TextInput
                  label="E-mail"
                  {...field}
                  error={fieldState.error?.message}
                />
              )}
            />

            <Controller
              control={formStates.control}
              name="phone"
              render={({ field, fieldState }) => (
                <TextInput
                  label="Celular (Whatsapp)"
                  mask="+55 (##) #####-####"
                  placeholder="+55 (00) 00000-0000"
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
                  {...field}
                  error={fieldState.error?.message}
                />
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
