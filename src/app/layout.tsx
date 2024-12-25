import type { Metadata } from "next";

import { Providers } from "../providers/providers";
import StoreProvider from "../providers/StoreProvider";
import { DM_Sans } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/ToopBar";

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
    <html lang="en">
      <body className={font.className}>
        <Providers>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <StoreProvider>
              <div className="flex overflow-hidden h-screen ">
                <Sidebar />
                <div className="flex-1 flex flex-col bg-gray-100 p-2 ">
                  <Topbar />
                  {children}
                </div>
              </div>
            </StoreProvider>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
