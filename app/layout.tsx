import { Work_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "../components/header";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "100", "200"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={workSans.className} lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
