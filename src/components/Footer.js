import Link from 'next/link';

const Footer = () => (
  <footer className="bg-gray-100 text-gray-700 text-sm pt-10 pb-6 px-4 sm:px-10">
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Contact Info */}
      <div className="text-center leading-relaxed">
        <p className="font-semibold text-green-900">
          Dr. Serena Blake, PsyD – Licensed Clinical Psychologist
        </p>
        <p>Email: <a href="mailto:serena@blakepsychology.com" className="text-green-800 hover:underline">serena@blakepsychology.com</a></p>
        <p>Phone: (323) 555-0192</p>
        <p>1287 Maplewood Drive, Los Angeles, CA 90026</p>
      </div>

      {/* Links */}
      <div className="flex flex-wrap justify-center gap-6 text-center">
        <Link href="/" className="hover:text-green-800">Home</Link>
        <Link href="/privacy" className="hover:text-green-800">Privacy Policy</Link>
        <Link href="/good-faith-estimate" className="hover:text-green-800">Good Faith Estimate</Link>
        <Link href="/portal" className="hover:text-green-800">Client Portal</Link>
      </div>

      {/* Copyright */}
      <p className="text-center text-gray-500 text-xs">
        © 2025 Serena Blake PsyD Psychological Services, PLLC. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
