"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function MobileHeader() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="text-mauve-300 w-9 h-9 border border-mauve-700 rounded-md cursor-pointer flex items-center justify-center hover:border-mauve-400 transition-colors duration-300">
          <Menu size={18} />
        </button>
      </SheetTrigger>

      <SheetContent
        side="right"
        showCloseButton={false}
        className="bg-[#121212] text-mauve-100 flex flex-col"
      >
        {/* Başlık */}
        <SheetTitle className="text-mauve-100 font-(family-name:--font-merienda) text-lg px-4 pt-4 flex items-center justify-center">
          - Menu -
        </SheetTitle>

        {/* Navigasyon linkleri */}
        <nav className="flex flex-col mt-4 px-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`py-4 text-sm font-(family-name:--font-merienda) border-b border-mauve-800/50 transition-colors duration-300
                ${pathname === link.href
                  ? "text-mauve-100"
                  : "text-mauve-500 hover:text-mauve-200"
                }`}
            >
              {link.name}
              {pathname === link.href && (
                <span className="ml-2 text-mauve-600">•</span>
              )}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}