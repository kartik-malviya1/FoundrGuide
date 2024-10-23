import React from "react"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Hand, Plane, Settings, Wand2 } from "lucide-react"
import { ArrowTopRightIcon } from "@radix-ui/react-icons"
import Image from "next/image"
import Logo from '@/public/assets/FrLogo.png'

export default function ChatInterface() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 p-4 flex flex-col">
      <header className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-2">
          <Image src={Logo} alt="Logo" width={30} height={30} />
          <h2 className="text-xl font-semibold text-black">Foundr<span className="text-blue-600">Guide</span></h2>
        </div>
        <Avatar className="w-8 h-8">
          <AvatarImage src="/placeholder-avatar.png" alt="User" />
          <AvatarFallback>KM</AvatarFallback>
        </Avatar>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center space-y-6 mb-8">
        <Avatar className="w-20 h-20 bg-blue-600">
          <Hand className="w-10 h-10 text-white" />
        </Avatar>
        <h1 className="text-2xl font-semibold text-blue-800">Hi, Kartik</h1>
        <h2 className="text-3xl font-bold text-blue-900">Can I help you with anything?</h2>
        <p className="text-blue-700 text-center max-w-md">
          Ready to assist you with anything you need, from answering
          questions to providing tailored advice. Let&apos;s get started!
        </p>
      </main>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 max-w-screen-xl mx-auto">
        {[
          { icon: <Plane className="w-6 h-6" />, title: "Mastering the Lean Startup Model", subtitle: "Learn how to build, measure, and grow your startup with minimal resources",cta: "(Must-Read Strategies)" },
          { icon: <Hand className="w-6 h-6" />, title: "Elevate Your Pitch: What Investors Want to Hear", subtitle: "Tailored advice on crafting the perfect pitch for your startup", cta: "(Funding Strategies)" },
          { icon: <Wand2 className="w-6 h-6" />, title: "Lessons from Successful Founders", subtitle: "Discover key insights from the journeys of top entrepreneurs",cta: "(Inspiring Case Studies)" },
        ].map((card, index) => (
          <Card key={index} className="bg-white/80 hover:bg-white transition-colors">
            <CardHeader className="flex flex-row items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                {card.icon}
              </div>
              <div className="flex flex-col gap-1">
                <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
                <p className="text-xs text-blue-600">{card.subtitle}</p>
                <p className="text-xs italic text-gray-600">{card.cta}</p>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>

      <footer className="flex items-center space-x-2 mx-auto w-7/12">
        <Button variant="outline" size="icon" className="rounded-full">
          <Settings className="w-4 h-4" />
        </Button>
        <div className="flex-grow relative ">
          <Input
            type="text"
            placeholder="Ask Foundr anything..."
            className=" rounded-full bg-white/80"
          />
          <Button className="absolute right-0 top-1/2  -translate-y-1/2 rounded-full px-4">
            Send
            <ArrowTopRightIcon className="w-4 h-4 ml-1.5"/>
          </Button>
        </div>
      </footer>
    </div>
  )
}