'use client'
import React, { useState, useRef, useEffect } from "react"
import { Card, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Sparkles, 
  BookOpen, 
  Target, 
  Lightbulb, 
  Send,
  Smile,
  Paperclip,
  Mic,
  Image as ImageIcon
} from "lucide-react"
import { UserButton } from "@clerk/nextjs"
import Link from "next/link"

export default function ChatInterface() {
  const [message, setMessage] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  // Function to adjust textarea height
  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current
    if (textarea) {
      textarea.style.height = 'auto'
      textarea.style.height = `${textarea.scrollHeight}px`
    }
  }

  // Update height on content change
  useEffect(() => {
    adjustTextareaHeight()
  }, [message])

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value)
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim()) {
      console.log('Sending message:', message)
      setMessage('')
      // Reset textarea height
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto'
      }
    }
  }

  // Handle keyboard shortcuts
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }
  
  return (
    <div className="min-h-screen bg-gray-50 p-4 flex flex-col">
      <header className="flex justify-between items-center mb-8">
        <Link href={'/dashboard/chat'}>
          <div className="flex items-center space-x-2">
            <h2 className="text-2xl font-semibold text-blue-800 flex items-center gap-1">
              <Sparkles className="h-6 w-6"/>
              AI Assistant
            </h2>
          </div>
        </Link>
        <UserButton />
      </header>

      <main className="flex-grow flex flex-col items-center justify-center space-y-6 mb-8">
        <div className="w-full max-w-3xl bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="h-5 w-5 text-blue-600" />
            <h2 className="text-lg font-semibold">I'm FoundrGuide AI – your startup companion</h2>
          </div>
          
          <p className="text-gray-600 mb-6">
            Tell me your <span className="font-semibold">goal, challenge, or question</span>, and I'll provide
            <span className="font-semibold"> personalized recommendations</span> from our extensive library of startup resources.
          </p>

          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <p className="text-blue-800 mb-2 font-medium">For better recommendations, be specific.</p>
            <p className="text-blue-600 text-sm">I can't handle follow-up questions yet!</p>
          </div>

          <div className="space-y-3">
            <p className="text-gray-700 font-medium">Try something like:</p>
            {[
              { icon: <Target className="h-5 w-5" />, text: "\"How do I create a compelling pitch deck for seed funding?\"" },
              { icon: <BookOpen className="h-5 w-5" />, text: "\"What are the key principles of product-market fit?\"" },
              { icon: <Lightbulb className="h-5 w-5" />, text: "\"How can I implement effective OKRs in my startup?\"" }
            ].map((example, index) => (
              <Card key={index} className="bg-white border border-gray-200">
                <CardHeader className="p-4 flex flex-row items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    {example.icon}
                  </div>
                  <p className="text-gray-600">{example.text}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </main>

      {/* Enhanced Auto-expanding Chat Input Section */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:ml-64">
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="relative flex items-start bg-white rounded-lg shadow-sm border border-gray-200">
              {/* Attachment Button */}
              <button 
                type="button"
                className="p-2 hover:bg-gray-100 rounded-l-lg transition-colors flex-shrink-0"
              >
                <Paperclip className="h-5 w-5 text-gray-500" />
              </button>
              
              {/* Auto-expanding Textarea */}
              <div className="flex-grow min-h-[44px] flex items-center">
                <textarea
                  ref={textareaRef}
                  value={message}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask anything about starting or growing your business..."
                  className="w-full resize-none border-0 focus:ring-0 focus:outline-none bg-transparent px-3 py-3 max-h-[200px] overflow-y-auto"
                  style={{ minHeight: '24px' }}
                  rows={1}
                />
              </div>
              
              {/* Right Side Buttons */}
              <div className="flex items-center space-x-1 px-2 flex-shrink-0">
                <button 
                  type="button"
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Smile className="h-5 w-5 text-gray-500" />
                </button>
                <button 
                  type="button"
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <ImageIcon className="h-5 w-5 text-gray-500" />
                </button>
                <button 
                  type="button"
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Mic className="h-5 w-5 text-gray-500" />
                </button>
                <Button 
                  type="submit"
                  className={`ml-2 rounded-lg px-4 py-2 flex items-center gap-2 transition-colors
                    ${message.trim() 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
                  disabled={!message.trim()}
                >
                  <Send className="h-4 w-4" />
                  <span>Send</span>
                </Button>
              </div>
            </div>
          </form>
          
          {/* Character Count & Shortcuts */}
          <div className="flex justify-between items-center mt-2 text-xs text-gray-500 px-2">
            <div>
              <span>{message.length}/4000 characters</span>
            </div>
            <div className="flex items-center gap-2">
              <span>Press</span>
              <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Enter</kbd>
              <span>to send</span>
              <span className="mx-2">•</span>
              <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Shift</kbd>
              <span>+</span>
              <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Enter</kbd>
              <span>for new line</span>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Add padding to prevent content from being hidden behind fixed footer */}
      <div className="h-32" />
    </div>
  )
}
