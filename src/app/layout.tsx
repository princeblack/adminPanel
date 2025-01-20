import type { Metadata } from "next";
import { Providers } from "@/providers/providers";
import StoreProvider from "@/providers/StoreProvider";
import { DM_Sans } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import Sidebar from "@/components/Sidebar";
import ToopBar from "@/components/ToopBar";
import {
  ClerkProvider,
} from "@clerk/nextjs";
import "./globals.css";
import { dark } from "@clerk/themes";
import { currentUser } from '@clerk/nextjs/server'

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "",
  description: "",
};
export default async function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await currentUser()

  return (
    <ClerkProvider  appearance={{
          baseTheme: dark,
        }}>
          <html lang="en">
      <body className={font.className}>
        <Providers>
          <ThemeProvider
            attribute="class"
            // defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <StoreProvider>
              <div className="flex overflow-hidden h-screen ">
                {user && <Sidebar />}
                <div className="flex-1 flex flex-col bg-gray-100 text-black p-2 ">
                  {user && <ToopBar/>}
                  {children}
                </div>
              </div>
            </StoreProvider>
          </ThemeProvider>
        </Providers>
      </body>
          </html>
        </ClerkProvider>
  );
}
