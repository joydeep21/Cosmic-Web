"use client";
import "./globals.css";
import { useState } from "react";
import MiniHeader from "../components/MainScreen/MiniHeader";
import Header from "../components/MainScreen/Header";

import Categories from "../components/MainScreen/Categories";
import Footer from "../components/MainScreen/Footer";
import MobileHeroSlider from "@/components/MobileScreen/MobileHeroSlider";
import { Provider } from "@/context/context";
import useAuthContext from "@/hooks/use-hooks";
import MainLayout from "@/components/MainScreen/MainLayout";

export default function RootLayout({ children }) {
  return (
    <Provider>
      <html lang="en">
        <body>
          <MainLayout>
            <div className={`relative`}>{children}</div>
            {/* <Footer /> */}
          </MainLayout>
        </body>
      </html>
    </Provider>
  );
}
