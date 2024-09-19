"use client";

import Benefits from "@/components/benefits/Benefits";
import ChooseYourName from "@/components/choose/ChooseYourName";
import MainBlock from "@/components/main/MainBlock";
import Modal from "@/components/modal/Modal";
import { AppContext } from "@/context/appContext";
import { UserData } from "@/utils/types";
import { useContext } from "react";

function MainPage({ namesData }: { namesData: UserData[] }) {
  const { isModalOpen } = useContext(AppContext);

  return (
    <div>
      {isModalOpen && <Modal />}
      {!isModalOpen && (
        <>
          <MainBlock />
          <Benefits />

          <section className="text-blue title2 text-center">
            Millions of people trust us!
          </section>

          <ChooseYourName data={namesData} />
        </>
      )}
    </div>
  );
}

export default MainPage;
