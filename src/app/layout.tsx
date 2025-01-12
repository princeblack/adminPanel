import type { Metadata } from "next";
import {
  ClerkProvider,
} from "@clerk/nextjs";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { dark } from "@clerk/themes";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "",
  description: "",
};
export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider  appearance={{
      baseTheme: dark,
    }}>
      <html lang="en">
        <body className={font.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
