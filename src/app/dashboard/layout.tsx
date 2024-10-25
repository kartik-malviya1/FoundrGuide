import DashboardSideBar from './(component)/DashboardSideBar'
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body>
          <div className="mx-auto container flex">
            <DashboardSideBar/>
            {children}
          </div>
        </body>
      </html>
  )}