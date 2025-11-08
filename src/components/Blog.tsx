import { Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import BlogSkeleton from "./BlogSkeleton"
import { useState, useEffect } from "react"

const blogPosts = [
  {
    title: "Mastering Backend Development with Node.js",
    excerpt: "Dive deep into backend development best practices, microservices architecture, and performance optimization techniques for modern web applications.",
    author: "Ryan Waweru",
    date: "December 15, 2024",
    readTime: "5 min read",
    category: "Backend",
    image: "/lovable-uploads/d56bc4e4-5073-4663-8241-3b53d940fe6a.png",
    link: "https://medium.com/@ryanwaweru475/seo-optimized-blog-mastering-backend-development-with-node-js-874bcdb2bd97"
  },
  {
    title: "AI in Everyday Applications: A Practical Guide",
    excerpt: "Explore how artificial intelligence is transforming everyday applications and learn practical techniques for integrating AI into your projects.",
    author: "Ryan Waweru",
    date: "June 10, 2025",
    readTime: "7 min read",
    category: "Artificial Intelligence",
    image: "/lovable-uploads/1ec68258-a54b-4de8-9cc9-0b2f49b84094.png",
    link: "https://medium.com/@ryanwaweru475/ai-in-everyday-applications-a-practical-guide-e8e4cf79621a"
  },
  {
    title: "React Best Practices for 2025",
    excerpt: "Stay ahead of the curve with the latest React patterns, performance optimizations, and development techniques for building scalable applications.",
    author: "Ryan Waweru",
    date: "July 5, 2025",
    readTime: "6 min read",
    category: "Frontend",
    image: "/lovable-uploads/74226926-028a-47e4-bdad-10dce5efef70.png",
    link: "https://medium.com/@ryanwaweru475/seo-optimized-blog-react-best-practices-for-2025-e536c5d17850"
  }
]

export default function Blog() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="blog" className="py-12 sm:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 animate-fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Latest <span className="text-gradient">Blog Posts</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Insights, tutorials, and thoughts on technology, development, and innovation
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {isLoading ? (
            <>
              {[...Array(3)].map((_, i) => (
                <BlogSkeleton key={i} />
              ))}
            </>
          ) : (
            blogPosts.map((post, index) => (
            <article
              key={post.title}
              className="card-gradient rounded-2xl overflow-hidden hover-scale group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => post.link && window.open(post.link, '_blank')}
            >
              {/* Featured Image */}
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">By {post.author}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary hover:text-primary/80 p-0"
                    onClick={(e) => {
                      e.stopPropagation();
                      post.link && window.open(post.link, '_blank');
                    }}
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </article>
            ))
          )}
        </div>

        {/* View All Posts Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => window.open('https://medium.com/@ryanwaweru475', '_blank')}
          >
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  )
}