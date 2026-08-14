import { createFileRoute } from "@tanstack/react-router";
import { Container, PageHeader, QuickAnswer, RelatedLinks } from "@/components/site/Page";

const title = "Eel Slap Resources — Sources, Archives and Further Reading";
const description =
  "Where to research Eel Slap and early-web culture: web archives, preservation projects, meme documentation and reading on single-serving sites and Flash history.";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/resources" },
    ],
    links: [{ rel: "canonical", href: "/resources" }],
  }),
  component: Resources,
});

const GROUPS = [
  {
    heading: "Web preservation",
    items: [
      {
        name: "Internet Archive Wayback Machine",
        href: "https://web.archive.org/",
        note: "Snapshots of Eel Slap and its contemporaries going back to the early 2010s. The best primary source for how a page actually looked at a given date.",
      },
      {
        name: "Flashpoint (BlueMaxima)",
        href: "https://flashpointarchive.org/",
        note: "A large preservation project for Flash and other plugin-based web games. Essential context for what was lost in December 2020.",
      },
      {
        name: "Ruffle",
        href: "https://ruffle.rs/",
        note: "An open-source Flash Player emulator that runs in modern browsers, used by archives to keep old content playable.",
      },
    ],
  },
  {
    heading: "Meme and culture documentation",
    items: [
      {
        name: "Know Your Meme",
        href: "https://knowyourmeme.com/",
        note: "Community-maintained documentation of meme origins and spread. Useful as a starting point; verify claims against archived pages.",
      },
      {
        name: "Wikipedia: Single-serving site",
        href: "https://en.wikipedia.org/wiki/Single-serving_site",
        note: "A concise overview of the format Eel Slap belongs to, with references worth following.",
      },
    ],
  },
  {
    heading: "Technical reading",
    items: [
      {
        name: "MDN: Pointer events",
        href: "https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events",
        note: "The unified input model that makes mouse, touch and pen work through one code path.",
      },
      {
        name: "MDN: requestAnimationFrame",
        href: "https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame",
        note: "How to align updates with the display refresh so fast input does not queue redundant work.",
      },
      {
        name: "WCAG 2.2",
        href: "https://www.w3.org/TR/WCAG22/",
        note: "The accessibility guidelines this site follows, including reduced motion and keyboard operability.",
      },
    ],
  },
];

function Resources() {
  return (
    <>
      <PageHeader
        eyebrow="Resources"
        title="Sources and further reading"
        intro="Everything we consulted, plus the places to go if you want to research early-web culture yourself. External links open on their own sites and are not affiliated with this archive."
        trail={[{ label: "Resources" }]}
      />
      <Container className="py-14">
        <div className="max-w-3xl">
          <QuickAnswer label="How to verify old web claims">
            <p className="text-muted-foreground">
              Start with an archived snapshot rather than a secondary description. If a claim about a site's origin
              cannot be traced to an archived page or a first-hand account, treat it as folklore — a great deal of
              early-web history is repeated without a source.
            </p>
          </QuickAnswer>
        </div>

        <div className="mt-12 grid gap-8">
          {GROUPS.map((g) => (
            <section key={g.heading}>
              <h2 className="text-2xl font-bold">{g.heading}</h2>
              <ul className="mt-5 grid gap-4 md:grid-cols-3">
                {g.items.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block h-full rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:shadow-glow"
                    >
                      <span className="font-display font-semibold">{item.name}</span>
                      <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">{item.note}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <RelatedLinks
          links={[
            { label: "Editorial policy", to: "/editorial-policy", description: "How we research and fact-check." },
            { label: "History", to: "/history", description: "Our timeline, built from these sources." },
            { label: "Blog", to: "/blog", description: "Longer essays on the same subjects." },
          ]}
        />
      </Container>
    </>
  );
}
