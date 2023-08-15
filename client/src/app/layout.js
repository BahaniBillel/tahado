import {
  El_Messiri,
  Noto_Kufi_Arabic,
  IBM_Plex_Sans_Arabic,
  Noto_Naskh_Arabic,
} from "next/font/google";
import "./globals.css";
import Navigation from "./components/headers/navigation";
import MiddleHeader from "./components/headers/middleHeader";
import { useRouter, usePathname } from "next/navigation";

const ElMessiri = Noto_Naskh_Arabic({
  weight: "400",
  subsets: ["arabic"],
});

export const metadata = {
  title: "Tahado",
  description: "A gift ecommerce",
};

export default function RootLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();

  const isHomePage = pathname === "/";
  console.log(pathname);
  console.log(isHomePage);
  return (
    <html lang="ar">
      <body className={`${ElMessiri.className} `}>
        <Navigation />
        {!isHomePage ? null : <MiddleHeader />}

        {children}
      </body>
    </html>
  );
}
