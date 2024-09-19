"use client";

import Image from "next/image";
import user from "@/assets/images/main_user.png";
import OrangeButton from "../UI/buttons/OrangeButton";
import Trusted from "./Trusted";
import Info from "./Info";
import { useContext } from "react";
import { AppContext } from "@/context/appContext";
import { scrollView } from "@/utils/helpers";

function MainBlock() {
  const { mainBlockRef, chooseYourNameRef } = useContext(AppContext);

  return (
    <section
      className="pt-[89px] md:pt-[133px] flex flex-col items-center text-center overflow-hidden"
      ref={mainBlockRef}
    >
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
        <OrangeButton
          onClick={() => scrollView(chooseYourNameRef)}
          className="mt-[17px]"
        />

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
