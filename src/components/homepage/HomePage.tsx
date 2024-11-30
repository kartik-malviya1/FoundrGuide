import { Sparkles, Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import user1 from "@/public/users/user-1.png";
import user2 from "@/public/users/user-2.png";
import user3 from "@/public/users/user-3.png";
import user4 from "@/public/users/user-4.jpg";
import user5 from "@/public/users/user-5.jpg";
import Chatgpt from "@/public/chatgpt.svg";

export default function HomePage() {
  return (
    <div className="w-full min-h-screen mx-auto text-center mt-6">
      <div className="w-full px-4 md:px-6 flex flex-col md:flex-row items-center justify-center lg:-mt-14 -mt-10 bg-white/70 sm:py-8 lg:pt-0 md:py-14">
        {/* Hero Section */}
        <div className="w-full max-w-screen-md text-center md:text-start px-4 md:px-28 py-4 md:py-6 mx-auto flex flex-col gap-4 mt-8 md:mt-20">
          {/* Badge */}
          <div className="select-none flex items-center mx-auto md:mx-0 max-w-[15.2rem] space-x-2 font-medium text-zinc-900 border border-gray-500 backdrop-blur-sm rounded-full px-4 py-2">
            <Sparkles className="w-4 h-4 md:w-5 md:h-5 fill-blue-600 text-blue-600" />
            <p className="text-xs md:text-sm">For the Startup Dreamers</p>
          </div>

          {/* Hero Text */}
          <h1 className="text-2xl md:text-[2.5rem] leading-tight px-2 md:px-0">
            <span className="font-bold">Your Personal Startup Mentor</span>
            <span className="hidden md:inline">— </span>
            <br className="md:hidden" />
            Get Expert Startup Advice,
            <br className="md:hidden" />
            <span className="font-bold">Powered by AI.</span>
          </h1>

          <p className="text-gray-800 text-base md:text-lg tracking-tight px-4 md:px-0">
            Expert insights from top business leaders, tailored with AI to guide
            your startup&apos;s success.
          </p>

          {/* User Avatars and Rating */}
          <div className="mt-8 md:mt-12 flex flex-col items-center md:items-start select-none">
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
              <div className="flex -space-x-4">
                {[user1, user2, user3, user4, user5].map((user, index) => (
                  <Image
                    key={index}
                    width={100}
                    height={100}
                    className="inline-block h-8 w-8 md:h-10 md:w-10 rounded-full ring-2 ring-slate-200 object-cover"
                    src={user}
                    alt={`user ${index + 1}`}
                  />
                ))}
              </div>

              <div className="flex flex-col items-center md:items-start gap-1">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      className="h-3 w-3 md:h-4 md:w-4 text-blue-600 fill-blue-600"
                    />
                  ))}
                </div>
                <p className="text-sm md:text-base">
                  <span className="font-semibold">1,250</span> happy founders
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Preview Section */}
        <div className="w-full max-w-screen-sm py-8 md:py-32 px-4 md:px-9 flex mx-auto justify-center select-none">
          <div className="hidden md:flex flex-col gap-4 p-2 mr-4">
            {[user3, user4, user5].map((user, index) => (
              <Image
                key={index}
                width={100}
                height={100}
                className={`inline-block h-10 w-10 rounded-full ring-2 ring-slate-200 ${
                  index > 0 ? 'opacity-60' : ''
                }`}
                src={user}
                alt={`user ${index + 1}`}
              />
            ))}
          </div>

          <div className="w-full text-start max-w-sm bg-white shadow-md rounded-xl border">
            <div className="p-3 md:p-[0.6rem] flex flex-col gap-2">
              <div className="flex space-x-2 p-2">
                <Image 
                  src={Chatgpt} 
                  alt="gpt" 
                  height={100} 
                  width={100} 
                  className="h-5 w-5 md:h-6 md:w-6" 
                />
                <p className="font-bold text-xs md:text-sm">Free trial users</p>
              </div>
              
              <div className="bg-gray-100 rounded-lg p-3 md:p-4">
                <div className="flex flex-col gap-3 md:gap-4 mb-4 text-sm md:text-base">
                  <p>
                    Hi
                    <span className="bg-blue-100 text-blue-600 ml-0.5 rounded-md p-1">
                      Amy
                    </span>
                    ,
                  </p>
                  <p>Congrats on starting your founder journey!</p>
                  <p>I&apos;m here if you need help with your free trial.</p>
                  <p>
                    Here some getting started docs to check
                    <span className="bg-gradient-to-r ml-1 from-gray-100 via-blue-100 to-blue-200">
                      out:{" "}
                    </span>
                    <span className="text-base font-semibold text-blue-600 -ml-[0.15rem]">
                      |
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
