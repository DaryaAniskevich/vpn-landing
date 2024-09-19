import {
  createContext,
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useRef,
  useState,
} from "react";

export const AppContext = createContext<{
  chooseYourNameRef: MutableRefObject<null> | null;
  mainBlockRef: MutableRefObject<null> | null;
  chosenInput: string;
  setChosenInput: Dispatch<SetStateAction<string>> | null;
  isModalOpen: boolean;
  toggleModal: (value: boolean) => void;
}>({
  chooseYourNameRef: null,
  mainBlockRef: null,
  chosenInput: "",
  setChosenInput: null,
  isModalOpen: false,
  toggleModal: () => {},
});

export function AppContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [chosenInput, setChosenInput] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const chooseYourNameRef = useRef(null);
  const mainBlockRef = useRef(null);

  const toggleModal = (value: boolean) => {
    setIsModalOpen(value);
  };
  const value = {
    chooseYourNameRef,
    mainBlockRef,
    chosenInput,
    setChosenInput,
    isModalOpen,
    toggleModal,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
