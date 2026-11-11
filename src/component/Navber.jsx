"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { signOut, useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const Avatar = ({ user }) =>
  user.image ? (
    <img
      src={user.image}
      alt={user.name || "User"}
      className="h-9 w-9 rounded-full object-cover ring-2 ring-[#6254ff]"
    />
  ) : (
    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#6254ff] text-sm font-semibold text-white">
      {user.name?.charAt(0).toUpperCase() || "U"}
    </div>
  );

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();
  const user = session?.user;
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut();
      router.refresh();
      router.push("/signIn");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const navLinks = [
    { name: "Jobs", href: "/jobs" },
    { name: "Company", href: "/companies" },
    { name: "Pricing", href: "/pricing" },
  ];

  return (
    <header className="w-full bg-[#202020]">
      <nav className="flex w-full items-center justify-between px-5 py-4 md:px-10 lg:px-16">
        {/* Logo - Left Side */}
        <Link href="/" className="text-2xl font-extrabold tracking-tight">
          <span className="text-blue-500">hire</span>
          <span className="text-orange-500">loop</span>
        </Link>

        {/* Desktop Navigation - Right Side */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 transition hover:text-white"
            >
              {link.name}
            </Link>
          ))}

          {user ? (
            <>
              <Avatar user={user} />

              <button
                onClick={handleLogout}
                className="rounded-lg border border-white/20 px-4 py-2 text-sm font-medium text-gray-300 transition hover:border-white/40 hover:text-white"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/signIn"
                className="text-sm font-medium text-gray-300 transition hover:text-white"
              >
                Sign In
              </Link>

              <Link
                href="/register"
                className="rounded-lg bg-[#6254ff] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#5142ed]"
              >
                Get Started
              </Link>
            </>
          )}
        </div>

        {/* Mobile: Avatar + Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          {user && <Avatar user={user} />}

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-white"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="w-full border-t border-gray-700 bg-[#202020] px-5 py-5 md:hidden">
          <ul className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-sm font-medium text-gray-300 transition hover:text-white"
                >
                  {link.name}
                </Link>
              </li>
            ))}

            {user ? (
              <li>
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    handleLogout();
                  }}
                  className="block w-full rounded-lg border border-white/20 px-5 py-2.5 text-center text-sm font-medium text-gray-300 transition hover:border-white/40 hover:text-white"
                >
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li>
                  <Link
                    href="/signIn"
                    onClick={() => setIsOpen(false)}
                    className="block text-sm font-medium text-gray-300 transition hover:text-white"
                  >
                    Sign In
                  </Link>
                </li>

                <li>
                  <Link
                    href="/register"
                    onClick={() => setIsOpen(false)}
                    className="block rounded-lg bg-[#6254ff] px-5 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-[#5142ed]"
                  >
                    Get Started
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;