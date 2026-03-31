import "./globals.css";
import Header from "@/components/layout/header/Header";
import { Merienda } from "next/font/google";
import { Roboto } from "next/font/google";
import Footer from "@/components/layout/footer/Footer";
import Campaign from "@/components/layout/campaign/Campaign";
import AosProvider from "./providers/AosProvider";
import { Toaster } from "sonner";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const merienda = Merienda({
  variable: "--font-merienda",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: {
    default: "Coffee App",
    template: "Coffee App | %s",
  },
  description: "Carefully crafted coffee in every sip",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${roboto.variable} ${merienda.variable} antialiased`}
      >
        <AosProvider>
          <Campaign />
          <Header />
          <div className="flex flex-col" style={{ minHeight: "calc(100vh - 152px)" }}>
            <div className="flex-1">
              {children}
            </div>
            <Footer />
          </div>
          <Toaster position="top-right" theme="dark" />
        </AosProvider>
      </body>
    </html>
  );
}