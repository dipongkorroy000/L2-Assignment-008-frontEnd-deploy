import Image from "next/image";
import BackBtn from "@/src/components/static/BackBtn";

const BlogPage = async ({params}: {params: Promise<{blogId: string}>}) => {
  const {blogId} = await params;

  // TODO: Replace with real blog fetch logic
  const blog = {
    id: blogId,
    title: "Exploring Sylhet with Local Guides",
    image: "https://iili.io/fSsaBr7.jpg",
    author: "Team Tourist",
    date: "Jan 10, 2026",
    content: `
      Sylhet is a land of tea gardens, waterfalls, and warm hospitality. Our local guides take you deep into the heart of Sylheti culture — from the serene Ratargul swamp forest to the vibrant bazaars of Zindabazar. Whether you're hiking through Jaflong or sipping tea in Lakkatura, every moment is a story waiting to be told. Join us as we explore the hidden gems and authentic experiences that make Sylhet unforgettable.
    `,
  };

  return (
    <section className="min-h-screen py-16 px-6 md:px-20 bg-gradient-to-r from-primary-foreground via-white to-primary-foreground">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-chart-4 mb-2">{blog.title}</h1>
          <p className="text-sm text-muted-foreground">
            By <span className="font-medium">{blog.author}</span> • {blog.date}
          </p>
        </div>

        {/* Image */}
        <div className="mb-6">
          <Image src={blog.image} alt={blog.title} width={800} height={400} className="w-full h-64 object-cover rounded-md" />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
          {blog.content.split("\n").map((para, idx) => (
            <p key={idx}>{para.trim()}</p>
          ))}
        </div>

        {/* Back Button */}
        <div className="mt-10">
          <BackBtn />
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
