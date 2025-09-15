import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      info: "(91) 99324-2545 ou (91) 98481-8573",
      subtitle: "Ligue para nós"
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "cmemp.official@gmail.com",
      subtitle: "Envie sua mensagem"
    },
    {
      icon: MapPin,
      title: "Endereço",
      info: "Belém, PA",
      subtitle: "Nossa localização"
    },
    {
      icon: Clock,
      title: "Horário",
      info: "Seg - Sex: 8h às 18h",
      subtitle: "Atendimento comercial"
    }
  ];

  return (
    <section id="contato" className="py-12 sm:py-16 lg:py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-card-foreground mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Pronto para começar seu projeto? Entre em contato conosco e 
            solicite um orçamento personalizado sem compromisso.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="order-2 lg:order-1">
            <h3 className="text-xl sm:text-2xl font-bold text-card-foreground mb-6 sm:mb-8">
              Informações de Contato
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg hover:bg-background/50 transition-colors">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-card-foreground text-sm sm:text-base">{item.title}</h4>
                    <p className="text-primary font-medium text-sm sm:text-base break-words">{item.info}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-background p-4 sm:p-6 rounded-lg border border-border">
              <h4 className="font-semibold text-foreground mb-3 text-sm sm:text-base">
                Por que escolher a CM - Empreiteiro?
              </h4>
              <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Orçamento gratuito e sem compromisso</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Equipe técnica especializada</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Garantia em todos os serviços</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Atendimento personalizado</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="order-1 lg:order-2">
            <CardHeader className="pb-4 sm:pb-6">
              <CardTitle className="text-xl sm:text-2xl text-card-foreground">
                Solicite seu Orçamento
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-card-foreground mb-2 block">
                    Nome
                  </label>
                  <Input 
                    placeholder="Seu nome completo" 
                    className="h-12 text-base"
                    inputMode="text"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-card-foreground mb-2 block">
                    Telefone
                  </label>
                  <Input 
                    placeholder="(11) 9 9999-9999" 
                    className="h-12 text-base"
                    inputMode="tel"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-card-foreground mb-2 block">
                  E-mail
                </label>
                <Input 
                  placeholder="seu@email.com" 
                  type="email" 
                  className="h-12 text-base"
                  inputMode="email"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-card-foreground mb-2 block">
                  Tipo de Projeto
                </label>
                <Input 
                  placeholder="Ex: Casa, Reforma, Comercial..." 
                  className="h-12 text-base"
                  inputMode="text"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-card-foreground mb-2 block">
                  Mensagem
                </label>
                <Textarea 
                  placeholder="Descreva seu projeto e suas necessidades..."
                  className="min-h-32 text-base resize-none"
                  inputMode="text"
                />
              </div>
              
              <Button 
                className="w-full bg-primary hover:bg-primary/90 h-12 text-base font-medium" 
                size="lg"
              >
                Enviar Solicitação
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;