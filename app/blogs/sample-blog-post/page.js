"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function SampleBlogPost() {
  const sampleCode = `function helloWorld() {
  console.log("Hello, World!");
  return "Hello from the blog!";
}

// Call the function
const message = helloWorld();
console.log(message);`;

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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Sample Blog Post
          </h1>
          <div className="flex items-center gap-4 text-gray-600">
            <span>January 10, 2024</span>
            <span>•</span>
            <span>3 min read</span>
          </div>
        </header>
        
        {/* Blog post content */}
        <article className="bg-white border-2 border-gray-900 p-8 prose prose-lg max-w-none">
          <h2>Welcome to My Blog</h2>
          <p>
            This is a sample blog post to demonstrate the new HTML-based blog system. You can now write your content 
            directly in HTML format, giving you full control over styling and layout.
          </p>
          
          <h2>Code Examples</h2>
          <p>
            You can include code blocks using the <code>&lt;code&gt;</code> tag for inline code and 
            <code>&lt;pre&gt;&lt;code&gt;</code> for code blocks:
          </p>
          <pre><code>{sampleCode}</code></pre>
          
          <h2>Features of the New System</h2>
          <ul>
            <li><strong>HTML-based content:</strong> Full control over markup and styling</li>
            <li><strong>Clean typography:</strong> Professional-looking text with proper spacing</li>
            <li><strong>Responsive design:</strong> Works perfectly on all device sizes</li>
            <li><strong>Easy maintenance:</strong> No need for markdown processing</li>
            <li><strong>Custom styling:</strong> Tailwind CSS classes for consistent design</li>
          </ul>
          
          <h2>Writing Your Own Posts</h2>
          <p>
            To create a new blog post, simply create a new folder in the <code>app/blogs/</code> directory with your 
            desired slug, and add a <code>page.js</code> file. You can then write your content directly in HTML format.
          </p>
          
          <h2>Code Highlighting</h2>
          <p>
            The system automatically styles code blocks with a clean, readable format. You can use different HTML tags 
            to structure your content:
          </p>
          <ul>
            <li><code>&lt;h2&gt;</code> for section headings</li>
            <li><code>&lt;p&gt;</code> for paragraphs</li>
            <li><code>&lt;ul&gt;</code> and <code>&lt;ol&gt;</code> for lists</li>
            <li><code>&lt;strong&gt;</code> for emphasis</li>
            <li><code>&lt;code&gt;</code> for inline code</li>
          </ul>
          
          <h2>Conclusion</h2>
          <p>
            This new HTML-based blog system gives you the flexibility to create rich, engaging content while maintaining 
            a consistent design with the rest of your portfolio. Start writing your own posts today!
          </p>
        </article>
      </div>
    </div>
  );
}
