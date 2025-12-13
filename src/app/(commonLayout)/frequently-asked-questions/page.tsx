"use client";

import React from "react";
import {Accordion, AccordionItem, AccordionTrigger, AccordionContent} from "@/src/components/ui/accordion";

const FAQPage = () => {
  return (
    <section className="max-w-4xl mx-auto py-12 space-y-8">
      {/* Page Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
        <p className="text-muted-foreground">Find quick answers to common questions about Local Guide.</p>
      </div>

      {/* FAQ Accordion */}
      <Accordion type="single" collapsible className="w-full space-y-4">
        <AccordionItem value="q1">
          <AccordionTrigger>How do I book a tour?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            You can book a tour directly from the tour details page. If you’re logged in, click the <strong>Request Tour</strong> button and follow the
            instructions.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q2">
          <AccordionTrigger>Is my payment secure?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Yes. All payments are processed securely using encrypted gateways. We never store your card details.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q3">
          <AccordionTrigger>Can I cancel a booking?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Yes, you can cancel a booking before the tour date. Refunds depend on the guide’s cancellation policy, which is shown during booking.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q4">
          <AccordionTrigger>How are guides verified?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            All guides go through an identity verification process and must provide accurate contact details before being approved.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q5">
          <AccordionTrigger>What if I have issues during a tour?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            You can contact our support team anytime. We’ll help resolve issues and ensure your experience is safe and enjoyable.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default FAQPage;
