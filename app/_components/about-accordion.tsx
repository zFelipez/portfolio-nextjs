import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AboutAccordion() {
  return (
    <Accordion
    
      type="single"
      collapsible
      className="w-full rounded-2xl hover:outline outline-blue-tech p-4 hover:shadow-lg shadow-blue-tech transition-all duration-300 ease-in-out"
     
    
    >
      <AccordionItem value="item-1">
        
        <AccordionTrigger className=" cursor-pointer">Quem sou eu </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance ">
          <p>
            Our flagship product combines cutting-edge technology with sleek
            design. Built with premium materials, it offers unparalleled
            performance and reliability.
          </p>
          <p>
            Key features include advanced processing capabilities, and an
            intuitive user interface designed for both beginners and experts.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Objetivos Profisionais </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            We offer worldwide shipping through trusted courier partners.
            Standard delivery takes 3-5 business days, while express shipping
            ensures delivery within 1-2 business days.
          </p>
          <p>
            All orders are carefully packaged and fully insured. Track your
            shipment in real-time through our dedicated tracking portal.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger> Formações e cursos</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            
          </p>
          <p>
            
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
