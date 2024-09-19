import { useContext, useState } from "react";
import CloseButton from "../UI/buttons/CloseButton";
import { AppContext } from "@/context/appContext";
import InputText from "../UI/Input/InputText";
import OrangeButton from "../UI/buttons/OrangeButton";
import secureIcon from "@/assets/images/secure_icon.svg";
import Image from "next/image";
import { validateEmail } from "@/utils/helpers";

function Modal() {
  const { chosenInput, toggleModal } = useContext(AppContext);

  const [email, setEmail] = useState("");
  const [isEmailError, setIsEmailError] = useState(false);

  const handleChangeEmail = (value: string) => {
    setIsEmailError(false);
    setEmail(value);
  };

  const continueHandle = () => {
    const isValid = validateEmail(email);
    if (isValid) {
      console.log(email);
      toggleModal(false);
    } else {
      setIsEmailError(true);
    }
  };

  return (
    <div className="px-4 bg-white relative z-20 pt-[24px] md:mt-[133px] pb-[37px] md:pb-[93px]">
      <CloseButton
        className="absolute right-4 top-[24px]"
        onClick={() => toggleModal(false)}
      />
      <h1 className="title1 text-black uppercase mt-[40px] pb-4 border-b border-grayLight">
        Your name
      </h1>

      <h2 className="textBody py-4 border-b border-grayLight">{chosenInput}</h2>

      <div className="mt-4 mb-[40px]">
        <InputText
          placeholder="Enter your email"
          value={email}
          onChange={handleChangeEmail}
          className={isEmailError ? "border-orange" : ""}
        />
        <div className="flex gap-2 items-center footnote text-gray mt-2">
          <Image src={secureIcon} width={16} height={16} alt="really secured" />
          <span>
            Your information is 100% secure. We don’t share your personal
            information.
          </span>
        </div>
      </div>

      <OrangeButton onClick={continueHandle} className="w-full">
        Continue
      </OrangeButton>
      {isEmailError && (
        <div className="text-center mt-3 text-orange">Check your email</div>
      )}
    </div>
  );
}

export default Modal;
