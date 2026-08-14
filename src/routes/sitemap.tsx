import { createFileRoute, Link } from "@tanstack/react-router";
import { Container, PageHeader } from "@/components/site/Page";
import { FOOTER_LEGAL, NAV, POSTS } from "@/lib/site";

const title = "Sitemap — Every Page on Eel Slap";
const description =
  "A complete, human-readable index of every page on Eel Slap: the game, explainers, history, culture, blog articles and legal pages.";

export const Route = createFileRoute("/sitemap")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://eelslap.net/sitemap" },
    ],
    links: [{ rel: "canonical", href: "https://eelslap.net/sitemap" }],
  }),
  component: Sitemap,
});

function Sitemap() {
  return (
    <>
      <PageHeader
        eyebrow="Index"
        title="HTML sitemap"
        intro="Every page on this site in one place, grouped the way the navigation is grouped."
        trail={[{ label: "Sitemap" }]}
      />
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <section>
            <h2 className="text-lg font-semibold">Main</h2>
            <ul className="mt-4 grid gap-2.5">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground">
                  Home
                </Link>
              </li>
            </ul>
          </section>

          {NAV.map((group) => (
            <section key={group.label}>
              <h2 className="text-lg font-semibold">{group.label}</h2>
              <ul className="mt-4 grid gap-2.5">
                {group.items.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className="text-muted-foreground hover:text-foreground">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <section>
            <h2 className="text-lg font-semibold">Blog articles</h2>
            <ul className="mt-4 grid gap-2.5">
              {POSTS.map((p) => (
                <li key={p.slug}>
                  <Link
                    to="/blog/$slug"
                    params={{ slug: p.slug }}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold">Legal &amp; trust</h2>
            <ul className="mt-4 grid gap-2.5">
              {FOOTER_LEGAL.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-muted-foreground hover:text-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/editorial-policy" className="text-muted-foreground hover:text-foreground">
                  Editorial policy
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </Container>
    </>
  );
}
