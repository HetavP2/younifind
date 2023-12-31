import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ToasterProvider from "@/providers/ToasterProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default:
      "Canada's first and only AI powered opportunity finder for students | younifind©",
    template: `%s | younifind©`,
  },
  description:
    "younifind© provides high school students with a massive catalogue to find extracurricular activities that would interest them in areas such as software, finance and medicine. From internships to volunteer opportunities and even research in labs, high school students in all grades will be able to find the best extracurriculars in the Greater Toronto Area.",
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
