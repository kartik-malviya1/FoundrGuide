import { SignedIn } from '@clerk/nextjs';
import DashboardSideBar from './(component)/DashboardSideBar';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body>
            <SignedIn>
              <div className="mx-auto container flex">
                <DashboardSideBar/>
                {children}
              </div>
            </SignedIn>
        </body>
      </html>
  )}