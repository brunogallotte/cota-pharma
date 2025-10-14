import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-32 overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-background -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Conectando o Mercado Farmacêutico
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Conecte Fornecedores e{" "}
              <span className="text-primary">Farmácias</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              A plataforma B2B que simplifica a cadeia de suprimentos
              farmacêuticos. Encontre fornecedores confiáveis de matéria-prima e
              expanda seus negócios.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-base">
                Começar Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="heroSecondary" size="lg" className="text-base">
                <Play className="mr-2 h-5 w-5" />
                Ver Como Funciona
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-muted-foreground">
                  Fornecedores
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-1">
                  2000+
                </div>
                <div className="text-sm text-muted-foreground">Farmácias</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">98%</div>
                <div className="text-sm text-muted-foreground">Satisfação</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* <img
                src={heroImage.src}
                alt="Plataforma de conexão entre fornecedores e farmácias"
                className="w-full h-auto object-cover"
              /> */}
              {/* Floating card */}
              <div className="absolute bottom-6 left-6 right-6 bg-card/95 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">
                      Transações Mensais
                    </div>
                    <div className="text-2xl font-bold text-foreground">
                      R$ 15M+
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-secondary">
                    <span className="text-2xl">↗</span>
                    <span className="text-lg font-semibold">+24%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};
