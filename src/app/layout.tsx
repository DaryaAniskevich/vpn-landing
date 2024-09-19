import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import ClientLayout from "./ClientLayout";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VPN",
  description: "Access everything securely with VPN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <ClientLayout>
          <Header />
          <main className="max-w-[924px] w-full mx-auto">
            {children}
          </main>
        </ClientLayout>
      </body>
    </html>
  );
}
