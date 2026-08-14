import { createFileRoute } from "@tanstack/react-router";
import { AuthorBox, Container, PageHeader, QuickAnswer, RelatedLinks, SectionRenderer } from "@/components/site/Page";
import type { Section } from "@/lib/site";

const title = "Internet Meme History: Eel Slap & The Slapping Eel Phenomenon";
const description =
  "How Eel Slap fits into the history of internet memes. Explore the evolution from email forwards to the slapping eel game and why interactive browser toys are a unique cultural artifact.";

export const Route = createFileRoute("/meme-history")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://eelslap.net/meme-history" },
    ],
    links: [{ rel: "canonical", href: "/meme-history" }],
  }),
  component: MemeHistory,
});

const SECTIONS: Section[] = [
  {
    heading: "Distribution decides the format",
    paragraphs: [
      "Every era of internet humour is shaped by how jokes travelled. Email produced forwards. Forums produced image macros. Feeds produced screenshots and short video. Nothing about human comedy changed; the pipe changed, and the pipe dictates what fits through it.",
      "Interactive jokes need a click. That was normal when links were the unit of sharing, and became a handicap the moment platforms started playing content automatically inside the scroll.",
    ],
  },
  {
    heading: "The eras",
    table: {
      head: ["Period", "How jokes moved", "Dominant format"],
      rows: [
        ["1996–2001", "Email chains, personal homepages", "Animated GIFs, forwarded text"],
        ["2001–2007", "Forums, image boards, Flash portals", "Image macros, Flash loops, prank links"],
        ["2007–2013", "Direct links, blogs, early social", "Single-serving sites, browser toys, viral video"],
        ["2013–2018", "Algorithmic feeds", "Reaction images, screenshots, remix templates"],
        ["2018–2026", "Short video, group chats", "Audio-led clips, in-jokes, revived classics"],
      ],
    },
  },
  {
    heading: "The interactive branch",
    paragraphs: [
      "Between roughly 2007 and 2013 there was a real strand of meme culture you operated rather than watched. Eel Slap belongs to it, alongside spinning-object pages, cursor toys, one-word answer sites and pages that existed to make a single sound.",
      "The branch thinned quickly. Feeds could not host interaction, mobile browsing made hover-based designs awkward, and domain renewals quietly lapsed. What remains is a small, well-loved catalogue.",
    ],
  },
  {
    heading: "Why unexplained links worked",
    bullets: [
      "The recipient's confusion is part of the joke, so context would spoil it.",
      "A domain name can carry the entire premise in three words.",
      "Clicking is an active choice, which makes the payoff feel earned.",
      "The sender gets to anticipate the reaction — a small social performance.",
    ],
  },
  {
    heading: "The revival cycle",
    paragraphs: [
      "Old links now come back on a schedule. A nostalgia video, a retro-web list or a single group chat is enough to restart circulation, and for younger viewers the material is genuinely new. Anything still online is eligible for this; anything that needed a plugin is not.",
      "That is the quiet advantage Eel Slap has over most of its contemporaries. It never needed rescuing, so it is always available to be rediscovered.",
    ],
  },
];

function MemeHistory() {
  return (
    <>
      <PageHeader
        eyebrow="Culture"
        title="Internet meme history and the Eel Slap era"
        intro="To understand why Eel Slap felt normal in 2011 and feels like an artefact now, you have to look at how internet jokes travelled before feeds took over."
        trail={[{ label: "Internet meme history" }]}
      />
      <Container className="py-14">
        <div className="max-w-3xl">
          <QuickAnswer>
            <p className="text-muted-foreground">
              Eel Slap comes from the 2007–2013 window when jokes were shared as unexplained links and could be
              interactive. Feeds later favoured content that plays itself, which ended the format — but the pages built
              from plain files, including this one, are still online.
            </p>
          </QuickAnswer>
          <SectionRenderer sections={SECTIONS} />
          <AuthorBox />
        </div>

        <RelatedLinks
          links={[
            {
              label: "Evolution of internet memes",
              to: "/blog/evolution-of-internet-memes",
              description: "The full timeline article.",
            },
            { label: "History of Eel Slap", to: "/history", description: "The site's own story." },
            {
              label: "Single-serving sites",
              to: "/blog/why-single-serving-sites-still-work",
              description: "Why the format endures.",
            },
          ]}
        />
      </Container>
    </>
  );
}
