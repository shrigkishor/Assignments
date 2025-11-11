"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Card from "@/components/ui/Card";

const BlogPage = () => {
  const blogPosts = [
    {
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt:
        "Explore the latest trends shaping the future of web development, from AI integration to advanced frameworks.",
      author: "Shrig Solutions Team",
      date: "March 15, 2024",
      category: "Technology",
      readTime: "5 min read",
      image: "/images/media/blog-1.svg",
    },
    {
      title: "Building Scalable Applications with Modern Architecture",
      excerpt:
        "Learn how to design and implement scalable applications using modern architectural patterns and best practices.",
      author: "Development Team",
      date: "March 10, 2024",
      category: "Development",
      readTime: "8 min read",
      image: "/images/media/blog-2.svg",
    },
    {
      title: "The Impact of AI on Software Development",
      excerpt:
        "Discover how artificial intelligence is revolutionizing the software development landscape and what it means for developers.",
      author: "AI Research Team",
      date: "March 5, 2024",
      category: "AI & ML",
      readTime: "6 min read",
      image: "/images/media/blog-3.svg",
    },
    {
      title: "Mobile App Development: Native vs Cross-Platform",
      excerpt:
        "A comprehensive comparison of native and cross-platform mobile development approaches and their trade-offs.",
      author: "Mobile Team",
      date: "February 28, 2024",
      category: "Mobile",
      readTime: "7 min read",
      image: "/images/media/blog-4.svg",
    },
    {
      title: "Optimizing Performance in React Applications",
      excerpt:
        "Best practices and techniques for improving performance in React applications for better user experience.",
      author: "Frontend Team",
      date: "February 20, 2024",
      category: "Frontend",
      readTime: "9 min read",
      image: "/images/media/blog-5.svg",
    },
    {
      title: "The Rise of Microservices Architecture",
      excerpt:
        "Understanding microservices architecture and its benefits for building robust, scalable applications.",
      author: "Architecture Team",
      date: "February 15, 2024",
      category: "Architecture",
      readTime: "10 min read",
      image: "/images/media/blog-6.svg",
    },
  ];

  const categories = [
    "All",
    "Technology",
    "Development",
    "AI & ML",
    "Mobile",
    "Frontend",
    "Architecture",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <Navigation />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Blogs
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8">
            Insights & Inspiration
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Stay Updated with the Latest in Tech, Innovation, and Industry
            Trends
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                index === 0
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <Card
            variant="glass"
            className="overflow-hidden border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="aspect-video bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-lg flex items-center justify-center">
                <div className="text-8xl opacity-60">📚</div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm text-blue-400 font-medium">
                    Featured
                  </span>
                  <span className="text-sm text-gray-400">Technology</span>
                  <span className="text-sm text-gray-400">•</span>
                  <span className="text-sm text-gray-400">5 min read</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  The Future of Web Development: Trends to Watch in 2024
                </h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Explore the latest trends shaping the future of web
                  development, from AI integration to advanced frameworks.
                  Discover how these innovations are transforming the way we
                  build and deploy web applications.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      SS
                    </div>
                    <div>
                      <p className="text-white font-medium">
                        Shrig Solutions Team
                      </p>
                      <p className="text-gray-400 text-sm">March 15, 2024</p>
                    </div>
                  </div>
                  <button className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300">
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <Card
              key={index}
              variant="glass"
              className="group overflow-hidden border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
            >
              <div className="relative">
                {/* Post Image */}
                <div className="aspect-video bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-6xl opacity-60 group-hover:opacity-80 transition-opacity duration-300">
                    {index === 0 && "🏗️"}
                    {index === 1 && "🤖"}
                    {index === 2 && "📱"}
                    {index === 3 && "⚡"}
                    {index === 4 && "🏗️"}
                  </div>
                </div>

                {/* Post Info */}
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-sm text-blue-400 font-medium">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-400">•</span>
                    <span className="text-sm text-gray-400">
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {post.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">
                          {post.author}
                        </p>
                        <p className="text-gray-400 text-xs">{post.date}</p>
                      </div>
                    </div>

                    <button className="text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors duration-300">
                      Read →
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 border border-blue-500/30">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get the latest insights, tips, and industry updates delivered
              directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-blue-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button className="bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default BlogPage;
