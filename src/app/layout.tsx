import type { Metadata } from "next";
import {
  Alatsi,
  Abril_Fatface,
  Abhaya_Libre,
  Istok_Web,
  Darker_Grotesque
} from "next/font/google";
import "./globals.css";

const alatsi = Alatsi({
  variable: "--font-alatsi",
  subsets: ["latin"],
  weight: "400",
});

const abril = Abril_Fatface({
  variable: "--font-abril-fatface",
  subsets: ["latin"],
  weight: "400",
});

const abhaya = Abhaya_Libre({
  variable: "--font-abhaya-libre",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const istok = Istok_Web({
  variable: "--font-istok-web",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const darker_grot = Darker_Grotesque({
  variable: "--font-darker-grotesque",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Qulime Aesthetics",
  description: "Safe, effective skin treatment guided by real dermatologists",
};

// Root layout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${alatsi.variable}
          ${abril.variable}
          ${abhaya.variable}
          ${istok.variable}
          ${darker_grot.variable}
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}
