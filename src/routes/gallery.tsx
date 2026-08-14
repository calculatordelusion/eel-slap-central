import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/slap-portrait.jpg";
import eelImg from "@/assets/eel.png";
import heroBg from "@/assets/hero-ocean.jpg";
import EelSlap from "@/components/EelSlap";
import { AuthorBox, Container, PageHeader, RelatedLinks } from "@/components/site/Page";

const title = "Eel Slap Gallery — Frames, Assets and Visual Anatomy";
const description =
  "A visual breakdown of the Eel Slap animation: the frames, the swing arc and the ocean-inspired art direction used throughout this site.";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://eelslap.net/gallery" },
    ],
    links: [{ rel: "canonical", href: "https://eelslap.net/gallery" }],
  }),
  component: Gallery,
});

const FRAMES = [0, 0.2, 0.4, 0.55, 0.75, 1];

function Gallery() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="The anatomy of a slap"
        intro="Six key positions from the swing, the individual assets behind them, and notes on why each piece looks the way it does."
        trail={[{ label: "Gallery" }]}
      />
      <Container className="py-14">
        <h2 className="text-2xl font-bold">The original interaction</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
          The Eel Slap experience uses a high-performance canvas engine to map your cursor's horizontal movement to a 93-frame sequence of panoramas, creating the illusion of a fluid physical slap.
        </p>

        <div className="mt-8 max-w-2xl mx-auto animate-rise">
          <EelSlap />
          <p className="mt-4 text-center text-sm text-muted-foreground">
            Interact with the original Eel Slap animation above.
          </p>
        </div>

        <h2 className="mt-16 text-2xl font-bold">Visual style</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <figure className="overflow-hidden rounded-2xl border border-border bg-card">
            <img
              src={heroBg}
              alt="Ocean-inspired gradient artwork used across the site"
              loading="lazy"
              width={1920}
              height={1088}
              className="aspect-video w-full object-cover"
            />
            <figcaption className="p-4 text-sm text-muted-foreground">
              The art direction: deep navy, electric blue and aqua, with soft violet light for depth, reflecting the 'wet' nature of the eel slap meme.
            </figcaption>
          </figure>
          <div className="rounded-2xl border border-border bg-muted/30 p-8 flex flex-col justify-center">
            <h3 className="text-xl font-bold">Preserving the aesthetic</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Our design language bridges the gap between 2011's 'simple web' and modern high-end UX. We use glassmorphism, depth-focused gradients, and precise typography to ensure the focus remains on the animation itself.
            </p>
          </div>
        </div>

        <div className="mt-16 max-w-3xl">
          <AuthorBox />
        </div>

        <RelatedLinks
          links={[
            { label: "How it works", to: "/how-it-works", description: "What connects these frames technically." },
            { label: "Play Eel Slap", to: "/play", description: "See them in motion." },
            { label: "Fun facts", to: "/fun-facts", description: "Why the eel is photographed, not drawn." },
          ]}
        />
      </Container>
    </>
  );
}
