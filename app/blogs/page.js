import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import Link from 'next/link'

export default function Blog(){
  const blogDir = "blogs"
  const files = fs.readdirSync(path.join(blogDir))

  const blogs = files.map(filename => {
    const fileContent = fs.readFileSync(path.join(blogDir, filename), 'utf-8')
    const { data: frontMatter } = matter(fileContent)

	return {
      		meta: frontMatter,
      		slug: filename.replace('.mdx', '')
    	}
  })

  return (

   <main className="flex flex-col">
      <h1 className="text-3xl font-bold">
        Blogs
      </h1>
	 
      <section className='py-10'>
        <div className='py-2'>
          {blogs.map(blog => (
            <Link href={'/blogs/' + blog.slug} passHref key={blog.slug}>
              <div className='py-2 flex justify-between align-middle gap-2'>
                  <div className="blog-card p-6 rounded-xl transition ease-in-out delay-150">
                      <h3 className="md:text-xl mb-2 text-sm font-bold">{blog.meta.title}</h3>
                      <p className="text-gray-400 text-xs md:text-md">{blog.meta.description}</p>
                  </div>
                  <div className="my-auto md:text-md text-xs text-gray-400">
                      <p>{blog.meta.date}</p>
                  </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
