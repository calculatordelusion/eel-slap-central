import { createFileRoute } from "@tanstack/react-router";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AuthorBox, Container, PageHeader, RelatedLinks } from "@/components/site/Page";
import { FAQS } from "@/lib/site";

const title = "Eel Slap FAQ — Original Eel Slap Game, Is It Safe? Who is the Man?";
const description =
  "Expert answers to Eel Slap game questions. Is Eel Slap safe? Who is the man being slapped? What is the eel's name? Get the definitive facts about the original slapping eel website.";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <PageHeader
        eyebrow="Answers"
        title="Eel Slap: frequently asked questions"
        intro="Short, direct answers to what people actually search for. Every answer is written to stand alone, so you can read just the one you came for."
        trail={[{ label: "FAQ" }]}
      />
      <Container className="py-14">
        <div className="max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-base font-semibold">{f.q}</AccordionTrigger>
                <AccordionContent className="text-[0.95rem] leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <section className="prose-eel mt-14">
            <h2>Still not answered?</h2>
            <p>
              We add questions to this page when they start appearing in search or in our inbox. If yours is missing,
              send it over and we will research it properly rather than guess.
            </p>
          </section>

          <AuthorBox />
        </div>

        <RelatedLinks
          links={[
            { label: "What is Eel Slap?", to: "/about", description: "The long-form explainer." },
            { label: "How it works", to: "/how-it-works", description: "The technical answer in detail." },
            { label: "Contact", to: "/contact", description: "Ask a question or send a correction." },
          ]}
        />
      </Container>
    </>
  );
}
