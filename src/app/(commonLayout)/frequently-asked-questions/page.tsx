"use client";

import {Accordion, AccordionItem, AccordionTrigger, AccordionContent} from "@/src/components/ui/accordion";

const FAQPage = () => {
  return (
    <section className="bg-gradient-to-r from-primary-foreground via-white to-primary-foreground min-h-screen">
      <div className="max-w-7xl mx-auto py-20 space-y-8">
        {/* Page Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="q1">
            <AccordionTrigger className="text-xl">How do I book a tour?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-lg">
              You can book a tour directly from the tour details page. If you’re logged in, click the <strong>Request Tour</strong> button and follow the
              instructions.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q2">
            <AccordionTrigger className="text-xl">Is my payment secure?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-lg">
              Yes. All payments are processed securely using encrypted gateways. We never store your card details.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q3">
            <AccordionTrigger className="text-xl">Can I cancel a booking?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-lg">
              Yes, you can cancel a booking before the tour date. Refunds depend on the guide’s cancellation policy, which is shown during booking.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q4">
            <AccordionTrigger className="text-xl">How are guides verified?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-lg">
              All guides go through an identity verification process and must provide accurate contact details before being approved.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q5">
            <AccordionTrigger className="text-xl">What if I have issues during a tour?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-lg">
              You can contact our support team anytime. We’ll help resolve issues and ensure your experience is safe and enjoyable.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQPage;
