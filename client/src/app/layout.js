import {
  El_Messiri,
  Noto_Kufi_Arabic,
  IBM_Plex_Sans_Arabic,
  Noto_Naskh_Arabic,
} from "next/font/google";
import "./globals.css";
import Navigation from "../components/headers/navigation";
import MiddleHeader from "../components/headers/middleHeader";
// import { useRouter, usePathname } from "next/navigation";
import AuthProvider from "./context/AuthProvider";

// redux store
import StoreProvider from "../../store/StoreProvider";

// Components
import ToggleSignInOut from "../components/ToggleSignInOut";
import ClientComp from "../components/ClientComp";
import CheckPathname from "../components/CheckPathname";
import { getSession } from "next-auth/react";

const ElMessiri = Noto_Naskh_Arabic({
  weight: "400",
  subsets: ["arabic"],
});

const metadata = {
  title: "Tahado",
  description: "A gift ecommerce",
};

function RootLayout({ children }) {
  // const router = useRouter();
  // const pathname = usePathname();

  // const isHomePage = pathname === "/";
  // const isThankyouPage = pathname === "/thankyou";
  // const isRegisterPage = pathname === "/register";
  // console.log(pathname);
  // console.log(isHomePage);
  return (
    <html lang="ar">
      <StoreProvider>
        <body className={`${ElMessiri.className} `}>
          <AuthProvider>
            {/* <CheckPathname /> */}
            {/* {isThankyouPage || isRegisterPage ? null : <Navigation />}

            {!isHomePage ? null : <MiddleHeader />} */}
            <Navigation />
            {children}
          </AuthProvider>
        </body>
      </StoreProvider>
    </html>
  );
}

export default RootLayout;
