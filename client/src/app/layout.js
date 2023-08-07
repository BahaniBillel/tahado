import "./globals.css";
import {
  El_Messiri,
  Noto_Kufi_Arabic,
  IBM_Plex_Sans_Arabic,
  Noto_Naskh_Arabic,
} from "next/font/google";

const ElMessiri = El_Messiri({
  weight: "400",
  subsets: ["arabic"],
});

export const metadata = {
  title: "Tahado",
  description: "A gift ecommerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body className={ElMessiri.className}>{children}</body>
    </html>
  );
}
