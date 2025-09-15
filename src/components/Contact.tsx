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
    <section id="contato" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-card-foreground mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pronto para começar seu projeto? Entre em contato conosco e 
            solicite um orçamento personalizado sem compromisso.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-card-foreground mb-8">
              Informações de Contato
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">{item.title}</h4>
                    <p className="text-primary font-medium">{item.info}</p>
                    <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-background p-6 rounded-lg border border-border">
              <h4 className="font-semibold text-foreground mb-2">
                Por que escolher a CM - Empreiteiro?
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Orçamento gratuito e sem compromisso</li>
                <li>• Equipe técnica especializada</li>
                <li>• Garantia em todos os serviços</li>
                <li>• Atendimento personalizado</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-card-foreground">
                Solicite seu Orçamento
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-card-foreground mb-2 block">
                    Nome
                  </label>
                  <Input placeholder="Seu nome completo" />
                </div>
                <div>
                  <label className="text-sm font-medium text-card-foreground mb-2 block">
                    Telefone
                  </label>
                  <Input placeholder="(11) 9 9999-9999" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-card-foreground mb-2 block">
                  E-mail
                </label>
                <Input placeholder="seu@email.com" type="email" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-card-foreground mb-2 block">
                  Tipo de Projeto
                </label>
                <Input placeholder="Ex: Casa, Reforma, Comercial..." />
              </div>
              
              <div>
                <label className="text-sm font-medium text-card-foreground mb-2 block">
                  Mensagem
                </label>
                <Textarea 
                  placeholder="Descreva seu projeto e suas necessidades..."
                  className="min-h-32"
                />
              </div>
              
              <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
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