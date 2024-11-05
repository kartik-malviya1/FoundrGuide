import { Sparkles, Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import user1 from "@/public/assets/users/user-1.png";
import user2 from "@/public/assets/users/user-2.png";
import user3 from "@/public/assets/users/user-3.png";
import user4 from "@/public/assets/users/user-4.jpg";
import user5 from "@/public/assets/users/user-5.jpg";
import Chatgpt from "@/public/assets/chatgpt.svg";

export default function HomePage() {
  return (
    <div className="w-full max-h-screen mx-auto text-center">
      <div className="w-full px-6 flex flex-wrap max-h-full bg-white/70 mb-4 ">
        <div
          className="max-w-screen-md text-start px-28 py-6 mx-auto flex flex-col gap-2
        mt-20"
        >
          <div className="select-none flex items-center max-w-[15.2rem] space-x-2 font-medium text-zinc-900 border border-gray-500 backdrop-blur-sm rounded-full px-4 py-2">
            <Sparkles className="w-5 h-5 fill-blue-600 text-blue-600 " />
            <p className="text-sm">For the Startup Dreamers</p>
          </div>
          <h1 className="text-[2.5rem] leading-tight">
            <span className="font-bold">Your Personal Startup Mentor</span>— Get
            Expert Startup Advice,
            <span className="font-bold">Powered by AI.</span>
          </h1>
          <p className="text-gray-800 text-lg tracking-tight">
            Expert insights from top business leaders, tailored with AI to guide
            your startup’s success.
          </p>
          <div className="mt-12 flex flex-col items-start select-none">
            <div className="flex -space-x-4 ">
              <Image
                width={100}
                height={100}
                className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-200"
                src={user1}
                alt="user image"
              />
              <Image
                width={100}
                height={100}
                className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-200"
                src={user2}
                alt="user image"
              />
              <Image
                width={100}
                height={100}
                className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-200"
                src={user3}
                alt="user image"
              />
              <Image
                width={100}
                height={100}
                className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-200"
                src={user4}
                alt="user image"
              />
              <Image
                width={100}
                height={100}
                className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-slate-200"
                src={user5}
                alt="user image"
              />
              <div className="flex justify-between items-start">
                <div className="flex flex-col space-x-6">
                  <div className="flex gap-0.5 ml-6">
                    <Star className="h-4 w-4 text-blue-600 fill-blue-600" />
                    <Star className="h-4 w-4 text-blue-600 fill-blue-600" />
                    <Star className="h-4 w-4 text-blue-600 fill-blue-600" />
                    <Star className="h-4 w-4 text-blue-600 fill-blue-600" />
                    <Star className="h-4 w-4 text-blue-600 fill-blue-600" />
                  </div>
                  <p>
                    <span className="font-semibold">1.250</span> happy founders
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-screen-sm py-32 px-9 flex mx-auto text-start select-none">
          <div className="flex flex-col gap-4 p-2 mr-4">
            <Image
              width={100}
              height={100}
              className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-200"
              src={user3}
              alt="user image"
            />
            <Image
              width={100}
              height={100}
              className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-200 opacity-60"
              src={user4}
              alt="user image"
            />
            <Image
              width={100}
              height={100}
              className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-slate-200 opacity-60"
              src={user5}
              alt="user image"
            />
          </div>
          <div className="max-w-sm h-full bg-white shadow-md rounded-xl border -mt-2 mb-2">
            <div className="p-[0.6rem] flex flex-col gap-2">
              <div className="flex space-x-2 p-2">
                <Image src={Chatgpt} alt="gpt" height={18} width={18} />
                <p className="font-bold text-sm">Free trial users</p>
              </div>
              <div className=" bg-gray-100 rounded-lg p-4">
                <div className="flex flex-col gap-4 mb-5 text-base">
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
