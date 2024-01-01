import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ToasterProvider from "@/providers/ToasterProvider";
const inter = Inter({ subsets: ["latin"] });

{/* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">
<meta name="msapplication-TileColor" content="#da532c">
<meta name="theme-color" content="#ffffff"></meta> */}
// above is for favicon for samsung and apple and stuff

export const metadata: Metadata = {
  metadataBase: new URL("https://www.younifind.ca"),
  title: {
    default:
      "Canada's first and only AI powered opportunity finder for students | younifind©",
    template: `%s | younifind©`,
  },
  description:
    "younifind© provides high school students with a massive catalogue to find extracurricular activities that would interest them in areas such as software, finance and medicine. From internships to volunteer opportunities and even research in labs, high school students in all grades will be able to find the best extracurriculars in the Greater Toronto Area.",
  verification: {
    google: "assafasf" // put google search console id
  },
  icons: {
    icon: "/favicon/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToasterProvider />
          <SupabaseProvider>
            <UserProvider>{children}</UserProvider>
          </SupabaseProvider>
      </body>
    </html>
  );
}
