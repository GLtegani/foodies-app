import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "../app/globals.css";
import MainHeader from "./components/MainHeader/MainHeader";

const quicksand = Quicksand({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
