
export const metadata = {
  title: "Blog Posts - Gaurav's Portfolio",
  description: "Read my latest thoughts on software development, technology, and engineering practices.",
};

export default function BlogLayout({ children }) {
  return (
    <section className="min-h-screen">
      {children}
    </section>
  )
}
