import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Flexiplan",
  description: "Test project generated using NextJs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` flex items-center justify-center ${inter.className}`}>
        <div className="max-w-5xl w-full px-4">{children}</div>
      </body>
    </html>
  );
}
