"use client";

import Link from "next/link";
import {Github} from "lucide-react";
import {FaLinkedinIn, FaStripe} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-10 gap-8">
        {/* Left Card: LocalGuide + Quick Links + Support (70% on md+) */}
        <div className="md:col-span-7 bg-gray-800/50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">LocalGuide</h2>
          <p className="text-sm leading-relaxed mb-6">
            Discover authentic experiences with passionate local guides. Travel like a local, anywhere in Bangladesh.
          </p>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/explore-tours" className="hover:text-primary transition-colors">
                    Explore Tours
                  </Link>
                </li>
                <li>
                  <Link href="/become-a-guide" className="hover:text-primary transition-colors">
                    Become a Guide
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/contact" className="hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/frequently-asked-questions" className="hover:text-primary transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Card: Contact (30% on md+) */}
        <div className="md:col-span-3 bg-gray-800/50 rounded-xl p-8">
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <p className="text-sm mb-2">
            Email:{" "}
            <Link href="mailto:dipongkorroy000@gmail.com" target="_blank" className="hover:text-primary transition-colors">
              dipongkorroy000@gmail.com
            </Link>
          </p>
          <p className="text-sm mb-4">Phone: +880-1799-760840</p>

          <div className="flex space-x-3">
            <Link href="https://www.linkedin.com/in/dipongkor" target="_blank" className="p-2 rounded-full bg-gray-700 hover:bg-primary transition-colors">
              <FaLinkedinIn size={18} />
            </Link>
            <Link href="https://github.com/dipongkorroy000" target="_blank" className="p-2 rounded-full bg-gray-700 hover:bg-primary transition-colors">
              <Github size={18} />
            </Link>
          </div>

          <div className="mt-5">
            <h3 className="text-lg text-white font-thin">Payment With</h3>
            <FaStripe size={60} className="text-[#635BFF] drop-shadow-[0_0_8px_rgba(99,91,255,0.7)]" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} <span className="text-white font-semibold">LocalGuide</span>. All rights reserved.
      </div>
    </footer>
  );
}
