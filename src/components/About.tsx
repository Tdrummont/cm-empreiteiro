import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Calendar, Award } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Calendar, number: "10+", label: "Anos de Experiência" },
    { icon: Users, number: "50+", label: "Projetos Concluídos" },
    { icon: Award, number: "98%", label: "Satisfação dos Clientes" },
  ];

  return (
    <section id="sobre" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-card-foreground mb-6">
              Sobre a CM - Empreiteiro
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            A CM Empreiteiros é uma empresa especializada em soluções completas para construção civil, unindo qualidade técnica, compromisso com prazos e transparência em cada etapa da obra. Atuamos em Belém e região, 
              oferecendo serviços que vão desde a fundação até o acabamento,
              sempre com foco em entregar obras sólidas, seguras e alinhadas às necessidades de cada cliente.
              Nosso diferencial está na dedicação de uma equipe qualificada, 
              que trabalha com materiais de primeira linha e técnicas modernas para garantir resultados duradouros. Mais do que levantar paredes, acreditamos que cada projeto é um passo importante na vida de nossos clientes,
              e por isso tratamos cada obra com seriedade e atenção aos detalhes.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Equipe especializada e certificada",
                "Materiais de primeira qualidade",
                "Projetos personalizados",
                "Cumprimento rigoroso de prazos",
                "Suporte técnico completo"
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-card-foreground">{item}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Conheça Nossa História
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center p-6 bg-background rounded-lg border border-border"
              >
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;