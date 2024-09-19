import { createContext, MutableRefObject, useRef } from "react";

export const AppContext = createContext<{
  chooseYourNameRef: MutableRefObject<null> | null;
  mainBlockRef: MutableRefObject<null> | null;
}>({ chooseYourNameRef: null, mainBlockRef: null });

export function AppContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const chooseYourNameRef = useRef(null);
  const mainBlockRef = useRef(null);

  const value = { chooseYourNameRef, mainBlockRef };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
