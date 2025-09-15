import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-card border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="/logo-CM.png" 
            alt="CM - Empreiteiro" 
            className="h-16 w-auto"
          />
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#inicio" className="text-foreground hover:text-primary transition-colors">
            Início
          </a>
          <a href="#servicos" className="text-foreground hover:text-primary transition-colors">
            Serviços
          </a>
          <a href="#sobre" className="text-foreground hover:text-primary transition-colors">
            Sobre
          </a>
          <a href="#projetos" className="text-foreground hover:text-primary transition-colors">
            Projetos
          </a>
          <a href="#contato" className="text-foreground hover:text-primary transition-colors">
            Contato
          </a>
        </nav>

        <Button 
          variant="default" 
          className="hidden md:inline-flex"
          onClick={() => window.open('https://wa.me/5591984818573?text=Olá! Gostaria de solicitar um orçamento.', '_blank')}
        >
          Solicitar Orçamento
        </Button>
      </div>
    </header>
  );
};

export default Header;