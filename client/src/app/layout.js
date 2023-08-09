"use client";
import {
  El_Messiri,
  Noto_Kufi_Arabic,
  IBM_Plex_Sans_Arabic,
  Noto_Naskh_Arabic,
} from "next/font/google";
import "./globals.css";
import Navigation from "./components/headers/navigation";
import MiddleHeader from "./components/headers/middleHeader";

const ElMessiri = El_Messiri({
  weight: "400",
  subsets: ["arabic"],
});

export const metadata = {
  title: "Tahado",
  description: "A gift ecommerce",
};

export default function RootLayout({ children, params }) {
  const hideHeaderFooter = params.pathname === "/listing/12";

  return (
    <html lang="ar">
      <body className={ElMessiri.className}>
        <Navigation />
        {!hideHeaderFooter && <MiddleHeader />}

        {children}
      </body>
    </html>
  );
}
