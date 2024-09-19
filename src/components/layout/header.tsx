"use client";

import { MutableRefObject, useContext } from "react";
import BlueButton from "../UI/buttons/BlueButton";
import LogoButton from "../UI/buttons/LogoButton";
import { AppContext } from "@/context/appContext";
import { scrollView } from "@/utils/helpers";

function Header() {
  const { mainBlockRef, chooseYourNameRef } = useContext(AppContext);

  return (
    <header className="w-full py-[18px] fixed top-0 shadow-header bg-white z-10">
      <div className="px-4 max-w-[1280px] w-full mx-auto flex gap-2 items-center justify-between">
        <LogoButton onClick={() => scrollView(mainBlockRef)} />
        <BlueButton onClick={() => scrollView(chooseYourNameRef)}>
          Get VPN
        </BlueButton>
      </div>
    </header>
  );
}

export default Header;
