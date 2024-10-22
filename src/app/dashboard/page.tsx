import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const { userId } = await auth();

  // Redirect to the sign-in page if the user is not authenticated
  if (!userId) {
    redirect("/sign-in");
  }

  // If authenticated, render the dashboard content
  return (
    <div>
      <h1>Welcome to your Dashboard</h1>
    </div>
  );
}
