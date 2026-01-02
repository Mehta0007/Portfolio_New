import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import rehypePrettyCode from "rehype-pretty-code";
import prettyCodeOptions from "@/lib/prettyCodeOptions";


export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!slug) return notFound();

  const filePath = path.join(
    process.cwd(),
    "content/posts",
    `${slug}.mdx`
  );

  if (!fs.existsSync(filePath)) return notFound();

  const file = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(file);

  const stats = readingTime(content);

  return (
    <article className="max-w-2xl mx-auto py-8 leading-relaxed">
    <div className="flex justify-between items-center mb-4">
  <Link
    href="/blog"
    className="text-sm hover:underline"
  >
    ← Back
  </Link>
<div className="shrink-0">

  <ThemeToggle />
</div>
</div>

      <h1 className="text-3xl font-semibold mt-2">
        {data.title}
      </h1>

      <p className="text-sm text-neutral-600">
        {new Date(data.date).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })}{" "}
        • {stats.text}
      </p>

      <div className="h-px bg-neutral-300 my-4" />

      <div className="prose prose-neutral">
        <MDXRemote
  source={content}
  options={{
    mdxOptions: {
      rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
    },
  }}
/>

      </div>
    </article>
  );
}
