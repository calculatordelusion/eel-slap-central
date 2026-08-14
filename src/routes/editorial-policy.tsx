import { createFileRoute } from "@tanstack/react-router";
import { Container, PageHeader, RelatedLinks, SectionRenderer } from "@/components/site/Page";
import type { Section } from "@/lib/site";

const title = "Editorial & Fact-Checking Policy — Eel Slap Archive";
const description =
  "How the Eel Slap Archive researches, writes, reviews and corrects its content, including our sourcing standards, update schedule and independence statement.";

export const Route = createFileRoute("/editorial-policy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/editorial-policy" },
    ],
    links: [{ rel: "canonical", href: "/editorial-policy" }],
  }),
  component: EditorialPolicy,
});

const SECTIONS: Section[] = [
  {
    heading: "Who writes this site",
    paragraphs: [
      "The Eel Slap Archive is an independent project run by a small editorial team with backgrounds in web development and internet history. We are not affiliated with eelslap.com, eelslap.org or any mirror of the original site.",
    ],
  },
  {
    heading: "How we research",
    bullets: [
      "Primary sources first: archived snapshots of pages as they existed, and first-hand accounts where available.",
      "Secondary sources are used for context and always cross-checked before a claim is repeated.",
      "Where the record is genuinely uncertain, we say so in the text rather than picking the most entertaining version.",
      "Technical claims are verified by building the thing and testing it, not by quoting documentation alone.",
    ],
  },
  {
    heading: "What we will not publish",
    bullets: [
      "Invented statistics, view counts or dates presented as fact.",
      "Personal information about the model in the animation or anyone else involved.",
      "Content copied from other sites, rewritten or otherwise.",
      "Pages written to occupy a search result without saying anything useful.",
    ],
  },
  {
    heading: "Corrections",
    paragraphs: [
      "If something here is wrong, we want to fix it. Send the page, the claim and any source you have through the contact page. Substantive corrections are applied to the text and noted in the update date at the top of the article.",
    ],
  },
  {
    heading: "Review schedule",
    paragraphs: [
      "Every page carries a last-reviewed date. Reference pages are re-read at least twice a year; anything touching a live external site is checked more often, because link rot is the main way an archive quietly becomes wrong.",
    ],
  },
  {
    heading: "Advertising and independence",
    paragraphs: [
      "This site currently runs no advertising and takes no sponsorship. If that ever changes, commercial material will be clearly labelled and will have no influence on editorial content. We do not accept payment for links or coverage.",
    ],
  },
  {
    heading: "Use of AI tools",
    paragraphs: [
      "Automated tools may assist with drafting, formatting or checking. Every published sentence is reviewed and edited by a person, and factual claims are verified independently of any tool that suggested them.",
    ],
  },
];

function EditorialPolicy() {
  return (
    <>
      <PageHeader
        eyebrow="Trust"
        title="Editorial and fact-checking policy"
        intro="What we publish, how we verify it, and what we do when we get something wrong."
        trail={[{ label: "Editorial policy" }]}
      />
      <Container className="py-14">
        <div className="max-w-3xl">
          <SectionRenderer sections={SECTIONS} />
        </div>
        <RelatedLinks
          links={[
            { label: "Resources", to: "/resources", description: "The sources we rely on." },
            { label: "Contact", to: "/contact", description: "Send a correction." },
            { label: "Disclaimer", to: "/disclaimer", description: "Scope and limitations." },
          ]}
        />
      </Container>
    </>
  );
}
