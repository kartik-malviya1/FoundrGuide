'use client'
import { SignOutButton } from '@clerk/nextjs'
import { Home, Search, Library, Highlighter, Sparkles, Settings, HelpCircle, LogOut } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Logo from '@/public/assets/FrLogo.png'
import Image from 'next/image'
import Link from 'next/link'

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

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <Link href="/dashboard/for-you" className="flex items-center space-x-2">
            <Image src={Logo} alt='FoundrGuide' width={100} height={100} className='w-6 h-6 '/>
            <p className="text-xl font-semibold">Foundr<span className='text-blue-600'>Guide</span></p>
          </Link>
        </div>
        <nav className="mt-8">
          <ul>
            {sidebarItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center space-x-3 px-6 py-2 text-gray-700 hover:bg-gray-200 hover:text-blue-600 ${
                    pathname === item.href ? 'bg-gray-100 text-gray-900' : ''
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
          <hr className='border-gray-200 mb-4 mt-4'/>
        <div className="w-64 border-gray-200">
          <ul>
            {bottomItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="flex items-center space-x-3 px-6 py-2 text-gray-700 hover:bg-gray-200 hover:text-blue-600"
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
            <span className='flex items-center space-x-3 px-6 py-2 text-gray-700 hover:bg-gray-200 hover:text-blue-600'>
              <LogOut className='h-5 w-5'/>
              <SignOutButton/>
            </span>
          </ul>
        </div>
      </aside>
    </div>
  )
}
