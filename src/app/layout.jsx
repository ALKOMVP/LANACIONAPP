import { Inter } from "next/font/google";
import AsideBanner from "./components/ui/AsideBanner";
import "./globals.css";

import { AppWrapper } from "@/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "La Nación App",
  description: "Grilla de recetas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <div className="lay-sidebar">
            <div className="sidebar__main">
              <AppWrapper>{children}</AppWrapper>
            </div>
            <AsideBanner title="Recetas más leídas" />
          </div>
        </main>
      </body>
    </html>
  );
}
