import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat, Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });
const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Acheter",
  description: "Home of best fashion brands",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar hideOnHome={true} />
        {children}
      </body>
    </html>
  );
}
