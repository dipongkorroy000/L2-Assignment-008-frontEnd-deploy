"use client";

import {Button} from "@/src/components/ui/button";
import {MessageSquareShare} from "lucide-react";
import {useRouter} from "next/navigation";

const ContactHeader = () => {
  const router = useRouter();

  return (
    <section className="w-full bg-gradient-to-r from-chart-3 via-chart-4 to-chart-5 text-white rounded-lg shadow-md md:py-16 py-10 px-6 text-center flex flex-col items-center justify-center space-y-6">
      {/* Hero Title */}
      <h1 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight flex items-center justify-center gap-2">
        <MessageSquareShare className="text-yellow-300 xl:h-10 xl:w-10 md:h-8 md:w-8 h-6 w-6" />
        Contact With Us
      </h1>

      {/* Subtext */}
      <p className="max-w-2xl text-sm md:text-xl text-white/90">
        Discover trusted guides, explore destinations, and make your journey unforgettable with personalized recommendations.
      </p>

      {/* CTA Button */}
      <Button
        onClick={() => router.push("/contact")}
        size="lg"
        className="md:mt-4 mt-1 px-8 py-3 rounded-full bg-white text-chart-5 font-semibold shadow-lg hover:bg-gray-200 transition-all duration-300 ease-in-out cursor-pointer"
      >
        Contact Us
      </Button>
    </section>
  );
};

export default ContactHeader;
