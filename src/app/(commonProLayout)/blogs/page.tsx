import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "Exploring Sylhet with Local Guides",
    excerpt: "Discover tea gardens, waterfalls, and authentic Sylheti culture with our passionate guides.",
    image: "https://iili.io/fSisSFR.jpg",
    author: "Team Tourist",
    date: "Jan 10, 2026",
  },
  {
    id: 2,
    title: "Sundarbans Adventure",
    excerpt: "A journey into the world's largest mangrove forest, spotting wildlife and learning local stories.",
    image: "https://iili.io/fSsaBr7.jpg",
    author: "LocalGuide Team",
    date: "Jan 5, 2026",
  },
  {
    id: 3,
    title: "Dinajpur Heritage Walk",
    excerpt: "Step back in time exploring Kantajew Temple and hidden gems of Dinajpur.",
    image: "https://iili.io/fSsEWgV.jpg",
    author: "Tourist Voices",
    date: "Dec 28, 2025",
  },
];

const BlogsPage = () => {
  return (
    <section className="min-h-screen py-12 px-6 md:px-20" style={{backgroundImage: "var(--gradient-primary-foreground)"}}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-3">Our Blogs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Stories and experiences from tourists and guides across Bangladesh. Travel like a local!</p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-xl shadow-md overflow-hidden transition">
              <Image src={blog.image} alt={blog.title} width={400} height={250} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{blog.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{blog.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <span>By {blog.author}</span>
                  <span>{blog.date}</span>
                </div>
                <Link href={`/blogs/${blog.id}`} className="inline-block px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/80 transition">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsPage;
