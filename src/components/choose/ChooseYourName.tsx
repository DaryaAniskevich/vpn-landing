"use client";

import { UserData } from "@/utils/types";
import Input from "./Input";
import { useContext } from "react";
import { AppContext } from "@/context/appContext";
import OrangeButton from "../UI/buttons/OrangeButton";

type ChooseYourName = {
  data: UserData[];
};

function ChooseYourName({ data }: ChooseYourName) {
  const { chooseYourNameRef } = useContext(AppContext);

  return (
    <section className="px-4 pt-[40px] md:pt-[72px]" ref={chooseYourNameRef}>
      <h3 className="text-black title1 mb-4">
        Choose <span className="text-blue">your name</span>
      </h3>

      <ul className="flex flex-col gap-2 mb-2">
        {data.length > 0 &&
          data.map((item) => (
            <Input
              key={item.id.value}
              name={`${item.name.first} ${item.name.last}`}
            />
          ))}
      </ul>

      <OrangeButton onClick={() => {}} className="w-full"/>
    </section>
  );
}

export default ChooseYourName;
