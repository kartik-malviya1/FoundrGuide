import type { Metadata } from "next";
import "./globals.css";
import { Be_Vietnam_Pro } from "next/font/google"
import { Header } from "@/components/header/Header";
import Head from "next/head";

const be_vietnam_pro = Be_Vietnam_Pro({subsets:["latin"], weight:"400"})
export const metadata: Metadata = {
  title: "FoundrGuide",
  description: "FoundrGuide is an AI-powered platform designed to provide personalized book summaries and tailored advice for startup founders and small business owners. Leverage insights from top books, articles, and expert knowledge to solve your business challenges, make informed decisions, and accelerate your success.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
      <link rel="icon" href='/favicon.ico' /> 
      <title>FoundrGuide</title>
      </Head>
      <body
        className={be_vietnam_pro.className}>
        <Header/>
        {children}
        {/* <Footer/> */}
      </body>
    </html>
  );
}
