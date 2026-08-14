import { createFileRoute } from "@tanstack/react-router";
import { Container, PageHeader, SectionRenderer } from "@/components/site/Page";
import type { Section } from "@/lib/site";

const title = "Cookie Policy — Eel Slap";
const description =
  "What this site stores in your browser and why. We use no advertising or tracking cookies; only a single local preference for your chosen theme.";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://eelslap.net/cookies" },
    ],
    links: [{ rel: "canonical", href: "/cookies" }],
  }),
  component: Cookies,
});

const SECTIONS: Section[] = [
  {
    paragraphs: [
      "Cookies and similar technologies store small amounts of data in your browser. This page lists everything this site stores. Last updated 14 August 2026.",
    ],
  },
  {
    heading: "What we store",
    table: {
      head: ["Name", "Type", "Purpose", "Duration"],
      rows: [
        [
          "eelslap-theme",
          "Local storage",
          "Remembers whether you chose the light or dark theme so the site does not flash the wrong one on your next visit.",
          "Until you clear site data",
        ],
      ],
    },
  },
  {
    heading: "What we do not use",
    bullets: [
      "No advertising cookies.",
      "No third-party analytics or tracking pixels.",
      "No cross-site profiling of any kind.",
      "No cookies are set before you interact with the theme control.",
    ],
  },
  {
    heading: "Why there is no cookie banner",
    paragraphs: [
      "Consent banners exist because sites place non-essential tracking. We place none, and the single theme preference is strictly functional and stored locally, so there is nothing to ask permission for. If that ever changes, a proper consent mechanism will appear before any new storage is used.",
    ],
  },
  {
    heading: "Managing storage",
    paragraphs: [
      "You can clear the theme preference at any time through your browser's 'clear site data' or privacy settings. The site will then follow your operating system's light or dark setting again. Nothing breaks if you remove it.",
    ],
  },
];

function Cookies() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Cookie policy"
        intro="A short page, because there is very little to declare."
        trail={[{ label: "Cookie policy" }]}
      />
      <Container className="py-14">
        <div className="max-w-3xl">
          <SectionRenderer sections={SECTIONS} />
        </div>
      </Container>
    </>
  );
}
