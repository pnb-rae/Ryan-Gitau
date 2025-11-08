import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Sample blog post data
const blogPosts = {
  "building-scalable-apps": {
    title: "Building Scalable Web Applications with React and Supabase",
    date: "2024-01-15",
    readTime: "8 min read",
    author: "Ryan Waweru",
    content: `
# Building Scalable Web Applications

Building modern web applications requires careful consideration of architecture, scalability, and user experience.

## Why React and Supabase?

React has become the go-to library for building interactive UIs, while Supabase provides a complete backend solution with:

- **PostgreSQL Database**: Powerful relational database
- **Real-time Subscriptions**: Live data updates
- **Authentication**: Built-in auth system
- **Storage**: File storage solution

## Getting Started

First, let's set up a new React project:

\`\`\`bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
\`\`\`

## Installing Supabase

\`\`\`bash
npm install @supabase/supabase-js
\`\`\`

## Creating the Client

\`\`\`typescript
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)
\`\`\`

## Best Practices

1. **Use TypeScript**: Type safety prevents bugs
2. **Implement RLS**: Row Level Security protects data
3. **Optimize Queries**: Use proper indexing
4. **Handle Errors**: Always implement error handling

## Conclusion

With React and Supabase, you can build production-ready applications quickly while maintaining scalability and security.
    `,
    tags: ["React", "Supabase", "TypeScript"]
  },
  "ai-integration": {
    title: "Integrating AI into Your Web Applications",
    date: "2024-01-10",
    readTime: "10 min read",
    author: "Ryan Waweru",
    content: `
# AI Integration Guide

AI is transforming how we build applications. Here's how to integrate it effectively.

## Choosing the Right AI Service

Consider these factors:
- **Use Case**: What problem are you solving?
- **Cost**: API pricing models
- **Latency**: Response time requirements
- **Privacy**: Data handling considerations

## Implementation Example

\`\`\`typescript
async function generateContent(prompt: string) {
  const response = await fetch('/api/ai', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt })
  })
  
  return response.json()
}
\`\`\`

## Best Practices

- Cache responses when possible
- Implement rate limiting
- Handle errors gracefully
- Monitor usage and costs

Start small and iterate based on user feedback!
    `,
    tags: ["AI", "API", "Backend"]
  }
};

const relatedPosts = [
  {
    slug: "building-scalable-apps",
    title: "Building Scalable Web Applications",
    excerpt: "Learn how to build production-ready applications with React and Supabase"
  },
  {
    slug: "ai-integration",
    title: "Integrating AI into Your Web Applications",
    excerpt: "A comprehensive guide to adding AI capabilities to your projects"
  }
];

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link to="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <article className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Back Button */}
          <Link to="/">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Button>
          </Link>

          {/* Post Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
            
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <div className="flex gap-2 mt-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          {/* Post Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <ReactMarkdown
              components={{
                code({ node, inline, className, children, ...props }: any) {
                  const match = /language-(\w+)/.exec(className || "");
                  return !inline && match ? (
                    <SyntaxHighlighter
                      style={vscDarkPlus}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    >
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>

          {/* Related Posts */}
          <div className="mt-16 pt-16 border-t border-border">
            <h2 className="text-3xl font-bold mb-8">Related Posts</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedPosts
                .filter((p) => p.slug !== slug)
                .map((related) => (
                  <Link key={related.slug} to={`/blog/${related.slug}`}>
                    <div className="p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-shadow">
                      <h3 className="text-xl font-semibold mb-2">{related.title}</h3>
                      <p className="text-muted-foreground text-sm">{related.excerpt}</p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
