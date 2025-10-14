"use client";

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <h1 className="text-2xl font-bold text-primary">CotaFarma</h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/como-funciona"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Como Funciona
            </Link>
            <Link
              href="/beneficios"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Benefícios
            </Link>
            <Link
              href="/precos"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Preços
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" asChild>
              <Link href="/login">Entrar</Link>
            </Button>
            <Button variant="default" asChild>
              <Link href="/cadastro" scroll={true}>
                Criar Conta
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6 text-foreground" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3 animate-fade-in">
            <Link
              href="/como-funciona"
              className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
            >
              Como Funciona
            </Link>
            <Link
              href="/beneficios"
              className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
            >
              Benefícios
            </Link>
            <Link
              href="/precos"
              className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
            >
              Preços
            </Link>
            <div className="pt-4 space-y-2">
              <Button variant="ghost" className="w-full" asChild>
                <Link href="/login">Entrar</Link>
              </Button>
              <Button variant="default" className="w-full" asChild>
                <Link href="/signup">Criar Conta</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
