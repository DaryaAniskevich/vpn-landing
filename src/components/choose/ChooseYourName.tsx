"use client";

import { UserData } from "@/utils/types";
import RadioInput from "./RadioInput";
import { useContext, useEffect } from "react";
import { AppContext } from "@/context/appContext";
import OrangeButton from "../UI/buttons/OrangeButton";

type ChooseYourName = {
  data: UserData[];
};

function ChooseYourName({ data }: ChooseYourName) {
  const { chooseYourNameRef, chosenInput, setChosenInput, toggleModal } =
    useContext(AppContext);

  const onChange = (value: string) => {
    setChosenInput?.(value);
  };

  useEffect(() => {
    const item = data[0];
    const name = `${item.name.first} ${item.name.last}`;
    setChosenInput?.(name);
  }, [data, setChosenInput]);

  return (
    <section
      className="px-4 pt-[40px] md:pt-[72px] pb-[37px] md:pb-[93px]"
      ref={chooseYourNameRef}
    >
      <h3 className="text-black title1 mb-4 uppercase">
        Choose <span className="text-blue">your name</span>
      </h3>

      <ul className="flex flex-col gap-2 mb-2">
        {data.length > 0 &&
          data.map((item) => {
            const name = `${item.name.first} ${item.name.last}`;
            return (
              <RadioInput
                key={name}
                name={name}
                isChecked={name === chosenInput}
                onChange={onChange}
              />
            );
          })}
      </ul>

      <OrangeButton onClick={() => toggleModal(true)} className="w-full" />
    </section>
  );
}

export default ChooseYourName;
