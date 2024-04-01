import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ToasterProvider from "@/providers/ToasterProvider";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });

{
  /* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">
<meta name="msapplication-TileColor" content="#da532c">
<meta name="theme-color" content="#ffffff"></meta> */
}
// above is for favicon for samsung and apple and stuff
export const runtime = "edge";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.younifind.ca"),
  title: {
    default:
      "Canada's first AI-powered opportunity finder for students | younifind©",
    template: `%s | younifind©`,
  },
  keywords: [
    "High school extracurricular activities",
    "Extracurriculars for high school students",
    "Software internships for teens",
    "Finance volunteer opportunities for high schoolers",
    "Medicine research programs for high school students",
    "Greater Toronto Area extracurriculars",
    "High school internships in Toronto",
    "Teen volunteer opportunities in Toronto",
    "Toronto labs for high schoolers",
    "High school extracurricular catalogue",
    "Activities for high school students in software",
    "Finance internships for high schoolers",
    "Medicine volunteer opportunities for teens",
    "Toronto-based extracurriculars for high school",
    "Internships in software for high school students",
    "Finance-related activities for teens",
    "Medicine research opportunities in Toronto",
    "High school internships in finance",
    "Teen volunteer programs in Toronto",
    "Software activities for high schoolers",
    "Finance-related extracurriculars for high school students",
    "Medicine internships for high schoolers",
    "Toronto-based labs for high school students",
    "Extracurricular programs for high schoolers in Toronto",
    "High school software internships in Toronto",
    "Finance volunteer programs for high school students",
    "Medicine research labs for high schoolers",
    "Toronto extracurricular activities for teens",
    "Internship opportunities for high school students in Toronto",
    "Finance-related volunteer opportunities for teens",
    "Medicine programs for high school students in Toronto",
    "Greater Toronto Area high school extracurriculars",
    "High school extracurriculars in software development",
    "Finance internships for high school students in Toronto",
    "Medicine volunteer programs in Toronto",
    "Extracurricular opportunities for high schoolers in Toronto",
    "High school software activities in the Greater Toronto Area",
    "Finance-related programs for high schoolers in Toronto",
    "Medicine internships for teens in Toronto",
    "Toronto-based extracurricular activities for high school students",
    "Extracurricular catalog for high schoolers in Toronto",
    "Activities for high school students in finance",
    "Medicine volunteer opportunities in the Greater Toronto Area",
    "High school internships in software development",
    "Finance-related volunteer programs for high schoolers in Toronto",
    "Medicine research opportunities for high schoolers in Toronto",
    "Toronto labs for high schoolers interested in medicine",
    "Internships for high school students in software development",
    "Finance-related activities for high school students in Toronto",
    "Medicine programs for high schoolers in the Greater Toronto Area",
    "Greater Toronto Area extracurricular opportunities for teens",
    "High school extracurriculars in finance",
    "Medicine internships for high school students in the Greater Toronto Area",
    "Extracurriculars for high schoolers in Toronto",
    "Software internships for high school students in the Greater Toronto Area",
    "Finance volunteer opportunities in the Greater Toronto Area",
    "Medicine volunteer programs for high schoolers in Toronto",
    "Toronto-based extracurricular opportunities for high school students",
    "High school extracurricular activities in the Greater Toronto Area",
    "Activities for high school students interested in finance",
    "Medicine research programs for high schoolers in Toronto",
    "High school internships in finance in the Greater Toronto Area",
    "Teen volunteer opportunities in the Greater Toronto Area",
    "Software activities for high schoolers in Toronto",
    "Finance-related extracurriculars for high schoolers in the Greater Toronto Area",
    "Medicine internships for teens in the Greater Toronto Area",
    "Toronto-based labs for high school students interested in medicine",
    "Extracurricular programs for high school students in the Greater Toronto Area",
    "High school software internships in the Greater Toronto Area",
    "Finance volunteer programs for high school students in Toronto",
    "Medicine research labs for high school students in the Greater Toronto Area",
    "Toronto extracurricular activities for high schoolers",
    "Internship opportunities for high schoolers in the Greater Toronto Area",
    "Finance-related volunteer opportunities for high school students in Toronto",
    "Medicine programs for teens in the Greater Toronto Area",
    "Greater Toronto Area high school extracurricular opportunities",
    "High school extracurriculars in software in Toronto",
    "Finance internships for high schoolers in the Greater Toronto Area",
    "Medicine volunteer programs in the Greater Toronto Area",
    "Extracurricular opportunities for high school students in Toronto",
    "High school software activities in Toronto in the Greater Toronto Area",
    "Finance-related programs for high schoolers in the Greater Toronto Area",
    "Medicine internships for high schoolers in Toronto in the Greater Toronto Area",
    "Toronto-based extracurricular activities for high schoolers",
    "Extracurricular catalog for high school students in Toronto",
    "Activities for high schoolers in finance in the Greater Toronto Area",
    "Medicine volunteer opportunities in Toronto in the Greater Toronto Area",
    "High school internships in software development in Toronto",
    "Finance-related volunteer programs for high schoolers in the Greater Toronto Area",
    "Medicine research opportunities for high schoolers in Toronto in the Greater Toronto Area",
    "Toronto labs for high schoolers interested in medicine in the Greater Toronto Area",
    "Internships for high schoolers in software development in Toronto",
    "Finance-related activities for high schoolers in Toronto in the Greater Toronto Area",
    "Medicine programs for high schoolers in the Greater Toronto Area",
    "Greater Toronto Area extracurricular opportunities for high schoolers",
    "High school extracurriculars in finance in Toronto",
    "Medicine internships for high school students in the Greater Toronto Area",
  ],
  description:
    "younifind© provides high school students with a massive catalogue of extracurricular activities that would interest them in areas such as software, finance and medicine. From internships to volunteer opportunities and even research in labs, high school students in all grades will be able to find the best extracurriculars in the Greater Toronto Area.",
  verification: {
    google: "Mbe9lNmxmPjD3M2FzGjobx0ds6IENf6RbzqjoXFTYjQ",
  },
  icons: {
    icon: "/favicon/favicon.ico",
  },
  openGraph: {
    title: "younifind",
    description:
      "younifind© provides high school students with a massive catalogue of extracurricular activities that would interest them in areas such as software, finance and medicine. From internships to volunteer opportunities and even research in labs, high school students in all grades will be able to find the best extracurriculars in the Greater Toronto Area.",
    url: "https://www.younifind.ca",
    siteName: "younifind",
    images: [
      {
        url: "https://www.younifind.ca/images/younifindwithbackground.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <Script id="google-analytics">
          {`
          
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', ${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS});
          `}
        </Script>
      </head>
      <body className={`${inter.className} bg-royalblue`}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>{children}</UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
