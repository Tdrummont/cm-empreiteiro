import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const isMobile = useIsMobile();

  const menuItems = [
    { href: "#inicio", label: "Início" },
    { href: "#servicos", label: "Serviços" },
    { href: "#sobre", label: "Sobre" },
    { href: "#projetos", label: "Projetos" },
    { href: "#contato", label: "Contato" },
  ];

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
        
        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <a 
              key={item.href}
              href={item.href} 
              className="text-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Botão Desktop */}
        <Button 
          variant="default" 
          className="hidden md:inline-flex"
          onClick={() => window.open('https://wa.me/5591984818573?text=Olá! Gostaria de solicitar um orçamento.', '_blank')}
        >
          Solicitar Orçamento
        </Button>

        {/* Menu Mobile */}
        {isMobile && (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[350px]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-4 mt-6">
                {menuItems.map((item) => (
                  <SheetClose key={item.href} asChild>
                    <a 
                      href={item.href}
                      className="text-foreground hover:text-primary transition-colors py-2 px-3 rounded-md hover:bg-accent text-left"
                    >
                      {item.label}
                    </a>
                  </SheetClose>
                ))}
                <div className="pt-4 border-t">
                  <Button 
                    variant="default" 
                    className="w-full"
                    onClick={() => {
                      window.open('https://wa.me/5591984818573?text=Olá! Gostaria de solicitar um orçamento.', '_blank');
                    }}
                  >
                    Solicitar Orçamento
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </header>
  );
};

export default Header;