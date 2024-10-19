import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import user1 from "../assets/users/user-1.png";
import user2 from "../assets/users/user-2.png";
import user3 from "../assets/users/user-3.png";
import user4 from "../assets/users/user-4.jpg";
import user5 from "../assets/users/user-5.jpg";
import carousel from "../assets/carouselfrg.png";

export const HomePage = () => {
  return (
    <div className="w-full max-h-screen mx-auto text-center">
      <div className="w-full p-10 flex flex-wrap max-h-full bg-gradient-to-b from-white via-white to-gray-100/70  ">
        <div
          className="max-w-screen-md text-start px-28 py-16 mx-auto flex flex-col gap-2
        mt-20"
        >
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
        <div className="max-w-screen-sm p-20 mx-auto text-start">
          <div className="pointer-events-none absolute max-w-[30rem] ml-[56.95rem] inset-x-0 top-28 h-32 bg-gradient-to-b from-slate-50" />
          <Image
            src={carousel}
            alt="books"
            className="shadow-xl shadow-gray-100"
          />
          <div className="pointer-events-none absolute max-w-[30rem] ml-[56.95rem] inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-50" />
        </div>
      </div>
    </div>
  );
};
