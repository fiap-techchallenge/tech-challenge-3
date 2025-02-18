import type { Metadata } from "next";
import { fontNames } from "./fontControl";
import GSAPInitializer from "@/components/atoms/GSAPInitializer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blog - Tech Challenge",
  description: "A blog for the tech challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontNames}>
        <main>{children}</main>
        <GSAPInitializer />
      </body>
    </html>
  );
}
