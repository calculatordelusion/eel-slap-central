import { createFileRoute } from "@tanstack/react-router";
import { Container, PageHeader, SectionRenderer } from "@/components/site/Page";
import type { Section } from "@/lib/site";

const title = "Disclaimer — Eel Slap Archive";
const description =
  "Independence, accuracy and scope: what this Eel Slap resource is, what it is not, and how to read its historical claims.";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/disclaimer" },
    ],
    links: [{ rel: "canonical", href: "/disclaimer" }],
  }),
  component: Disclaimer,
});

const SECTIONS: Section[] = [
  {
    heading: "Independence",
    paragraphs: [
      "The Eel Slap Archive is an independent reference and commentary site. It is not affiliated with, endorsed by, or operated by eelslap.com, eelslap.org or any mirror. Names and trademarks referenced here belong to their respective owners and are used descriptively.",
    ],
  },
  {
    heading: "The recreation",
    paragraphs: [
      "The interactive slap on this site is our own recreation, built with original artwork to demonstrate how the mechanic works. It is not a copy of the original site's assets, and it may differ from the original in frame count, timing and appearance.",
    ],
  },
  {
    heading: "Accuracy of historical claims",
    paragraphs: [
      "Early-web history is patchy. Dates and origin stories are reconstructed from archived snapshots and secondary accounts, both of which can be incomplete. Where the record is unclear we say so rather than guess. If you can improve a claim with a source, please send it.",
    ],
  },
  {
    heading: "No professional advice",
    paragraphs: [
      "Technical explanations on this site are educational. They describe approaches that work well for small interactive components and are not a substitute for professional engineering, legal or accessibility advice for your own project.",
    ],
  },
  {
    heading: "External content",
    paragraphs: [
      "Links to other sites are provided for research. We are not responsible for their content or availability, and a link is not an endorsement.",
    ],
  },
];

function Disclaimer() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Disclaimer"
        intro="What this site is, what it isn't, and how to read what it says. Last updated 14 August 2026."
        trail={[{ label: "Disclaimer" }]}
      />
      <Container className="py-14">
        <div className="max-w-3xl">
          <SectionRenderer sections={SECTIONS} />
        </div>
      </Container>
    </>
  );
}
