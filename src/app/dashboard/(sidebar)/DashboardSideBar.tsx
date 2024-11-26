'use client'
import { SignOutButton } from '@clerk/nextjs'
import { Home, Search, Library, Highlighter, Sparkles, Settings, HelpCircle, LogOut, Menu, X, MessageSquare } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Logo from '@/public/assets/FrLogo.png'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

interface PreviousChat {
  id: string;
  title: string;
  date: string;
}

const sidebarItems = [
  { name: 'For You', href: '/dashboard/for-you', icon: Home },
  { name: 'Explore', href: '/dashboard/explore', icon: Search },
  { name: 'My Library', href: '/dashboard/my-library', icon: Library },
  { name: 'Highlights', href: '/dashboard/highlights', icon: Highlighter },
  { name: 'Chat', href: '/dashboard/chat', icon: Sparkles },
]

const bottomItems = [
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
  { name: 'Help & support', href: '/dashboard/help-support', icon: HelpCircle },
]

const previousChats: PreviousChat[] = [
  { id: '1', title: 'Startup Funding Strategy', date: '2024-02-20' },
  { id: '2', title: 'Product Market Fit', date: '2024-02-19' },
  { id: '3', title: 'Team Building Tips', date: '2024-02-18' },
  { id: '4', title: 'Marketing Strategy', date: '2024-02-17' },
  { id: '5', title: 'Sales Pipeline Setup', date: '2024-02-16' },
  { id: '6', title: 'Customer Acquisition', date: '2024-02-15' },
  { id: '7', title: 'Growth Hacking Methods', date: '2024-02-14' },
  { id: '8', title: 'Investor Pitch Deck', date: '2024-02-13' },
  { id: '9', title: 'Team Management', date: '2024-02-12' },
  { id: '10', title: 'Financial Planning', date: '2024-02-11' },
]

export default function Sidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [showPreviousChats, setShowPreviousChats] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth >= 768) {
        setIsOpen(true)
      }
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  useEffect(() => {
    setShowPreviousChats(pathname.includes('/dashboard/chat'))
  }, [pathname])

  return (
    <>
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-white shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div className="fixed left-0 top-0 h-full z-40">
        <aside
          className={`h-screen bg-white shadow-md transition-all duration-300
            ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
            ${isMobile ? 'w-64' : 'w-64'} md:translate-x-0
            flex flex-col`}
        >
          {/* Fixed Header */}
          <div className="flex-shrink-0 p-4 border-b border-gray-200">
            <Link href="/dashboard/for-you" className="flex items-center space-x-2">
              <Image src={Logo} alt='FoundrGuide' width={100} height={100} className='w-6 h-6' />
              <p className="text-xl font-semibold">Foundr<span className='text-blue-600'>Guide</span></p>
            </Link>
          </div>

          {/* Main Navigation - Fixed */}
          <nav className="flex-shrink-0 pt-4">
            <ul>
              {sidebarItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`flex items-center space-x-3 px-6 py-2 text-gray-700 hover:bg-gray-200 hover:text-blue-600 
                      ${pathname === item.href ? 'bg-gray-100 text-gray-900' : ''}`}
                    onClick={() => isMobile && setIsOpen(false)}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Previous Chats Section - Scrollable */}
          {showPreviousChats && (
            <div className="flex flex-col flex-grow overflow-hidden">
              <div className="flex-shrink-0 px-6 py-2 border-t border-gray-200 bg-white">
                <h3 className="text-sm font-semibold text-gray-500">Previous Chats</h3>
              </div>
              <div className="flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400">
                {previousChats.map((chat) => (
                  <Link
                    key={chat.id}
                    href={`/dashboard/chat/${chat.id}`}
                    className="flex items-center space-x-3 px-6 py-2 text-gray-700 hover:bg-gray-200 text-sm border-l-2 border-transparent hover:border-blue-600"
                  >
                    <MessageSquare className="h-4 w-4 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <span className="block truncate">{chat.title}</span>
                      <span className="text-xs text-gray-500">
                        {new Date(chat.date).toLocaleDateString()}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Items - Fixed */}
          <div className="flex-shrink-0 border-t border-gray-200 bg-white">
            <ul>
              {bottomItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="flex items-center space-x-3 px-6 py-2 text-gray-700 hover:bg-gray-200 hover:text-blue-600"
                    onClick={() => isMobile && setIsOpen(false)}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
              <li className='flex items-center space-x-3 px-6 py-2 text-gray-700 hover:bg-gray-200 hover:text-blue-600'>
                <LogOut className='h-5 w-5'/>
                <SignOutButton/>
              </li>
            </ul>
          </div>
        </aside>
      </div>

      <div className="md:ml-64" />
    </>
  )
}
