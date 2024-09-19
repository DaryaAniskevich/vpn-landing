"use client";

import BlueButton from "../UI/buttons/BlueButton";
import LogoButton from "../UI/buttons/LogoButton";

function Header() {
  const getVpn = () => {};
  return (
    <header className="w-full py-[18px] fixed top-0 shadow-lg bg-white">
      <div className="px-4 max-w-[1280px] w-full mx-auto flex gap-2 items-center justify-between">
        <LogoButton />
        <BlueButton onClick={getVpn}>Get VPN</BlueButton>
      </div>
    </header>
  );
}

export default Header;
