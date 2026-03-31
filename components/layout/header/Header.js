"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import headerLogo from "../../../public/images/header-logo.png";
import Container from "@/components/container";
import { usePathname } from "next/navigation";
import { MobileHeader } from "./MobileHeader";
import CartSheet from "@/components/CartSheet";

function Header() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <Container>
      <header className="text-mauve-100 flex items-center justify-between gap-y-4 bg-transparent h-18 w-full">
        {/* SOL TARAF : LOGO + SİTE ADI */}
        <nav className="flex items-center gap-2">
          <Link href={"/"} className="flex items-center">
            <Image
              src={headerLogo}
              quality={100}
              alt="logo"
              className="h-16 w-16 object-cover"
            />
          </Link>
          <div className="w-px h-4 bg-mauve-100 mr-2"></div>
          <span className="font-(family-name:--font-merienda) typing-text">
            COFFEE APP
          </span>{" "}
        </nav>

        {/* SAĞ TARAF : NAVIGATION (DESKTOP) */}
        <nav className="hidden md:flex">
          <div className="flex items-center gap-8 font-(family-name:--font-merienda) text-sm">
            {" "}
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`hover:text-mauve-300 transition-colors duration-300 ${pathname === link.href && "underline underline-offset-8 decoration-mauve-300"}`}
              >
                {link.name}
              </Link>
            ))}
            {/* Sepet : tıklayınca sağdan panel açılır */}
            <CartSheet />
          </div>
        </nav>

        {/* MOBİL / sepet + hamburger menü yan yana */}
        <nav className="md:hidden flex items-center gap-4">
          <CartSheet />
          <MobileHeader />
        </nav>
      </header>
    </Container>
  );
}

export default Header;