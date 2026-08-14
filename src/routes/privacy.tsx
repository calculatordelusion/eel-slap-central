import { createFileRoute } from "@tanstack/react-router";
import { Container, PageHeader, SectionRenderer } from "@/components/site/Page";
import type { Section } from "@/lib/site";

const title = "Privacy Policy — Eel Slap Archive";
const description =
  "How the Eel Slap Archive handles personal data: what we collect, why, how long we keep it, and the rights you have over it.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Privacy,
});

const SECTIONS: Section[] = [
  {
    paragraphs: [
      "This policy explains what happens to personal data when you use this website. It applies to every page on this domain. It does not apply to eelslap.com, eelslap.org or any other site we link to.",
    ],
  },
  {
    heading: "What we collect",
    bullets: [
      "Information you send us: the name, email address and message you type into the contact form, or the address you give to the newsletter form.",
      "Basic technical data your browser sends with every request, such as IP address, user agent and requested page. This is standard server logging.",
      "A theme preference stored in your browser's local storage so the site remembers light or dark mode. It never leaves your device.",
    ],
  },
  {
    heading: "What we do not collect",
    bullets: [
      "We do not track how you use the animation. Your slap count exists only in the open tab.",
      "We do not build advertising profiles or sell data to anyone.",
      "We do not require an account, so we hold no passwords.",
    ],
  },
  {
    heading: "Why we process it",
    paragraphs: [
      "Contact details are used to answer your message and nothing else. Newsletter addresses are used to send articles you asked for. Server logs are used to keep the site available and to investigate abuse or errors.",
    ],
  },
  {
    heading: "How long we keep it",
    paragraphs: [
      "Contact messages are kept for up to 24 months so we can follow up on corrections, then deleted. Newsletter addresses are kept until you unsubscribe. Server logs are rotated regularly.",
    ],
  },
  {
    heading: "Your rights",
    paragraphs: [
      "Depending on where you live, you may have the right to access, correct, delete or export the personal data we hold about you, to object to processing, and to complain to a data protection authority. Write to us through the contact page and we will act on the request.",
    ],
  },
  {
    heading: "Children",
    paragraphs: [
      "This site is suitable for general audiences, but it is not directed at children under 13 and we do not knowingly collect their personal data. If you believe a child has sent us information, contact us and we will remove it.",
    ],
  },
  {
    heading: "Changes",
    paragraphs: [
      "If this policy changes materially, the revised version will be published here with a new date. Continued use after that point means you accept the update. Last updated 14 August 2026.",
    ],
  },
];

function Privacy() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy policy"
        intro="Plain-language detail on what data this site handles and what happens to it. Last updated 14 August 2026."
        trail={[{ label: "Privacy policy" }]}
      />
      <Container className="py-14">
        <div className="max-w-3xl">
          <SectionRenderer sections={SECTIONS} />
        </div>
      </Container>
    </>
  );
}
