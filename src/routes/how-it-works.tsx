import { createFileRoute } from "@tanstack/react-router";
import EelSlap from "@/components/EelSlap";
import { AuthorBox, Container, PageHeader, QuickAnswer, RelatedLinks, SectionRenderer } from "@/components/site/Page";
import type { Section } from "@/lib/site";

const title = "How Eel Slap Works — Frame Sequences, Cursor Mapping & Preloading";
const description =
  "A technical breakdown of the Eel Slap animation: how pointer position selects a frame, why every image is preloaded, and how to build a cursor-driven animation that stays at 60fps.";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://eelslap.net/how-it-works" },
    ],
    links: [{ rel: "canonical", href: "https://eelslap.net/how-it-works" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "How a cursor-driven eel slap animation works",
          description,
          step: [
            { "@type": "HowToStep", name: "Capture a frame sequence", text: "Photograph the motion in evenly spaced steps." },
            { "@type": "HowToStep", name: "Preload every frame", text: "Decode all images before enabling interaction." },
            { "@type": "HowToStep", name: "Map pointer position to a frame", text: "Convert pointer X within the container to a frame index." },
            { "@type": "HowToStep", name: "Render inside one animation frame", text: "Apply the index in a requestAnimationFrame callback to avoid redundant work." },
          ],
        }),
      },
    ],
  }),
  component: HowItWorks,
});

const SECTIONS: Section[] = [
  {
    heading: "Step 1 — The frame sequence",
    paragraphs: [
      "The animation begins as a set of photographs taken at evenly spaced points through a single motion. Even spacing is essential: because the viewer scrubs through the sequence with their hand, any gap in the capture becomes a visible jump in the playback.",
      "Two dozen frames is enough. Beyond that you gain smoothness the eye barely registers while paying for it in bandwidth and memory.",
    ],
  },
  {
    heading: "Step 2 — Preloading",
    paragraphs: [
      "Every frame is fetched and decoded before the interaction becomes available. If a frame is requested mid-swipe, the browser has to go to the network or the decoder, and the illusion of physical cause and effect collapses into a stutter.",
      "The practical version of this rule: show a loading state, wait for all frames, then enable the control. A half-second wait at the start buys perfect responsiveness forever after.",
    ],
  },
  {
    heading: "Step 3 — Mapping pointer to frame",
    paragraphs: [
      "The container's bounding box converts an absolute pointer position into a ratio between 0 and 1. Multiply that ratio by the frame count and round, and you have the index to display. The mapping is linear, which is what makes the response feel honest — your hand moves an inch, the animation advances proportionally.",
    ],
    bullets: [
      "Use pointer events so mouse, touch and pen share one code path.",
      "Recalculate the bounding box on resize rather than caching it forever.",
      "Clamp the index so overshooting the edges parks on the first or last frame.",
    ],
  },
  {
    heading: "Step 4 — Rendering without jank",
    paragraphs: [
      "A fast swipe can fire pointer events more often than the screen refreshes. Store the latest value and apply it inside a single requestAnimationFrame callback, so the work happens once per painted frame instead of once per event.",
      "Prefer changes the compositor can handle on its own — transforms and opacity — over anything that forces layout. In our recreation the eel is one element moved with a transform, which keeps the whole interaction on the fast path.",
    ],
  },
  {
    heading: "The 100-millisecond rule",
    paragraphs: [
      "Interface research has long held that feedback arriving within roughly a tenth of a second feels instantaneous, and that the sense of having caused something disappears past that threshold. Cursor-driven animation lives entirely inside that budget.",
      "This is why preloading is not a nicety here. It is the whole product: the difference between operating an eel and waiting for one.",
    ],
  },
  {
    heading: "Accessibility considerations",
    bullets: [
      "Expose the control as a slider with a value, a maximum and a text description so screen readers can report progress.",
      "Support arrow keys, Home and End so the interaction does not require dragging.",
      "Respect reduced-motion preferences — the effect still works when animation is stepped rather than continuous.",
      "Never rely on hover alone; touch devices have no hover state.",
    ],
  },
  {
    heading: "Comparison of approaches",
    table: {
      head: ["Technique", "Feels instant?", "Survives long term?", "Notes"],
      rows: [
        ["Preloaded image frames", "Yes", "Yes", "The Eel Slap approach. Simple, durable, memory-hungry at scale."],
        ["Flash movie", "Yes (in its day)", "No", "Dead since December 2020 without emulation."],
        ["Video with scrubbing", "Sometimes", "Yes", "Seeking accuracy varies by codec and browser."],
        ["Canvas sprite sheet", "Yes", "Yes", "One request instead of many; more code to maintain."],
        ["CSS keyframe animation", "Yes", "Yes", "Smooth, but the user cannot control the timing."],
      ],
    },
  },
];

function HowItWorks() {
  return (
    <>
      <PageHeader
        eyebrow="Engineering"
        title="How Eel Slap works"
        intro="The mechanic is simple enough to explain in a sentence and fiddly enough to get wrong in five ways. Here is the full breakdown, including how our recreation is built."
        trail={[{ label: "How it works" }]}
      />
      <Container className="py-14">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="max-w-3xl">
            <QuickAnswer>
              <p className="text-muted-foreground">
                Eel Slap works by preloading a sequence of photographs and using your horizontal cursor position to
                choose which one is visible. There is no video and no plugin — just an index calculation and an image
                swap, applied once per screen refresh.
              </p>
            </QuickAnswer>
            <SectionRenderer sections={SECTIONS} />
            <AuthorBox />
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <EelSlap chrome={false} />
            <p className="mt-3 text-sm text-muted-foreground">
              Try it while you read — every principle on this page is applied in this component.
            </p>
          </aside>
        </div>

        <RelatedLinks
          links={[
            {
              label: "Preloading images guide",
              to: "/blog/preloading-images-for-instant-interaction",
              description: "A deeper engineering write-up.",
            },
            { label: "Play Eel Slap", to: "/play", description: "The full-size version." },
            { label: "Gallery", to: "/gallery", description: "See the frames laid out." },
          ]}
        />
      </Container>
    </>
  );
}
