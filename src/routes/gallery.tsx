import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/slap-portrait.jpg";
import eelImg from "@/assets/eel.png";
import heroBg from "@/assets/hero-ocean.jpg";
import EelSlap from "@/components/EelSlap";
import { AuthorBox, Container, PageHeader, RelatedLinks } from "@/components/site/Page";

const title = "Eel Slap Gallery — Frames, Assets and Visual Anatomy";
const description =
  "A visual breakdown of the Eel Slap animation: the portrait, the eel asset, the swing arc and the ocean-inspired art direction used throughout this archive.";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
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
      </Container>

        <h2 className="mt-16 text-2xl font-bold">The assets</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <figure className="overflow-hidden rounded-2xl border border-border bg-card">
            <img
              src={portrait}
              alt="Illustrated portrait used as the base layer of the animation"
              loading="lazy"
              width={816}
              height={816}
              className="aspect-[4/3] w-full object-cover"
            />
            <figcaption className="p-4 text-sm text-muted-foreground">
              The base portrait. A neutral expression and centred framing keep attention on the eel.
            </figcaption>
          </figure>
          <figure className="overflow-hidden rounded-2xl border border-border bg-card">
            <div className="bg-gradient-hero grid aspect-[4/3] place-items-center p-6">
              <img
                src={eelImg}
                alt="The eel asset rendered against a gradient background"
                loading="lazy"
                width={1152}
                height={576}
                className="w-full"
              />
            </div>
            <figcaption className="p-4 text-sm text-muted-foreground">
              The eel, isolated with transparency so it can be rotated and translated independently.
            </figcaption>
          </figure>
          <figure className="overflow-hidden rounded-2xl border border-border bg-card">
            <img
              src={heroBg}
              alt="Ocean-inspired gradient artwork used across the site"
              loading="lazy"
              width={1920}
              height={1088}
              className="aspect-[4/3] w-full object-cover"
            />
            <figcaption className="p-4 text-sm text-muted-foreground">
              The art direction: deep navy, electric blue and aqua, with soft violet light for depth.
            </figcaption>
          </figure>
        </div>

        <div className="max-w-3xl">
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
