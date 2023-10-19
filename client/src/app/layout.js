"use client";
import {
  El_Messiri,
  Noto_Kufi_Arabic,
  IBM_Plex_Sans_Arabic,
  Noto_Naskh_Arabic,
} from "next/font/google";
import "./globals.css";
import Navigation from "../components/headers/navigation";
import MiddleHeader from "../components/headers/middleHeader";
import { useRouter, usePathname } from "next/navigation";
import AuthProvider from "./context/AuthProvider";

// redux store
import StoreProvider from "../../store/StoreProvider";

const ElMessiri = Noto_Naskh_Arabic({
  weight: "400",
  subsets: ["arabic"],
});

const metadata = {
  title: "Tahado",
  description: "A gift ecommerce",
};

function RootLayout({ children, session }) {
  const router = useRouter();
  const pathname = usePathname();

  const isHomePage = pathname === "/";
  const isThankyouPage = pathname === "/thankyou";
  const isRegisterPage = pathname === "/register";
  // console.log(pathname);
  // console.log(isHomePage);
  return (
    <html lang="ar">
      <AuthProvider>
        <StoreProvider>
          <body className={`${ElMessiri.className} `}>
            {isThankyouPage || isRegisterPage ? null : <Navigation />}

            {!isHomePage ? null : <MiddleHeader />}

            {children}
          </body>
        </StoreProvider>
      </AuthProvider>
    </html>
  );
}

export default RootLayout;
