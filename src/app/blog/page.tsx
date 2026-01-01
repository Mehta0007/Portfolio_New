import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import readingTime from "reading-time";
import ThemeToggle from "@/components/ThemeToggle";

export default function BlogPage() {
  const postsDir = path.join(process.cwd(), "content/posts");
  const files = fs.readdirSync(postsDir);

  const posts = files.map((filename) => {
    const fileContent = fs.readFileSync(
      path.join(postsDir, filename),
      "utf-8"
    );

    const { data, content } = matter(fileContent);

    return {
      slug: filename.replace(".mdx", ""),
      title: data.title,
      date: data.date,
      summary: data.summary,
      readTime: readingTime(content).text,
    };
  });

  posts.sort((a: any, b: any) => +new Date(b.date) - +new Date(a.date));

  return (
    <section className="max-w-2xl mx-auto py-14">

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
  <div>
    <h1 className="text-4xl font-semibold">Blog</h1>
    <p className="text-neutral-600 mt-1">
      ✍️ Notes on things I build, break, and learn.
    </p>
  </div>

  <div className="shrink-0">
    <ThemeToggle />
  </div>
</div>


      {/* divider with label */}
      <div className="flex items-center gap-3 my-6 text-sm text-neutral-500">
        <div className="h-px bg-neutral-300 flex-1" />
        recent posts
        <div className="h-px bg-neutral-300 flex-1" />
      </div>

      {/* Post list */}
      <div className="space-y-4">
        {posts.map((post) => {
          const formattedDate = new Date(post.date).toLocaleDateString(
            "en-US",
            {
              month: "short",
              day: "numeric",
              year: "numeric",
            }
          );

          return (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <div
  className="group rounded-xl p-5 transition hover:-translate-y-[2px] hover:shadow-sm border"
  style={{
    background: "var(--card)",
    borderColor: "var(--border)",
  }}
>

                <div className="flex justify-between items-start">
                  <h2 className="text-xl font-medium">
                    {post.title}
                    <span className="opacity-0 group-hover:opacity-100 transition ml-1">
                      →
                    </span>
                  </h2>
                </div>

                <p className="text-sm text-neutral-600 mt-[2px]"
                style={{ color: "var(--muted)" }}

                >
                  {formattedDate} • {post.readTime}
                </p>

                <p className="text-neutral-700 mt-2"
                style={{ color: "var(--muted)" }}

                >
                  {post.summary}
                </p>

              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
