"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-sidebar-foreground text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 max-md:gap-5">
        {/* Brand / About */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4 max-md:mb-2">LocalGuide</h2>
          <p className="text-sm">Discover authentic experiences with passionate local guides. Travel like a local, anywhere in Bangladesh.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 max-md:mb-2">Quick Links</h3>
          <ul className="space-y-2 max-md:space-y-1 max-md:text-sm">
            <li>
              <Link href="/explore-tours" className="hover:text-white">
                Explore Tours
              </Link>
            </li>
            <li>
              <Link href="/become-a-guide" className="hover:text-white">
                Become a Guide
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 max-md:mb-2">Support</h3>
          <ul className="space-y-2 max-md:space-y-1 max-md:text-sm">
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/frequently-asked-questions" className="hover:text-white">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 max-md:mb-2">Contact</h3>
          <p>Email: support@localguide.com</p>
          <p>Phone: +880-1234-567890</p>
          <div className="flex space-x-4 mt-4">
            <Link href="https://www.facebook.com/profile.php?id=61570830432784" target="_blank" className="hover:text-white">
              🌐 Facebook
            </Link>
            <Link href="https://x.com/dipongkorroy000" target="_blank" className="hover:text-white">
              🐦 Twitter
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">© {new Date().getFullYear()} LocalGuide. All rights reserved.</div>
    </footer>
  );
}
