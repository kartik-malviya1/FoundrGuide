'use client';

import { SignedIn } from '@clerk/nextjs';
import DashboardSideBar from './(sidebar)/DashboardSideBar';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SignedIn>
      <div className="min-h-screen bg-gray-50">
        <DashboardSideBar />
        <main className="md:ml-64">
          {children}
        </main>
      </div>
    </SignedIn>
  );
}