import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Post({ params }) {
  // Sample blog post content - you can replace this with your actual blog posts
  const blogPosts = {
    'optimizing-docker-image-using-multistage-builds': {
      title: 'Optimizing Docker Image Using Multistage Builds',
      date: 'January 15, 2024',
      readTime: '5 min read',
      content: `
        <h2>Introduction</h2>
        <p>Docker has revolutionized the way we package and deploy applications. However, as applications grow in complexity, Docker images can become quite large, leading to slower deployments and increased storage costs.</p>
        
        <h2>What are Multistage Builds?</h2>
        <p>Multistage builds allow you to use multiple FROM statements in your Dockerfile. Each FROM instruction begins a new stage of the build, and you can selectively copy artifacts from one stage to another, leaving behind everything you don't want in the final image.</p>
        
        <h2>Example Dockerfile</h2>
        <pre><code># Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

# Production stage
FROM node:18-alpine AS production
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY . .
EXPOSE 3000
CMD ["npm", "start"]</code></pre>
        
        <h2>Benefits</h2>
        <ul>
          <li>Smaller final image size</li>
          <li>Better security (fewer packages in production)</li>
          <li>Faster deployments</li>
          <li>Reduced storage costs</li>
        </ul>
        
        <h2>Best Practices</h2>
        <p>When using multistage builds, consider the following:</p>
        <ol>
          <li>Use specific base images</li>
          <li>Minimize the number of layers</li>
          <li>Clean up unnecessary files</li>
          <li>Use .dockerignore files</li>
        </ol>
        
        <h2>Conclusion</h2>
        <p>Multistage builds are a powerful feature that can significantly improve your Docker workflow. By separating build and runtime environments, you can create more efficient and secure container images.</p>
      `
    },
    'sample-blog-post': {
      title: 'Sample Blog Post',
      date: 'January 10, 2024',
      readTime: '3 min read',
      content: `
        <h2>Welcome to My Blog</h2>
        <p>This is a sample blog post to demonstrate the new HTML-based blog system. You can write your content directly in HTML format.</p>
        
        <h2>Code Examples</h2>
        <p>You can include code blocks using the <code>&lt;code&gt;</code> tag:</p>
        <pre><code>function helloWorld() {
  console.log("Hello, World!");
}</code></pre>
        
        <h2>Features</h2>
        <ul>
          <li>HTML-based content</li>
          <li>Syntax highlighting for code</li>
          <li>Responsive design</li>
          <li>Clean typography</li>
        </ul>
      `
    }
  };

  const post = blogPosts[params.slug];

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link href="/blogs" className="bg-gray-900 text-white px-6 py-3 font-medium hover:bg-gray-800 transition-colors">
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <Link href="/blogs" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blogs
        </Link>
        
        {/* Blog post header */}
        <header className="bg-white border-2 border-gray-900 p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-gray-600">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </header>
        
        {/* Blog post content */}
        <article className="bg-white border-2 border-gray-900 p-8 prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </div>
    </div>
  );
}
