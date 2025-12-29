import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Em quanto tempo meu site fica pronto?",
    answer:
      "Em até 3 dias úteis, após o envio das informações necessárias.",
  },
  {
    question: "O site é feito com modelo pronto?",
    answer:
      "Não. Todo o design é criado sob medida, sem templates genéricos.",
  },
  {
    question: "Tenho direito a alterações?",
    answer:
      "Sim. Até 3 alterações dentro do prazo de 30 dias após a entrega oficial.",
  },
  {
    question: "O que está incluso no suporte?",
    answer:
      "Suporte técnico, garantindo o funcionamento correto do site. Não inclui alterações visuais ou mudanças de conteúdo.",
  },
  {
    question: "Posso parcelar o pagamento?",
    answer:
      "Sim. O valor pode ser pago em até 12x no cartão, conforme as condições do checkout.",
  },
  {
    question: "O que acontece após o primeiro ano?",
    answer:
      "A renovação da hospedagem e do domínio custa apenas R$99 por ano.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-foreground mb-6">
              <HelpCircle className="w-4 h-4" />
              <span className="text-sm font-semibold">DÚVIDAS FREQUENTES</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Perguntas Frequentes
            </h3>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-brand-red py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
