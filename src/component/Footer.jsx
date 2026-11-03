
import Link from "next/link";
import {
  FaFacebookF,
  FaPinterestP,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Job discovery", href: "/jobs" },
        { name: "Worker AI", href: "/worker-ai" },
        { name: "Companies", href: "/companies" },
        { name: "Salary data", href: "/salary" },
      ],
    },
    {
      title: "Navigations",
      links: [
        { name: "Help center", href: "/help" },
        { name: "Career library", href: "/career-library" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Brand Guideline", href: "/brand-guideline" },
        { name: "Newsroom", href: "/newsroom" },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: <FaFacebookF />,
      href: "https://facebook.com",
      label: "Facebook",
    },
    {
      icon: <FaPinterestP />,
      href: "https://pinterest.com",
      label: "Pinterest",
    },
    {
      icon: <FaLinkedinIn />,
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="relative w-full overflow-hidden bg-[#050505] text-gray-400">

      {/* Background Design */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 0%, #29205c 0%, transparent 55%),
            repeating-linear-gradient(
              90deg,
              transparent 0px,
              transparent 39px,
              #222222 40px
            )
          `,
        }}
      />

      <div className="relative mx-auto w-full px-5 pt-14 md:px-10 md:pt-16 lg:px-16">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">

          {/* Brand Section */}
          <div className="lg:col-span-2">

            <Link
              href="/"
              className="inline-block text-2xl font-extrabold tracking-tight"
            >
              <span className="text-blue-500">hire</span>
              <span className="text-orange-500">loop</span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-500">
              The AI-native career platform. Built for
              people who take their work seriously.
            </p>

          </div>

          {/* Footer Link Sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>

              <h3 className="mb-6 text-sm font-semibold text-indigo-400">
                {section.title}
              </h3>

              <ul className="flex flex-col gap-4">

                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-500 transition duration-200 hover:text-white"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}

              </ul>

            </div>
          ))}

        </div>

        {/* Bottom Footer */}
        <div className="mt-14 flex flex-col gap-6 border-t border-white/10 py-7 md:flex-row md:items-center md:justify-between">

          {/* Social Media */}
          <div className="flex items-center gap-2">

            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-md bg-[#151515] text-lg text-gray-400 transition duration-200 hover:bg-indigo-600 hover:text-white"
              >
                {social.icon}
              </a>
            ))}

          </div>

          {/* Copyright & Policies */}
          <div className="flex flex-col gap-3 text-sm md:flex-row md:items-center md:gap-7">

            <p className="text-gray-500">
              Copyright © 2026 — HireLoop
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <Link
                href="/terms"
                className="text-gray-500 transition hover:text-white"
              >
                Terms & Policy
              </Link>

              <Link
                href="/privacy"
                className="text-gray-500 transition hover:text-white"
              >
                Privacy Guideline
              </Link>
            </div>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
