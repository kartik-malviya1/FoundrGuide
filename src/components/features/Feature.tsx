import React from "react";

export const Feature = () => {
  return (
    <div className="w-full min-h-full mx-auto px-10 py-5 text-center bg-gradient-to-b from-white via-white to-gray-100">
      <div className="flex flex-col px-28 py-16 mx-auto">
        <p className="text-lg text-center px-4 py-1">
          <span className="bg-blue-100 px-3 py-1 items-center text-blue-800 rounded-2xl">
            Features
          </span>
        </p>
        <p className="text-center p-5 mt-1">
          Get personalized mentorship with AI-driven insights and expert
          strategies.
          <br />
          FoundrGuide helps you overcome challenges and scale your business with
          ease.
        </p>
      </div>
      <div className=" -mt-5 max-w-screen-2xl max-h-full flex flex-wrap">
        <div className=" max-w-screen-2xl flex flex-col p-4 gap-3">
          <div className="p-4 gap-10 flex justify-center">
            <div className=" w-1/4 rounded-xl text-start flex flex-col gap-2 p-5 bg-blue-200/40">
              <h2 className="font-semibold">Tailored AI-Powered Advice</h2>
              <p className="text-sm">
                Get personalized guidance based on your <br />
                questions, powered by AI and expert insights.
              </p>
            </div>
            <div className="w-1/4 text-start rounded-xl flex flex-col gap-2 p-5 bg-blue-200/40 ">
              <h2 className="font-semibold">Actionable Book Summaries</h2>
              <p className="text-sm">
                Save time with concise summaries of top business books, ready to
                apply to your startup.
              </p>
            </div>
            <div className=" w-1/4 text-start flex rounded-xl flex-col gap-2 p-5 bg-blue-200/40">
              <h2 className="font-semibold">Problem-Specific Solutions</h2>
              <p className="text-sm">
              Receive tailored advice that directly addresses your startup’s unique challenges.
              </p>
            </div>
          </div>
          <div className="flex p-4 gap-10 justify-center">
            <div className=" w-1/4 text-start flex flex-col rounded-xl gap-2 p-5 bg-blue-200/40">
              <h2 className="font-semibold">Deep Dives into Key Topics</h2>
              <p className="text-sm">
              Explore in-depth advice on leadership, scaling, and team management when you need more than a summary.
              </p>
            </div>
            <div className=" w-1/4 text-start flex flex-col rounded-xl gap-2 p-5 bg-blue-200/40">
              <h2 className="font-semibold">Curated Book Recommendations</h2>
              <p className="text-sm">
              Get personalized book suggestions based on your specific business challenges.
              </p>
            </div>
            <div className=" w-1/4 text-start flex flex-col rounded-xl gap-2 p-5 bg-blue-200/40">
              <h2 className="font-semibold">On-Demand Virtual Mentorship</h2>
              <p className="text-sm">
              Access AI-powered mentorship anytime, with expert advice at your fingertips.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
