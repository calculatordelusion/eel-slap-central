import { createFileRoute } from "@tanstack/react-router";
import { AuthorBox, Container, PageHeader, QuickAnswer, RelatedLinks, SectionRenderer } from "@/components/site/Page";
import type { Section } from "@/lib/site";

const title = "What Is Eel Slap? The Meme, the Site and the Slap Explained";
const description =
  "A clear definition of Eel Slap: what the site does, why it counts as a browser toy rather than a game, who is being slapped, and why the joke has lasted since 2011.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: title,
          description,
          datePublished: "2026-01-05",
          dateModified: "2026-08-14",
          author: { "@type": "Organization", name: "Eel Slap Archive" },
          publisher: { "@type": "Organization", name: "Eel Slap Archive" },
        }),
      },
    ],
  }),
  component: About,
});

const SECTIONS: Section[] = [
  {
    heading: "The definition",
    paragraphs: [
      "Eel Slap is a single-serving website: one page that does exactly one thing. That thing is swinging an eel into a man's face in response to your cursor. The animation is a sequence of photographs, and your horizontal pointer position picks which photograph is on screen.",
      "Because you drive the timing, the same short sequence can produce a lazy wind-up, a sudden crack, or a frantic back-and-forth flurry. The site never resets, never scores you and never ends.",
    ],
  },
  {
    heading: "Toy, not game",
    paragraphs: [
      "The distinction matters for how people describe it. A game has objectives, failure states and progression. Eel Slap has none of those. It belongs to the family of browser toys — interactions built for the pleasure of the interaction itself.",
      "That framing explains the odd session behaviour people report: they slap for thirty seconds, close the tab, and think about it again three years later.",
    ],
    bullets: [
      "No score, no timer, no win condition.",
      "No accounts, saves or settings.",
      "The whole experience is available in the first second.",
      "Replay value comes from control, not content.",
    ],
  },
  {
    heading: "Who is the man?",
    paragraphs: [
      "He is a model who posed for the sequence, not a celebrity or a found photograph. His anonymity is load-bearing: because you know nothing about him and he shows no distress, the loop reads as absurd rather than mean. Swap in a recognisable face and the joke changes completely.",
    ],
  },
  {
    heading: "Why an eel?",
    paragraphs: [
      "An eel is heavy, wet, faintly unpleasant and completely unexpected. It occupies a comic sweet spot: unusual enough to be surprising, physical enough to land with visible weight, and harmless enough that nobody feels bad watching it.",
      "Photographing a real one rather than animating a drawing is what gives the motion its convincing sag. That physical fidelity is why the loop stays funny past the first surprise.",
    ],
  },
  {
    heading: "How it differs from a video",
    table: {
      head: ["", "Eel Slap", "A video of the same thing"],
      rows: [
        ["Timing", "Set by you, frame by frame", "Fixed by the editor"],
        ["Replay", "Different every pass", "Identical every pass"],
        ["Load behaviour", "Instant after preload", "Buffering, autoplay rules"],
        ["Feeling", "You performed the slap", "You watched a slap"],
      ],
    },
  },
  {
    heading: "Where it sits in internet culture",
    paragraphs: [
      "Eel Slap arrived at the tail end of the era when a joke could be a website. Before feeds absorbed everything, people shared bare URLs and the click was the punchline. Its neighbours are spinning-object pages, one-word answer sites and ambient loops.",
      "Most of that neighbourhood is gone. Eel Slap survived because it was built out of the plainest possible materials — images and a little script — and therefore had nothing to break.",
    ],
  },
];

function About() {
  return (
    <>
      <PageHeader
        eyebrow="Explainer"
        title="What is Eel Slap?"
        intro="A plain-language explanation of the site, the mechanic and the joke — including the parts people usually get wrong."
        trail={[{ label: "What is Eel Slap?" }]}
      />
      <Container className="py-14">
        <div className="max-w-3xl">
          <QuickAnswer>
            <p className="text-muted-foreground">
              <strong className="text-foreground">Eel Slap</strong> is a single-serving website, first published in
              2011, where moving your mouse left and right slaps a man in the face with a real eel. It is a browser toy
              rather than a game: there is no score and no goal. It runs on preloaded photographs, not Flash, which is
              why it still works today.
            </p>
          </QuickAnswer>

          <div className="mt-10">
            <SectionRenderer sections={SECTIONS} />
          </div>

          <AuthorBox />
        </div>

        <RelatedLinks
          links={[
            { label: "History", to: "/history", description: "The 2011 origin and everything after it." },
            { label: "Play Eel Slap", to: "/play", description: "Try the interaction for yourself." },
            { label: "Fun facts", to: "/fun-facts", description: "Trivia most people never learn." },
          ]}
        />
      </Container>
    </>
  );
}
