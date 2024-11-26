import { Search } from "lucide-react"
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

interface Book {
  title: string;
  author: string;
  coverImage: string;
  duration: string;
  rating: number;
}

export default async function ForYou() {
  const { userId } = await auth();
    
  if (!userId) {
    redirect("/sign-in");
  }

  // Mock data - replace with actual data from your API
  const trendingBooks: Book[] = [
    {
      title: "Critical Thinking",
      author: "Richard Paul",
      coverImage: "/critical-thinking.jpg",
      duration: "16 min",
      rating: 4.2
    },
    {
      title: "Four Ways of Thinking",
      author: "David Sumpter",
      coverImage: "/four-ways.jpg",
      duration: "15 min",
      rating: 3.7
    },
    // ... add more books
  ];

  return (
    <main className="flex-1 overflow-y-auto p-8">
      <header className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">For you</h1>
        <div className="relative mr-10">
          <input
            type="text"
            placeholder="Books, Collection, Summaries"
            className="w-64 rounded-lg border border-gray-300 bg-white px-4 py-2 pr-10 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
          <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </header>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Trending Now</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingBooks.map((book, index) => (
            <Link href={`/dashboard/book/${book.title.toLowerCase().replace(/ /g, '-')}`} key={index}>
              <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="relative h-48 w-full">
                  <Image
                    src={book.coverImage}
                    alt={book.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{book.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{book.author}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{book.duration}</span>
                    <span className="text-sm text-gray-500">★ {book.rating}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Add more sections as needed */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Recently Added</h2>
        {/* Similar grid structure */}
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Recommended for You</h2>
        {/* Similar grid structure */}
      </section>
    </main>
  )
}