import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("blogs"));
  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));

  return paths;
}

function getPost({ slug }) {
  if (!slug) {
    throw new Error("Slug is undefined");
  }
  const markdownFile = fs.readFileSync(
    path.join("blogs", slug + ".mdx"),
    "utf-8",
  );
  const { data: frontMatter, content } = matter(markdownFile);

  return {
    frontMatter,
    slug,
    content,
  };
}

export default function Post({ params }) {
  const props = getPost(params);

  return (
    <article className="">
      <h1 className="md:text-3xl font-bold">{props.frontMatter.title}</h1>
      {/* @ts-expect-error Server Component*/}
      <MDXRemote source={props.content} />
    </article>
  );
}
