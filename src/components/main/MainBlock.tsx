"use client";

import Image from "next/image";
import user from "@/assets/images/main_user.png";
import OrangeButton from "../UI/buttons/OrangeButton";
import Trusted from "./Trusted";
import Info from "./Info";

function MainBlock() {
  const getVpn = () => {};
  return (
    <section className="flex flex-col items-center text-center overflow-hidden">
      <h1 className="whitespace-pre-line text-black text-center largeTitle">
        Access{" "}
        <span className="text-blue">
          everything <br />
          securely{" "}
        </span>
        with
        <br />
        VPN
      </h1>

      <Image
        src={user}
        alt="happy user"
        width={540}
        height={209}
        className="md:mx-auto !max-w-[540px] md:max-w-full"
      />

      <div className="px-4">
        <OrangeButton onClick={getVpn} className="mt-[17px]" />

        <Trusted />
        <Info />

        <p className="mt-6">
          VPN-your <span className="text-blue">ultimate</span> solution for a
          private and secure online experience!
        </p>
      </div>
    </section>
  );
}

export default MainBlock;
