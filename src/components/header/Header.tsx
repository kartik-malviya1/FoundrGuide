"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "../ui/button";
import Image from "next/image";
import Logo from "../assets/FrLogo.png";
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Case Studies",
    href: "/resources/case-studies",
    description:
      "Learn from successful startup stories.",
  },
  {
    title: "Templates & Tools",
    href: "/resources/templates-tools",
    description:
      "Discover tools to enhance your business.",
  },
  {
    title: "Book Recommendations",
    href: "/resources/book-recommendations",
    description:
      "Explore curated lists and expert picks of essential business books for founders.",
  },
  {
    title: "FAQs / Knowledge Base",
    href: "/resources/faqs",
    description:
      "Get answers to common startup questions and practical tips on using FoundrGuide.",
  },
  {
    title: "Podcasts & Videos",
    href: "/resources/podcasts-videos",
    description:
      "Listen to expert interviews and watch educational content tailored for entrepreneurs.",
  },
  {
    title: "Guides & Tutorials",
    href: "/resources/guides-tutorials",
    description:
      "Step-by-step guides on startup basics, scaling strategies, and funding tips.",
  },
]

export function Navigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
      <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/how-it-works" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              How It Works
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/book-summaries" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Book Summaries
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="hover:text-blue-600">Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem className="hover:text-blue-600 text-start"
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About Us 
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export function Header(){
  return (
    <div className="min-w-[96rem] max-h-screen shadow-sm items-center p-4 fixed bg-white">
      <div className="flex text-center justify-around">
      <Link href={"/"} className="flex items-center gap-2">
           <Image src={Logo} alt="FoundrGuide" className="w-9 h-9" />
              <h1 className="font-semibold text-xl">
               Foundr
                <span className="text-blue-800 saturate-150">Guide.</span>
              </h1>
         </Link>
        <Navigation />
        <Button variant={"outline"} className="border border-blue-600 text-blue-600">
          Get Started
        </Button>
      </div>
    </div>
  )
}











































// "use client";
// import React from "react";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu";
// import Link from "next/link";
// import { Button } from "../ui/button";
// import Image from "next/image";
// import Logo from "../assets/FrLogo.png";

// export const Header = () => {
//   return (
//     <div className="min-w-[96rem] max-h-screen shadow-sm items-center p-6 fixed bg-white">
//       <div className="flex justify-around mx-auto">
//         <Link href={"/"} className="flex items-center gap-2">
//           <Image src={Logo} alt="FoundrGuide" className="w-9 h-9" />
//           <h1 className="font-semibold text-xl">
//             Foundr
//             <span className="text-blue-800 saturate-150">Guide.</span>
//           </h1>
//         </Link>
//         <div className="flex flex-wrap">
//           <NavigationMenu>
//             <Link href="/home" legacyBehavior passHref>
//               <NavigationMenuLink
//                 className={`${navigationMenuTriggerStyle()}
//                 hover:text-gray-700`}
//               >
//                 Home
//               </NavigationMenuLink>
//             </Link>
//             <NavigationMenuList>
//               <NavigationMenuItem>
//                 <NavigationMenuTrigger className="hover:text-gray-700">
//                   Book Summaries
//                 </NavigationMenuTrigger>
//                 <NavigationMenuContent>
//                   <NavigationMenuLink>Link</NavigationMenuLink>
//                 </NavigationMenuContent>
//               </NavigationMenuItem>
//             </NavigationMenuList>
//             <NavigationMenuList>
//               <NavigationMenuItem>
//                 <NavigationMenuTrigger className="hover:text-gray-700">
//                   Resources
//                 </NavigationMenuTrigger>
//                 <NavigationMenuContent>
//                   <NavigationMenuLink>Link</NavigationMenuLink>
//                 </NavigationMenuContent>
//               </NavigationMenuItem>
//             </NavigationMenuList>
//             <Link href="/" legacyBehavior passHref>
//               <NavigationMenuLink
//                 className={`${navigationMenuTriggerStyle()} hover:text-gray-700`}
//               >
//                 FAQs
//               </NavigationMenuLink>
//             </Link>
//           </NavigationMenu>
//         </div>
//         <div className="space-x-2">
//           <Button
//             variant={"outline"}
//             className="p-4 border border-blue-700 saturate-150 text-blue-700"
//           >
//             Get Started
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };
