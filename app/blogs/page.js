import Link from 'next/link'

export default function Blog(){
  // Blog data - you can add more blog posts here
  const blogs = [
    {
      slug: 'optimizing-docker-image-using-multistage-builds',
      title: 'Optimizing Docker Image Using Multistage Builds',
      description: 'Learn how to create smaller, more efficient Docker images using multistage builds and best practices.',
      date: '2024-01-15',
      readTime: '5 min read'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mb-12 text-center">Blog Posts</h1>
        
        <div className="space-y-6">
          {blogs.map(blog => (
            <Link href={`/blogs/${blog.slug}`} key={blog.slug} className="block">
              <article className="bg-white p-6 hover:shadow-lg transition-shadow duration-200" style={{ border: '2px solid #7c2d12' }}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                      {blog.title}
                    </h2>
                    <p className="text-gray-600 mb-3 leading-relaxed">
                      {blog.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>{blog.date}</span>
                      <span>•</span>
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                  <div className="md:text-right">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded font-medium">
                      Read More →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
