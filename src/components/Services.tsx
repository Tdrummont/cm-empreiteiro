import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Hammer, PaintBucket, Wrench } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Building,
      title: "Construção Residencial",
      description: "Construção completa de casas e edifícios residenciais com acabamento de primeira qualidade."
    },
    {
      icon: Hammer,
      title: "Construção Comercial",
      description: "Projetos comerciais e industriais executados com precisão e dentro do prazo estabelecido."
    },
    {
      icon: PaintBucket,
      title: "Reformas e Renovações",
      description: "Reformas completas ou parciais, modernizando e valorizando seu imóvel."
    },
    {
      icon: Wrench,
      title: "Manutenção Predial",
      description: "Serviços de manutenção preventiva e corretiva para preservar sua propriedade."
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Oferecemos soluções completas em construção civil, sempre priorizando 
            qualidade, segurança e satisfação do cliente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-border bg-card"
            >
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-card-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;