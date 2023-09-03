import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import { Poppins, Aboreto } from "next/font/google";
import "../styles/globals.css";
import { MainMenu } from "components/MainMenu";
import { getMenu } from "utils/getMenu";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "700"],
});

const aboreto = Aboreto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-aboreto",
  weight: ["400"],
});

export default async function RootLayout({ children }) {
  const data = await getMenu();
  return (
    <html className={`${poppins.variable} ${aboreto.variable}`}>
      <body className="font-body">
        <MainMenu
          items={data.mainMenuItems}
          callToActionDestination={data.callToActionDestination}
          callToActionLabel={data.callToActionLabel}
        />
        {children}
      </body>
    </html>
  );
}
