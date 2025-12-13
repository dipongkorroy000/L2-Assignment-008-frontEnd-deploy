"use client";

import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/src/components/ui/accordion";
import {Card, CardHeader, CardTitle, CardContent} from "@/src/components/ui/card";

export default function PrivacyPage() {
  return (
    <section className="max-w-4xl mx-auto space-y-8 py-20">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold max-lg:text-xl text-primary">Privacy & Data Protection</h1>
        <p className="text-muted-foreground">Your trust matters. Here’s how we handle your information.</p>
      </div>

      {/* Privacy Overview Card */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-chart-5">Overview</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-muted-foreground max-lg:text-sm">
          <p>
            We collect and use your data responsibly to provide safe and reliable guide services. Your personal information is never shared without consent.
          </p>
          <p>This privacy policy explains what data we collect, how we use it, and your rights.</p>
        </CardContent>
      </Card>

      {/* Accordion for Details */}
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="dataCollection">
          <AccordionTrigger>Data We Collect</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            <ul className="list-disc pl-6 space-y-1">
              <li>Basic profile info (name, email, contact number)</li>
              <li>Tour booking details</li>
              <li>Payment information (securely processed)</li>
              <li>Reviews and ratings you provide</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="dataUsage">
          <AccordionTrigger>How We Use Your Data</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            <ul className="list-disc pl-6 space-y-1">
              <li>To connect tourists with guides</li>
              <li>To process secure payments</li>
              <li>To improve our services and user experience</li>
              <li>To comply with legal requirements</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="rights">
          <AccordionTrigger>Your Rights</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            <ul className="list-disc pl-6 space-y-1">
              <li>Access and update your personal data</li>
              <li>Request deletion of your account</li>
              <li>Control how your data is used</li>
              <li>Contact support for privacy concerns</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
