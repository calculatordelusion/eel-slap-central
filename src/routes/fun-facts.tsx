import { createFileRoute } from "@tanstack/react-router";
import { AuthorBox, Container, PageHeader, QuickAnswer, RelatedLinks } from "@/components/site/Page";

const title = "Eel Slap Fun Facts & Trivia — 15 Things Worth Knowing";
const description =
  "Fifteen genuinely interesting Eel Slap facts: why the eel is real, why the model is anonymous, how the site survived Flash, and what makes the loop stay funny.";

export const Route = createFileRoute("/fun-facts")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://eelslap.net/fun-facts" },
    ],
    links: [{ rel: "canonical", href: "https://eelslap.net/fun-facts" }],
  }),
  component: FunFacts,
});

const FACTS: { title: string; body: string; tag: string }[] = [
  {
    tag: "Technology",
    title: "It never used Flash",
    body: "Almost every browser oddity of its generation did. Eel Slap's photo-frame approach is the single reason it still opens today without emulation.",
  },
  {
    tag: "Production",
    title: "The eel is real",
    body: "Real footage gives the swing genuine weight and sag. An animated eel would move too cleanly and the joke would flatten.",
  },
  {
    tag: "Design",
    title: "You control the timing, not the outcome",
    body: "The eel always lands. What you choose is the rhythm — which is why the same short sequence produces dozens of different gags.",
  },
  {
    tag: "Design",
    title: "Anonymity is a design choice",
    body: "A nameless, unbothered face keeps the loop absurd. A recognisable person would turn it into commentary.",
  },
  {
    tag: "Format",
    title: "It is a toy, not a game",
    body: "No score, no timer, no failure state. Nothing to complete means nothing to abandon.",
  },
  {
    tag: "Performance",
    title: "Preloading is the entire product",
    body: "Every frame is decoded before you can interact. Skip that step and the interaction stops feeling like cause and effect.",
  },
  {
    tag: "Culture",
    title: "It spread with no explanation",
    body: "The standard share was a bare URL. Describing it in advance removes the surprise that makes it work.",
  },
  {
    tag: "Culture",
    title: "It outlived most of its neighbours",
    body: "The majority of the single-serving cohort went offline through lapsed domains or plugin deprecation. This one just kept renewing.",
  },
  {
    tag: "Perception",
    title: "Slow is funnier than fast",
    body: "Most people discover this within seconds: a creeping wind-up beats a rapid slap, because anticipation does the comic work.",
  },
  {
    tag: "Interface",
    title: "Wider windows give finer control",
    body: "Frame selection is proportional to container width, so a full-screen window spreads the same frames across more pixels.",
  },
  {
    tag: "Interface",
    title: "Touch changed the feel",
    body: "Swiping has momentum that a mouse does not, so phone slaps tend to be faster and less precise than desktop ones.",
  },
  {
    tag: "Accessibility",
    title: "Keyboard play is possible",
    body: "Mapping arrow keys to frame steps costs a few lines and makes the toy usable by people who cannot drag a pointer.",
  },
  {
    tag: "Search",
    title: "Interest is steady, not spiky",
    body: "Search demand behaves like a reference point rather than a trend — a flat baseline with occasional nostalgia bumps.",
  },
  {
    tag: "Copies",
    title: "Mirrors are common",
    body: "Multiple domains host near-identical versions, which is why searching the name returns several results that look the same.",
  },
  {
    tag: "Preservation",
    title: "Simplicity is the archive strategy",
    body: "Plain images and a little script have almost no failure modes. Boring technology is the most reliable form of preservation.",
  },
];

function FunFacts() {
  return (
    <>
      <PageHeader
        eyebrow="Trivia"
        title="Eel Slap fun facts"
        intro="Fifteen things worth knowing about the slap — covering production, design, culture and the engineering that keeps it alive."
        trail={[{ label: "Fun facts" }]}
      />
      <Container className="py-14">
        <QuickAnswer label="In one line">
          <p className="max-w-3xl text-muted-foreground">
            The eel is real, the man is deliberately anonymous, the site never used Flash, and you control the timing
            rather than the outcome — those four facts explain most of what makes Eel Slap work.
          </p>
        </QuickAnswer>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FACTS.map((f, i) => (
            <li
              key={f.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-glow"
            >
              <span
                aria-hidden="true"
                className="font-display absolute right-4 top-3 text-4xl font-bold text-muted opacity-60"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">{f.tag}</span>
              <h2 className="mt-2.5 max-w-[80%] text-lg font-semibold leading-snug">{f.title}</h2>
              <p className="mt-2 leading-relaxed text-muted-foreground">{f.body}</p>
            </li>
          ))}
        </ul>

        <div className="max-w-3xl">
          <AuthorBox />
        </div>

        <RelatedLinks
          links={[
            { label: "FAQ", to: "/faq", description: "Direct answers to common questions." },
            { label: "How it works", to: "/how-it-works", description: "The technical detail behind fact six." },
            { label: "Play Eel Slap", to: "/", description: "Test the slow-versus-fast theory yourself." },
          ]}
        />
      </Container>
    </>
  );
}
