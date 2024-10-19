import { Faq } from "@/components/faqs/Faq";
import { Feature } from "@/components/features/Feature";
import { HomePage } from "@/components/homepage/HomePage";
import { Insight } from "@/components/insight/Insight";
// import { auth } from "@clerk/nextjs/server";

export default async function Home() {
    // const { userId } = await auth()
    // const isAuth = !!userId
  return (
    <div className="w-full min-h-screen bg-white">
      <HomePage />
      <Insight />
      <Feature />
      <Faq />
    </div>
  );
}
