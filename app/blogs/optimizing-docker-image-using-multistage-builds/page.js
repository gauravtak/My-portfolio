"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function DockerBlogPost() {
  const nodeDockerfile = `# Build stage
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
CMD ["npm", "start"]`;

  const goDockerfile = `# Build stage
FROM golang:1.21-alpine AS builder
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o main .

# Production stage
FROM alpine:latest
RUN apk --no-cache add ca-certificates
WORKDIR /root/
COPY --from=builder /app/main .
CMD ["./main"]`;

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <Link href="/blogs" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blogs
        </Link>
        
        {/* Blog post header */}
        <header className="bg-white p-8 mb-8" style={{ border: '2px solid #dc2626' }}>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Optimizing Docker Image Using Multistage Builds
          </h1>
          <div className="flex items-center gap-4 text-gray-600">
            <span>January 15, 2024</span>
            <span>•</span>
            <span>5 min read</span>
          </div>
        </header>
        
        {/* Blog post content */}
        <article className="bg-white p-8 prose prose-lg max-w-none" style={{ border: '2px solid #059669' }}>
          <h2>Introduction</h2>
          <p>
            Docker has revolutionized the way we package and deploy applications. However, as applications grow in complexity, 
            Docker images can become quite large, leading to slower deployments and increased storage costs. This is where 
            multistage builds come into play.
          </p>
          
          <h2>What are Multistage Builds?</h2>
          <p>
            Multistage builds allow you to use multiple FROM statements in your Dockerfile. Each FROM instruction begins 
            a new stage of the build, and you can selectively copy artifacts from one stage to another, leaving behind 
            everything you don't want in the final image.
          </p>
          
          <h2>Example Dockerfile</h2>
          <p>Here's a practical example of a multistage Dockerfile for a Node.js application:</p>
          <pre><code>{nodeDockerfile}</code></pre>
          
          <h2>Benefits of Multistage Builds</h2>
          <ul>
            <li><strong>Smaller final image size:</strong> Only production dependencies are included</li>
            <li><strong>Better security:</strong> Fewer packages and tools in production</li>
            <li><strong>Faster deployments:</strong> Smaller images transfer faster</li>
            <li><strong>Reduced storage costs:</strong> Less disk space required</li>
          </ul>
          
          <h2>Best Practices</h2>
          <p>When using multistage builds, consider the following:</p>
          <ol>
            <li>Use specific base images (avoid <code>latest</code> tags)</li>
            <li>Minimize the number of layers in each stage</li>
            <li>Clean up unnecessary files and dependencies</li>
            <li>Use <code>.dockerignore</code> files to exclude unwanted files</li>
            <li>Optimize the order of operations for better layer caching</li>
          </ol>
          
          <h2>Advanced Example</h2>
          <p>Here's a more complex example for a Go application:</p>
          <pre><code>{goDockerfile}</code></pre>
          
          <h2>Performance Impact</h2>
          <p>
            The performance improvements from multistage builds can be significant. In many cases, you can reduce image 
            size by 50-80% compared to single-stage builds. This translates to:
          </p>
          <ul>
            <li>Faster container startup times</li>
            <li>Reduced network transfer times during deployments</li>
            <li>Lower storage costs in container registries</li>
            <li>Improved CI/CD pipeline performance</li>
          </ul>
          
          <h2>Conclusion</h2>
          <p>
            Multistage builds are a powerful feature that can significantly improve your Docker workflow. By separating 
            build and runtime environments, you can create more efficient and secure container images. The initial setup 
            might require some extra thought, but the benefits in terms of performance, security, and cost make it 
            well worth the effort.
          </p>
          
          <p>
            Start implementing multistage builds in your Dockerfiles today, and you'll quickly see the difference in 
            your containerized applications.
          </p>
        </article>
      </div>
    </div>
  );
}
