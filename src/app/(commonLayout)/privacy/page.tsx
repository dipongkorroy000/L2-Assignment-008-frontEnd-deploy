"use client";

import PrivacyComponent from "@/src/components/privacy/PrivacyComponent";

export default function PrivacyPage() {
  return (
    <section className="bg-gradient-to-r from-primary-foreground via-white to-primary-foreground min-h-screen">
      <div className="max-w-7xl mx-auto py-20 max-md:py-10 max-xl:mx-10 max-md:mx-0 px-5">
        <PrivacyComponent></PrivacyComponent>
      </div>
    </section>
  );
}
