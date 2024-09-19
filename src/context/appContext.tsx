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
}>({
  chooseYourNameRef: null,
  mainBlockRef: null,
  chosenInput: "",
  setChosenInput: null,
});

export function AppContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [chosenInput, setChosenInput] = useState("");

  const chooseYourNameRef = useRef(null);
  const mainBlockRef = useRef(null);

  const value = {
    chooseYourNameRef,
    mainBlockRef,
    chosenInput,
    setChosenInput,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
