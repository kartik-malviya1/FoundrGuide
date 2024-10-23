import Image from "next/image";
import React from "react";
import Logo from "@/public/assets/FrLogo.png";
import Link from "next/link";
import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { Button } from "../ui/button";

export const Footer = () => {
  return (
    <div className="w-full max-h-full bg-footercolor text-white">
      <div className=" max-w-full ">
        <div className="flex items-center justify-evenly p-4">
          <div className="">
            <Link href={"/"}>
              <Image src={Logo} alt="FoundrGuide" className="w-9 h-9" />
            </Link>
          </div>
          <div className="flex flex-col justify-evenly gap-3 text-sm">
            <h2 className="mt-4 mb-2 font-semibold text-base">Resources</h2>
            <p className="cursor-pointer hover:underline text-gray-300">Book Summaries</p>
            <p className="cursor-pointer hover:underline text-gray-300">Startup Tips</p>
            <p className="cursor-pointer hover:underline text-gray-300">
              Founder&apos;s Guide
            </p>
            <p className="cursor-pointer hover:underline text-gray-300">Success Stories</p>
            <p className="cursor-pointer hover:underline text-gray-300">Contact Us</p>
          </div>
          <div className="flex flex-col justify-evenly gap-3 text-sm">
            <h2 className="mt-4 mb-2 font-semibold text-base">Community</h2>
            <p className="cursor-pointer hover:underline text-gray-300">Join Forum</p>
            <p className="cursor-pointer hover:underline text-gray-300">Events</p>
            <p className="cursor-pointer hover:underline text-gray-300">Webinars</p>
            <p className="cursor-pointer hover:underline text-gray-300">Mentorship</p>
            <p className="cursor-pointer hover:underline text-gray-300">Feedback</p>
          </div>
          <div className="flex flex-col justify-evenly gap-3 text-sm">
            <h2 className="mt-4 mb-2 font-semibold text-base">
              Stay Connected
            </h2>
            <p className="cursor-pointer hover:underline text-gray-300">Newsletter</p>
            <p className="cursor-pointer hover:underline text-gray-300">Social Media</p>
            <p className="cursor-pointer hover:underline text-gray-300">Blog Updates</p>
            <p className="cursor-pointer hover:underline text-gray-300">Support</p>
            <p className="cursor-pointer hover:underline text-gray-300">FAQs</p>
          </div>
          <div className="flex flex-col text-start gap-2 items-start rounded-xl p-6">
            <h2 className="font-semibold">Subscribe</h2>
            <p className="text-gray-300">
              Join our newsletter to stay informed about updates and new
              features.
            </p>
            <form method="post" className="flex gap-2">
              <input
                type="email"
                name="email"
                className="bg-gray-50 p-2 px-6 rounded-md border hover:border-blue-600"
                placeholder="Enter your email"
              />
              <Button
                variant={"outline"}
                size={"lg"}
                className="hover:border-blue-600 hover:text-blue-600 text-black "
              >
                Submit
              </Button>
            </form>
            <p className="text-xs text-gray-300">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto text-start gap-96 p-8 flex">
        <div className="flex space-x-4 text-sm text-start text-gray-300">
          <p>© 2024 FoundrGuide. All rights reserved.</p>
          <p className="cursor-pointer hover:underline">Privacy Policy</p>
          <p className="cursor-pointer hover:underline">Terms of Service</p>
        </div>
        <div className="flex items-center space-x-4">
          <InstagramLogoIcon className="cursor-pointer hover:text-blue-600" />
          <LinkedInLogoIcon className="cursor-pointer hover:text-blue-600" />
          <TwitterLogoIcon className="cursor-pointer hover:text-blue-600" />
        </div>
      </div>
    </div>
  );
};
