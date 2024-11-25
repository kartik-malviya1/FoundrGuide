import Image from "next/image";
import React from "react";
import Logo from "../../app/favicon.ico";
import Link from "next/link";
import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { Button } from "../ui/button";

export const Footer = () => {
  return (
    <footer className="w-full bg-footercolor text-white ">
      <div className="container mx-auto px-4 py-8 lg:px-20">
        {/* Main Footer Content */}
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo Section */}
          <div className="lg:col-span-1">
            <Link href={"/"}>
              <Image src={Logo} alt="FoundrGuide" className="w-9 h-9" />
            </Link>
          </div>

          {/* Resources Section */}
          <div className="space-y-3">
            <h2 className="font-semibold text-base">Resources</h2>
            <div className="flex flex-col space-y-2 text-sm">
              <Link href="/book-summaries" className="text-gray-300 hover:underline">Book Summaries</Link>
              <Link href="/startup-tips" className="text-gray-300 hover:underline">Startup Tips</Link>
              <Link href="/founders-guide" className="text-gray-300 hover:underline">Founder&apos;s Guide</Link>
              <Link href="/success-stories" className="text-gray-300 hover:underline">Success Stories</Link>
              <Link href="/contact" className="text-gray-300 hover:underline">Contact Us</Link>
            </div>
          </div>

          {/* Community Section */}
          <div className="space-y-3">
            <h2 className="font-semibold text-base">Community</h2>
            <div className="flex flex-col space-y-2 text-sm">
              <Link href="/forum" className="text-gray-300 hover:underline">Join Forum</Link>
              <Link href="/events" className="text-gray-300 hover:underline">Events</Link>
              <Link href="/webinars" className="text-gray-300 hover:underline">Webinars</Link>
              <Link href="/mentorship" className="text-gray-300 hover:underline">Mentorship</Link>
              <Link href="/feedback" className="text-gray-300 hover:underline">Feedback</Link>
            </div>
          </div>

          {/* Stay Connected Section */}
          <div className="space-y-3">
            <h2 className="font-semibold text-base">Stay Connected</h2>
            <div className="flex flex-col space-y-2 text-sm">
              <Link href="/newsletter" className="text-gray-300 hover:underline">Newsletter</Link>
              <Link href="/social" className="text-gray-300 hover:underline">Social Media</Link>
              <Link href="/blog" className="text-gray-300 hover:underline">Blog Updates</Link>
              <Link href="/support" className="text-gray-300 hover:underline">Support</Link>
              <Link href="/faqs" className="text-gray-300 hover:underline">FAQs</Link>
            </div>
          </div>

          {/* Subscribe Section */}
          <div className="lg:col-span-1 space-y-4">
            <h2 className="font-semibold text-base">Subscribe</h2>
            <p className="text-sm text-gray-300">
              Join our newsletter to stay informed about updates and new features.
            </p>
            <form method="post" className="space-y-2">
              <input
                type="email"
                name="email"
                className="w-full bg-gray-50 p-2 px-4 rounded-md border text-black hover:border-blue-600"
                placeholder="Enter your email"
              />
              <Button
                variant={"outline"}
                className="w-full hover:border-blue-600 hover:text-blue-600 text-black"
              >
                Submit
              </Button>
            </form>
            <p className="text-xs text-gray-300">
              By subscribing, you agree to our Privacy Policy.
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-around items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 text-sm text-gray-300">
              <p>© 2024 FoundrGuide. All rights reserved.</p>
              <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
              <Link href="/terms" className="hover:underline">Terms of Service</Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="#" className="hover:text-blue-600">
                <InstagramLogoIcon className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-blue-600">
                <LinkedInLogoIcon className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-blue-600">
                <TwitterLogoIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
