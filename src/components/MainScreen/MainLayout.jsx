import MiniHeader from "./MiniHeader";
import Header from "./Header";
import Categories from "./Categories";

import useAuthContext from "@/hooks/use-hooks";
import { useEffect } from "react";
import BottomNavBar from "../MobileScreen/BottomNavBar";

export default function MainLayout({ children }) {
  const { isDrawerOpen } = useAuthContext();
  useEffect(() => {
    // Disable scrolling when the drawer is open
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = ""; // Restore default behavior
    }

    // Clean up the effect
    return () => {
      document.body.style.overflow = ""; // Restore default behavior when component unmounts
    };
  }, [isDrawerOpen]);
  return (
    <div>
      <div className="md:block hidden">
        <MiniHeader />
        <Header />
        <Categories />
      </div>
      <div className="lg:hidden md:hidden block">
        <MiniHeader />
        <Header />
      </div>

      <div>{children}</div>
      <div className="lg:hidden md:hidden block">
        <BottomNavBar />
      </div>
    </div>
  );
}
