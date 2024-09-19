"use client";

import { UserData } from "@/utils/types";
import Input from "./Input";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "@/context/appContext";
import OrangeButton from "../UI/buttons/OrangeButton";

type ChooseYourName = {
  data: UserData[];
};

function ChooseYourName({ data }: ChooseYourName) {
  const { chooseYourNameRef, chosenInput, setChosenInput } =
    useContext(AppContext);

  const onChange = (value: string) => {
    setChosenInput && setChosenInput(value);
  };

  useEffect(() => {
    const item = data[0];
    const name = `${item.name.first} ${item.name.last}`;
    setChosenInput && setChosenInput(name);
  }, [data]);

  return (
    <section className="px-4 pt-[40px] md:pt-[72px]" ref={chooseYourNameRef}>
      <h3 className="text-black title1 mb-4 uppercase">
        Choose <span className="text-blue">your name</span>
      </h3>

      <ul className="flex flex-col gap-2 mb-2">
        {data.length > 0 &&
          data.map((item) => {
            const name = `${item.name.first} ${item.name.last}`;
            return (
              <Input
                key={name}
                name={name}
                isChecked={name === chosenInput}
                onChange={onChange}
              />
            );
          })}
      </ul>

      <OrangeButton onClick={() => {}} className="w-full" />
    </section>
  );
}

export default ChooseYourName;
