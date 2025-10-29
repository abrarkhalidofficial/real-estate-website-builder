import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const defaultFAQs = [
  {
    id: "1",
    question: "How do I schedule a property viewing?",
    answer: "You can schedule a property viewing by contacting us through our website or calling our office directly. Our team will arrange a convenient time for you to visit the property."
  },
  {
    id: "2",
    question: "What documents do I need to buy a property?",
    answer: "You'll need proof of identity, proof of income, bank statements, and pre-approval for a mortgage if applicable. Our team will guide you through the entire documentation process."
  },
  {
    id: "3",
    question: "Do you offer property management services?",
    answer: "Yes, we offer comprehensive property management services including tenant screening, rent collection, maintenance coordination, and financial reporting."
  },
  {
    id: "4",
    question: "What are your commission rates?",
    answer: "Our commission rates are competitive and vary depending on the type and value of the property. Contact us for a detailed quote tailored to your specific needs."
  }
];

export const BuilderFAQ = () => {
  return (
    <div className="space-y-6">
      <div className="border-b border-border pb-4">
        <h2 className="text-2xl font-bold">FAQ Section</h2>
        <p className="text-muted-foreground">Answer common questions from your clients</p>
      </div>

      <div className="max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h3>
        <Accordion type="single" collapsible className="w-full">
          {defaultFAQs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger className="text-left font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};
