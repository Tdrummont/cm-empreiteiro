import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-construction.jpg";

const Hero = () => {
  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Construindo o
          <span className="block text-accent"> Futuro </span>
          com Qualidade
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Há mais de 8 anos realizando projetos de construção civil com excelência, 
          segurança e pontualidade. Sua obra em mãos experientes.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg font-semibold"
            onClick={() => window.open('https://wa.me/5591984818573?text=Olá! Gostaria de solicitar um orçamento.', '_blank')}
          >
            Solicitar Orçamento
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-white text-white hover:bg-white hover:text-primary px-8 py-6 text-lg font-semibold"
          >
            Ver Projetos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;