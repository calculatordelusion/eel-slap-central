import { createFileRoute } from "@tanstack/react-router";
import { AuthorBox, Container, PageHeader, QuickAnswer, RelatedLinks, SectionRenderer } from "@/components/site/Page";
import type { Section } from "@/lib/site";

const title = "The History of Eel Slap — Origin, Timeline and Legacy";
const description =
  "How Eel Slap started in 2011, why a one-joke website spread without explanation, how it survived the death of Flash, and the revivals that keep bringing it back.";

export const Route = createFileRoute("/history")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/history" },
    ],
    links: [{ rel: "canonical", href: "/history" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: title,
          description,
          datePublished: "2026-01-12",
          dateModified: "2026-08-14",
          author: { "@type": "Organization", name: "Eel Slap Archive" },
          publisher: { "@type": "Organization", name: "Eel Slap Archive" },
        }),
      },
    ],
  }),
  component: History,
});

const TIMELINE = [
  {
    year: "2007–2010",
    title: "The single-serving era peaks",
    body: "One-page joke sites become a recognised format. A domain name states the premise, the page delivers it, and the link travels through email, forums and instant messenger.",
  },
  {
    year: "2011",
    title: "Eel Slap appears",
    body: "The site is published with no marketing and no explanation: a man, an eel, and a cursor. It is built from a photographed frame sequence rather than Flash — a decision that turns out to matter enormously.",
  },
  {
    year: "2011–2013",
    title: "Word-of-mouth spread",
    body: "It circulates as a bare URL. Aggregators, forum signatures and 'weird websites' lists pick it up. Because there is nothing to explain, sharing it costs one line of text.",
  },
  {
    year: "2014–2017",
    title: "Feeds change the rules",
    body: "Social platforms favour media that plays inside the feed. Link-based jokes lose ground, and much of the single-serving cohort quietly disappears as domains lapse.",
  },
  {
    year: "December 2020",
    title: "Flash is switched off",
    body: "Enormous swathes of 2000s browser culture stop working overnight. Eel Slap is unaffected: it was never a Flash project, so nothing changes for visitors.",
  },
  {
    year: "2021–2023",
    title: "Nostalgia revival",
    body: "Retro-web roundups, archive projects and 'old internet' videos reintroduce the site to an audience that was too young the first time. Mirrors and copies appear on alternative domains.",
  },
  {
    year: "2024–2026",
    title: "A stable classic",
    body: "Eel Slap settles into the small group of early-web pages that simply keep working. Search interest is steady rather than spiky — the signature of a reference point instead of a passing trend.",
  },
];

const SECTIONS: Section[] = [
  {
    heading: "The conditions that made it possible",
    paragraphs: [
      "By 2011 three things were true at once: broadband made loading a couple of dozen photographs instant, domains were cheap enough to buy for a single joke, and people still shared links directly instead of posting into a feed. Eel Slap is a product of that specific window.",
      "It is also a product of restraint. The same idea in 2011 could easily have shipped as a Flash movie with a soundtrack and a high-score table. Building it out of still images instead is the reason we can still write about it in the present tense.",
    ],
  },
  {
    heading: "Why it did not die with Flash",
    paragraphs: [
      "When Adobe ended Flash Player support at the end of 2020, browsers stopped running embedded Flash content entirely. Thousands of games and animations from the same cultural moment became unplayable without emulation.",
      "Eel Slap's frame-swapping approach needed nothing but the browser's own image handling. There was no plugin to deprecate and no runtime to abandon. This is the clearest lesson the site offers anyone building for the long term: the fewer dependencies you take, the longer your work lasts.",
    ],
  },
  {
    heading: "Copies, mirrors and confusion",
    paragraphs: [
      "As with most durable joke sites, Eel Slap acquired imitators on adjacent domains. Some are faithful mirrors, some add advertising, some rebuild the effect from scratch. This is why searches for the site return several near-identical results.",
      "For readers, the practical point is that the interaction is essentially the same everywhere; what differs is how much clutter surrounds it. This archive is not affiliated with any of those domains.",
    ],
  },
  {
    heading: "Its place in web history",
    paragraphs: [
      "Eel Slap will never appear in a list of technically important websites. Its significance is cultural: it is a working, unmodified example of how the web was funny before feeds, when a joke could be an address you typed and a payoff you controlled with your hand.",
      "Preservation efforts tend to focus on games and art. Toys like this one deserve the same attention, because they document how ordinary people actually used the browser for fun.",
    ],
  },
];

function History() {
  return (
    <>
      <PageHeader
        eyebrow="History"
        title="The history of Eel Slap"
        intro="From a 2011 one-joke website to a fixture of early-web nostalgia — the origin, the spread, and the technical decision that let it outlive its entire generation."
        trail={[{ label: "History" }]}
      />
      <Container className="py-14">
        <div className="max-w-3xl">
          <QuickAnswer>
            <p className="text-muted-foreground">
              Eel Slap was published in <strong className="text-foreground">2011</strong> as a single-serving joke
              website. It spread by word of mouth as an unexplained link, survived the 2020 shutdown of Flash because it
              was built from plain photographs, and returned to wider attention through the retro-web nostalgia wave of
              the early 2020s.
            </p>
          </QuickAnswer>

          <h2 className="mt-14 text-2xl font-bold">Timeline</h2>
          <ol className="mt-8 space-y-0">
            {TIMELINE.map((t, i) => (
              <li key={t.year} className="relative grid grid-cols-[auto_1fr] gap-5 pb-9">
                <div className="flex flex-col items-center">
                  <span className="bg-gradient-primary mt-1.5 h-3 w-3 shrink-0 rounded-full shadow-glow" />
                  {i < TIMELINE.length - 1 && <span className="mt-1 w-px flex-1 bg-border" aria-hidden="true" />}
                </div>
                <div className="rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-soft">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">{t.year}</p>
                  <h3 className="mt-1.5 text-lg font-semibold">{t.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{t.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <SectionRenderer sections={SECTIONS} />
          <AuthorBox />
        </div>

        <RelatedLinks
          links={[
            { label: "Internet meme history", to: "/meme-history", description: "The wider culture around the slap." },
            { label: "How it works", to: "/how-it-works", description: "The technique that kept it alive." },
            { label: "Resources", to: "/resources", description: "Sources and further reading." },
          ]}
        />
      </Container>
    </>
  );
}
