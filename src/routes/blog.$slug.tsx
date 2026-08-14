import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { AuthorBox, Container, PageHeader, SectionRenderer, slugify } from "@/components/site/Page";
import { getPost, POSTS } from "@/lib/site";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Article not found — Eel Slap" }, { name: "robots", content: "noindex" }] };
    }
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} — Eel Slap Game Archive` },
        { name: "description", content: post.description },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            dateModified: post.updated,
            articleSection: post.category,
            author: { "@type": "Organization", name: "Eel Slap" },
            publisher: { "@type": "Organization", name: "Eel Slap" },
            mainEntityOfPage: `/blog/${params.slug}`,
          }),
        },
      ],
    };
  },
  notFoundComponent: PostNotFound,
  component: PostPage,
});

function PostNotFound() {
  return (
    <Container className="py-24 text-center">
      <h1 className="text-3xl font-bold">We couldn't find that article</h1>
      <p className="mt-3 text-muted-foreground">It may have been renamed. The full list is still available.</p>
      <Link to="/blog" className="mt-6 inline-block font-medium text-primary">
        Browse all articles →
      </Link>
    </Container>
  );
}

function PostPage() {
  const { post } = Route.useLoaderData();
  const headings = post.body.filter((s) => s.heading).map((s) => s.heading!);
  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <PageHeader
        eyebrow={post.category}
        title={post.title}
        intro={post.description}
        trail={[{ label: "Blog", to: "/blog" }, { label: post.title }]}
      />
      <Container className="py-14">
        <div className="grid gap-12 lg:grid-cols-[1fr_16rem]">
          <article className="max-w-3xl">
            <p className="text-sm text-muted-foreground">
              Published {format(post.date)} · Updated {format(post.updated)} · {post.minutes} min read
            </p>
            <div className="mt-8">
              <SectionRenderer sections={post.body} />
            </div>
            <AuthorBox updated={format(post.updated)} />
          </article>

          {headings.length > 0 && (
            <nav aria-label="On this page" className="hidden lg:sticky lg:top-24 lg:block lg:self-start">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">On this page</h2>
              <ul className="mt-4 grid gap-2.5 border-l border-border pl-4">
                {headings.map((h) => (
                  <li key={h}>
                    <a href={`#${slugify(h)}`} className="text-sm text-muted-foreground hover:text-foreground">
                      {h}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>

        <section aria-labelledby="related-articles" className="mt-16">
          <h2 id="related-articles" className="text-2xl font-bold">
            Related articles
          </h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.slug}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:shadow-glow"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">{p.category}</span>
                <span className="mt-2 block font-semibold leading-snug">{p.title}</span>
                <span className="mt-2 block text-sm text-muted-foreground">{p.minutes} min read</span>
              </Link>
            ))}
          </div>
        </section>
      </Container>
    </>
  );
}

function format(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}
