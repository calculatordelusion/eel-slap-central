import { createFileRoute } from "@tanstack/react-router";
import { Container, PageHeader, SectionRenderer } from "@/components/site/Page";
import type { Section } from "@/lib/site";

const title = "Terms of Use — Eel Slap";
const description =
  "The terms that apply when you use the Eel Slap Archive: acceptable use, intellectual property, external links and limitation of liability.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://eelslap.net/terms" },
    ],
    links: [{ rel: "canonical", href: "https://eelslap.net/terms" }],
  }),
  component: Terms,
});

const SECTIONS: Section[] = [
  {
    paragraphs: [
      "By using this website you agree to these terms. If you do not agree with them, please stop using the site. Last updated 14 August 2026.",
    ],
  },
  {
    heading: "Acceptable use",
    bullets: [
      "Use the site for personal, non-commercial reading and play.",
      "Do not attempt to disrupt the service, probe it for vulnerabilities or overload it with automated requests.",
      "Do not scrape the content wholesale for republication.",
      "Do not submit unlawful, abusive or misleading material through our forms.",
    ],
  },
  {
    heading: "Intellectual property",
    paragraphs: [
      "The written articles, original illustrations, interface and code on this site belong to the Eel Slap Archive. You may quote short passages with a clear credit and a link back. Reproducing whole pages requires written permission.",
      "The original Eel Slap website and its assets belong to their respective owners. This archive is an independent commentary and reference resource; no affiliation or endorsement is claimed or implied.",
    ],
  },
  {
    heading: "External links",
    paragraphs: [
      "We link to third-party sites for research and context. We do not control them and are not responsible for their content, availability or policies. Following an external link is at your own discretion.",
    ],
  },
  {
    heading: "No warranty",
    paragraphs: [
      "The site is provided as-is. We work hard to keep it accurate and available, but we do not guarantee that it will be uninterrupted, error-free, or that every historical detail is complete. Content is provided for information and entertainment.",
    ],
  },
  {
    heading: "Limitation of liability",
    paragraphs: [
      "To the extent permitted by law, we are not liable for indirect or consequential loss arising from your use of this site or from reliance on its content. Nothing here excludes liability that cannot lawfully be excluded.",
    ],
  },
  {
    heading: "Changes to these terms",
    paragraphs: [
      "We may update these terms. The current version always lives on this page, with the date of the last change shown above.",
    ],
  },
];

function Terms() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms of use"
        intro="The rules for using this site, written to be read rather than skipped."
        trail={[{ label: "Terms of use" }]}
      />
      <Container className="py-14">
        <div className="max-w-3xl">
          <SectionRenderer sections={SECTIONS} />
        </div>
      </Container>
    </>
  );
}
