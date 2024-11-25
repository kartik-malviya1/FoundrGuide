import { SignedIn } from '@clerk/nextjs';
import DashboardSideBar from './(sidebar)/DashboardSideBar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SignedIn>
          <div className="flex min-h-screen flex-col md:flex-row">
            <DashboardSideBar/>
            <div className="flex-1 w-full">{children}</div>
          </div>
        </SignedIn>
      </body>
    </html>
  )
}