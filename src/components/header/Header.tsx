"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import Logo from "../assets/FrLogo.png";

export const Header = () => {
  return (
    <div className="w-full max-h-screen items-center p-6 shadow-sm bg-white">
      <div className="flex justify-around">
        <Link href={"/"} className="flex items-center gap-2">
          <Image src={Logo} alt="FoundrGuide" className="w-9 h-9" />
          <h1 className="font-semibold text-xl">
            Foundr
            <span className="text-blue-800 saturate-150">Guide.</span>
          </h1>
        </Link>
        <div className="flex flex-wrap">
          <NavigationMenu>
            <Link href="/home" legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()}
                hover:text-gray-700`}
              >
                Home
              </NavigationMenuLink>
            </Link>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="hover:text-gray-700">
                  Book Summaries
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="hover:text-gray-700">
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} hover:text-gray-700`}
              >
                FAQs
              </NavigationMenuLink>
            </Link>
          </NavigationMenu>
        </div>
        <div className="space-x-2">
          <Button
            variant={"outline"}
            className="p-4 border border-blue-800 saturate-150 text-blue-800"
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};
