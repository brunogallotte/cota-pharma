import { Card } from "@/components/ui/card";
import { UserPlus, Search, Handshake } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: UserPlus,
      title: "Cadastre-se",
      description:
        "Crie sua conta gratuita como fornecedor ou farmácia em poucos minutos",
      color: "primary",
    },
    {
      number: "02",
      icon: Search,
      title: "Encontre Parceiros",
      description:
        "Navegue pelo catálogo e encontre os melhores fornecedores ou clientes",
      color: "secondary",
    },
    {
      number: "03",
      icon: Handshake,
      title: "Faça Negócios",
      description:
        "Negocie preços, feche acordos e acompanhe suas transações na plataforma",
      color: "primary",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Como Funciona
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Três passos simples para começar a expandir seus negócios
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 border-border relative overflow-hidden">
                  {/* Number background */}
                  <div className="absolute top-4 right-4 text-7xl font-bold text-muted/20">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="relative mb-6 inline-flex">
                    <div
                      className={`p-4 rounded-2xl ${
                        step.color === "primary"
                          ? "bg-primary/10"
                          : "bg-secondary/10"
                      }`}
                    >
                      <step.icon
                        className={`h-8 w-8 ${
                          step.color === "primary"
                            ? "text-primary"
                            : "text-secondary"
                        }`}
                      />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </Card>

                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-secondary -translate-y-1/2 z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
