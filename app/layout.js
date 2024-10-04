import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx"; // Import clsx for class name concatenation

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BaleaTech",
  description: "Software Devs in Mallorca",
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={clsx(inter.className, 'scrollbar-hide')}>
        {children}
      </body>
    </html>
  );
}
