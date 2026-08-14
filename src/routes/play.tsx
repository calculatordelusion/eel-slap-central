import { createFileRoute } from "@tanstack/react-router";
import EelSlap from "@/components/EelSlap";
import { AuthorBox, Container, PageHeader, QuickAnswer, RelatedLinks } from "@/components/site/Page";

const title = "Play Eel Slap — Interactive Eel Slap Animation (No Download)";
const description =
  "Play Eel Slap right here: move your cursor, swipe or use the arrow keys to swing the eel. Fast, touch-friendly, keyboard accessible and free — no plugins, no sign-up.";

export const Route = createFileRoute("/play")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/play" },
    ],
    links: [{ rel: "canonical", href: "/play" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Game",
          name: "Eel Slap",
          genre: "Browser toy",
          applicationCategory: "GameApplication",
          description,
          gamePlatform: "Web browser",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        }),
      },
    ],
  }),
  component: Play,
});

function Play() {
  return (
    <>
      <PageHeader
        eyebrow="Play"
        title="Play Eel Slap"
        intro="Move your pointer left and right across the image. The eel follows your timing exactly — creep for a slow-motion wind-up, or whip across for a full-speed slap."
        trail={[{ label: "Play" }]}
      />

      <Container className="py-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <EelSlap />

          <div className="space-y-6">
            <QuickAnswer label="How to play">
              <p className="text-muted-foreground">
                Drag your cursor horizontally over the embedded window. The timing of the slap is controlled by your mouse position. On a touch device, swipe across the window to initiate the animation.
              </p>
            </QuickAnswer>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-lg font-semibold">Controls</h2>
              <dl className="mt-4 grid gap-3 text-sm">
                {[
                  ["Mouse", "Move left and right over the frame"],
                  ["Touch", "Swipe across the image"],
                  ["Original Controls", "Move horizontally inside the window"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4 border-b border-border pb-2.5 last:border-0">
                    <dt className="font-medium">{k}</dt>
                    <dd className="text-right text-muted-foreground">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-lg font-semibold">Playing tips</h2>
              <ul className="prose-eel mt-3">
                <li>Stop the cursor at the halfway point for the best mid-air pose.</li>
                <li>Reverse direction repeatedly for a rapid double slap.</li>
                <li>Full-screen your browser first — a wider frame gives you finer control.</li>
                <li>Nothing is saved and nothing is sent anywhere. Close the tab and it is gone.</li>
              </ul>
            </div>
          </div>
        </div>

        <section className="prose-eel mt-16 max-w-3xl">
          <h2>Why this version exists</h2>
          <p>
            The original Eel Slap is a piece of web history. We have embedded it here directly so you can experience the authentic 2011 interaction as it was intended, alongside our comprehensive documentation and history.
          </p>
          <p>
            Our site serves as a definitive archive, preserving the legacy of this browser toy while providing the context, technical breakdowns, and cultural history that the original site leaves to the imagination.
          </p>
          <h2>Is it free?</h2>
          <p>
            Yes. There is no account, no paywall, no download and no tracking of your play session. It is a piece of internet history preserved for free.
          </p>
        </section>

        <AuthorBox />

        <RelatedLinks
          links={[
            { label: "How it works", to: "/how-it-works", description: "The engineering behind cursor-driven frames." },
            { label: "History", to: "/history", description: "Where the original came from and how it survived." },
            { label: "FAQ", to: "/faq", description: "Common questions about playing Eel Slap." },
          ]}
        />
      </Container>
    </>
  );
}
