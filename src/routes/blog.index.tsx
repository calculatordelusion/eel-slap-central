import { createFileRoute, Link } from "@tanstack/react-router";
import { Container, PageHeader, RelatedLinks } from "@/components/site/Page";
import { POSTS } from "@/lib/site";

const title = "Eel Slap Blog — Internet Meme History, Web Toys & Archive News";
const description =
  "Official Eel Slap blog covering internet meme history, the slap website legacy, and the science of interactive browser toys. Deep dives into early web culture and preservation.";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Eel Slap Blog",
          description,
          blogPost: POSTS.map((p) => ({
            "@type": "BlogPosting",
            headline: p.title,
            description: p.description,
            datePublished: p.date,
            dateModified: p.updated,
          })),
        }),
      },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const categories = Array.from(new Set(POSTS.map((p) => p.category)));
  const featured = POSTS[0]!;
  const rest = POSTS.slice(1);

  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Writing about the small web"
        intro="Long-form articles on Eel Slap and the culture it came from: Flash portals, single-serving sites, meme distribution and the craft of building tiny interactive things."
        trail={[{ label: "Blog" }]}
      />
      <Container className="py-14">
        <ul className="flex flex-wrap gap-2" aria-label="Topics covered">
          {categories.map((c) => (
            <li key={c} className="rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium">
              {c}
            </li>
          ))}
        </ul>

        <Link
          to="/blog/$slug"
          params={{ slug: featured.slug }}
          className="group mt-10 grid gap-6 overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all hover:shadow-glow md:grid-cols-[1.4fr_1fr] md:items-center"
        >
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Featured · {featured.category}
            </span>
            <h2 className="mt-3 text-3xl font-bold leading-tight">{featured.title}</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{featured.description}</p>
            <p className="mt-5 text-xs text-muted-foreground">
              {formatDate(featured.date)} · {featured.minutes} min read
            </p>
          </div>
          <div
            aria-hidden="true"
            className="bg-gradient-hero hidden aspect-[4/3] place-items-center rounded-2xl text-6xl shadow-soft transition-transform group-hover:scale-[1.02] md:grid"
          >
            🐟
          </div>
        </Link>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <article key={post.slug} className="flex">
              <Link
                to="/blog/$slug"
                params={{ slug: post.slug }}
                className="group flex flex-1 flex-col rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-glow"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">{post.category}</span>
                <h2 className="mt-3 text-lg font-semibold leading-snug">{post.title}</h2>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">{post.description}</p>
                <p className="mt-5 text-xs text-muted-foreground">
                  {formatDate(post.date)} · {post.minutes} min read
                </p>
              </Link>
            </article>
          ))}
        </div>

        <RelatedLinks
          links={[
            { label: "Resources", to: "/resources", description: "Sources and further reading." },
            { label: "Editorial policy", to: "/editorial-policy", description: "How these articles are researched." },
            { label: "Play Eel Slap", to: "/play", description: "Take a break and slap something." },
          ]}
        />
      </Container>
    </>
  );
}

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}
