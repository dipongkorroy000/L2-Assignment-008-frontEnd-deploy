import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/src/components/ui/accordion";
import {Card, CardHeader, CardTitle, CardContent} from "@/src/components/ui/card";

const PrivacyComponent = () => {
  return (
    <div>
      <h1 className="text-4xl text-center mb-10 font-semibold max-lg:text-xl text-primary max-md:mb-5">Privacy & Data Protection</h1>

      {/* Privacy Overview Card */}
      <Card className="shadow-sm mb-10 border-none max-md:mb-5">
        <CardHeader>
          <CardTitle className="text-chart-5 text-xl max-md:text-lg">Overview</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-muted-foreground max-lg:text-sm">
          <p>
            We collect and use your data responsibly to provide safe and reliable guide services. Your personal information is never shared without consent.
          </p>
          <p>This privacy policy explains what data we collect, how we use it, and your rights.</p>
        </CardContent>
      </Card>

      {/* Accordion for Details */}
      <Accordion type="single" collapsible className="w-full max-md:p-5">
        <AccordionItem value="dataCollection">
          <AccordionTrigger className="text-xl max-md:text-lg">Data We Collect</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            <ul className="list-disc pl-6 space-y-1 text-lg">
              <li>Basic profile info (name, email, contact number)</li>
              <li>Tour booking details</li>
              <li>Payment information (securely processed)</li>
              <li>Reviews and ratings you provide</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="dataUsage">
          <AccordionTrigger className="text-xl max-md:text-lg">How We Use Your Data</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            <ul className="list-disc pl-6 space-y-1 text-lg">
              <li>To connect tourists with guides</li>
              <li>To process secure payments</li>
              <li>To improve our services and user experience</li>
              <li>To comply with legal requirements</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="rights">
          <AccordionTrigger className="text-xl max-md:text-lg">Your Rights</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            <ul className="list-disc pl-6 space-y-1 text-lg">
              <li>Access and update your personal data</li>
              <li>Request deletion of your account</li>
              <li>Control how your data is used</li>
              <li>Contact support for privacy concerns</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default PrivacyComponent;
