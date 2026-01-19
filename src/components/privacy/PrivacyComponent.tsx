import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/src/components/ui/accordion";

const PrivacyComponent = () => {
  return (
    <>
      <h1 className="text-4xl text-center font-semibold  max-xl:text-2xl max-lg:text-xl text-primary max-md:mb-5">Privacy & Data Protection</h1>

      {/* Privacy Overview Card */}
      <div className="px-8 space-y-5 border-none max-md:space-y-2 max-md:p-5">
        <h2 className="text-chart-5 text-xl max-md:text-lg">Overview</h2>

        <div className="space-y-3 text-muted-foreground max-lg:text-sm">
          <p>
            We collect and use your data responsibly to provide safe and reliable guide services. Your personal information is never shared without consent.
          </p>
          <p>This privacy policy explains what data we collect, how we use it, and your rights.</p>
        </div>
      </div>

      {/* Accordion for Details */}
      <Accordion type="single" collapsible className="w-full p-8 max-md:p-5">
        <AccordionItem value="dataCollection">
          <AccordionTrigger className="2xl:text-xl xl:text-lg max-md:text-sm dark:text-gray-300">Data We Collect</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            <ul className="list-disc pl-6 space-y-1 text-lg max-lg:text-sm">
              <li>Basic profile info (name, email, contact number)</li>
              <li>Tour booking details</li>
              <li>Payment information (securely processed)</li>
              <li>Reviews and ratings you provide</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="dataUsage">
          <AccordionTrigger className="2xl:text-xl xl:text-lg max-md:text-sm dark:text-gray-300">How We Use Your Data</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            <ul className="list-disc pl-6 space-y-1 text-lg max-lg:text-sm">
              <li>To connect tourists with guides</li>
              <li>To process secure payments</li>
              <li>To improve our services and user experience</li>
              <li>To comply with legal requirements</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="rights">
          <AccordionTrigger className="2xl:text-xl xl:text-lg max-md:text-sm dark:text-gray-300">Your Rights</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            <ul className="list-disc pl-6 space-y-1 text-lg max-lg:text-sm">
              <li>Access and update your personal data</li>
              <li>Request deletion of your account</li>
              <li>Control how your data is used</li>
              <li>Contact support for privacy concerns</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default PrivacyComponent;
