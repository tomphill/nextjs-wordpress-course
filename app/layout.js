import { Poppins, Aboreto } from "next/font/google";

import "../styles/globals.css";
import { getMenu } from "utils/getMenu";
import { MainMenu } from "components/MainMenu";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-poppins",
});

const aboreto = Aboreto({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-aboreto",
});

export default async function RootLayout({ children }) {
  const data = await getMenu();
  return (
    <html lang="en" className={`${poppins.variable} ${aboreto.variable}`}>
      <body className="font-body">
        <MainMenu
          callToActionDestination={data.callToActionDestination}
          callToActionLabel={data.callToActionLabel}
          items={data.mainMenuItems}
        />
        {children}
      </body>
    </html>
  );
}
