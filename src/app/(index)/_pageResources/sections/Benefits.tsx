import { Card } from "@/components/ui/card";
import {
  Building2,
  ShoppingBag,
  TrendingUp,
  Shield,
  Clock,
  Users,
} from "lucide-react";

export const Benefits = () => {
  const supplierBenefits = [
    {
      icon: TrendingUp,
      title: "Aumente suas Vendas",
      description:
        "Acesso direto a milhares de farmácias em busca de fornecedores confiáveis",
    },
    {
      icon: Users,
      title: "Rede Expandida",
      description:
        "Conecte-se com novos clientes em todo o território nacional",
    },
    {
      icon: Clock,
      title: "Processo Simplificado",
      description: "Gestão eficiente de pedidos e comunicação centralizada",
    },
  ];

  const pharmacyBenefits = [
    {
      icon: Shield,
      title: "Fornecedores Verificados",
      description:
        "Todos os fornecedores passam por rigoroso processo de validação",
    },
    {
      icon: ShoppingBag,
      title: "Variedade de Produtos",
      description: "Amplo catálogo de matérias-primas e insumos farmacêuticos",
    },
    {
      icon: TrendingUp,
      title: "Melhores Preços",
      description: "Compare ofertas e negocie diretamente com fornecedores",
    },
  ];

  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Benefícios para Todos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Uma plataforma projetada para atender às necessidades de
            fornecedores e farmácias
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Fornecedores */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-primary/10">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Para Fornecedores
              </h3>
            </div>

            <div className="space-y-4">
              {supplierBenefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-all duration-300 border-border"
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <benefit.icon className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        {benefit.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Farmácias */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-secondary/10">
                <ShoppingBag className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Para Farmácias
              </h3>
            </div>

            <div className="space-y-4">
              {pharmacyBenefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-all duration-300 border-border"
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="p-2 rounded-lg bg-secondary/10">
                        <benefit.icon className="h-5 w-5 text-secondary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        {benefit.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
