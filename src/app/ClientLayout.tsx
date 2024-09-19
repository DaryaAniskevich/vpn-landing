'use client';

import { AppContextProvider } from "@/context/appContext";

function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AppContextProvider>{children}</AppContextProvider>;
}

export default ClientLayout