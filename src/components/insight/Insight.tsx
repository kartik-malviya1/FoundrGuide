import { Check, ChevronRight } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Insight(){
  return (
    <div className="w-full min-h-full mx-auto p-10 text-center bg-gradient-to-b from-white via-white to-blue-100/50">
      <div className="flex flex-col px-28 py-16 mx-auto">
        <h2 className="text-xl text-start px-4 py-1">
          <span className="bg-blue-100 px-3 py-1 items-center text-blue-800 rounded-2xl">
            Insight
          </span>
        </h2>
        <div className="text-start p-4 flex flex-col gap-5 flex-wrap max-w-screen-sm">
          <h1 className="font-semibold text-[2rem] flex flex-col">
            Unlock Knowledge with Tailored Book
            <span className="text-blue-600">Summaries</span>
          </h1>
          <p className="font-normal text-gray-700 text-md flex flex-col">At FoundrGuide, we empower founders with personalized book summaries and actionable insights. Ask your business questions, and our AI platform delivers the resources you need to succeed.
          </p>
          <ul className="mt-5 space-y-2 text-left font-medium flex flex-col items-start">
            <div className="space-y-2">
              <li className="flex gap-1.5 items-center text-left">
                <Check className="h-5 w-5 shrink-0 text-blue-600" />
                Get answers tailored to your business needs.
              </li>
              <li className="flex gap-1.5 items-center text-left">
                <Check className="h-5 w-5 shrink-0 text-blue-600" />
                Explore curated summaries for startup success.
              </li>
              <li className="flex gap-1.5 items-center text-left">
                <Check className="h-5 w-5 shrink-0 text-blue-600" />
                Track your learning journey with a personalized dashboard.
              </li>
            </div>
          </ul>
          <div className="flex space-x-4 px-4 py-3 mt-3">
            <Button
              variant={"outline"}
              className="border border-blue-600 text-blue-600 hover:border-black"
            >
              Learn more
            </Button>
            <Link href={'sign-up'}>
            <Button variant={"ghost"} className="hover:text-blue-600">
              Sign Up
              <ChevronRight className="ml-1.5 w-5 h-5" />
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
