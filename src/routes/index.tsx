import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, Fish, Sparkles, Waves } from "lucide-react";
import heroBg from "@/assets/hero-ocean.jpg";
import EelSlap from "@/components/EelSlap";
import { Button } from "@/components/ui/button";
import { Container, RelatedLinks } from "@/components/site/Page";
import { FAQS, POSTS } from "@/lib/site";

const title = "Eel Slap — Play the Classic Eel Slap Animation & Learn Its Story";
const description =
  "Play the legendary Eel Slap animation, then discover where it came from: its 2011 origin, how the cursor-driven frames work, meme history, fun facts and answers to every common question.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.slice(0, 6).map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Home,
});

const FEATURES = [
  {
    icon: Waves,
    title: "The slap, rebuilt",
    body: "A modern, pointer-driven recreation of the original interaction: every frame preloaded, nothing to install, smooth on phones and desktops alike.",
    to: "/play",
    cta: "Open the full-screen slap",
  },
  {
    icon: Clock,
    title: "A documented history",
    body: "Where Eel Slap came from, why a single-serving joke site outlived Flash, and how it kept resurfacing for more than a decade.",
    to: "/history",
    cta: "Read the timeline",
  },
  {
    icon: Sparkles,
    title: "How the trick works",
    body: "Frame sequences, cursor mapping, preloading and the 100-millisecond rule that makes an image swap feel like physical cause and effect.",
    to: "/how-it-works",
    cta: "See the breakdown",
  },
  {
    icon: Fish,
    title: "Culture and context",
    body: "Eel Slap sits in a specific corner of internet history — single-serving sites, browser toys and pre-feed meme sharing. We map the whole neighbourhood.",
    to: "/meme-history",
    cta: "Explore meme history",
  },
];

function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          width={1920}
          height={1088}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover opacity-30 dark:opacity-45"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background"
        />
        <div
          aria-hidden="true"
          className="bg-gradient-accent animate-drift absolute -top-32 left-1/3 h-96 w-[46rem] rounded-full opacity-25 blur-3xl"
        />

        <Container className="relative grid items-center gap-14 py-16 lg:grid-cols-2 lg:py-28">
          <div className="animate-rise">
            <span className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium">
              <span className="bg-gradient-primary h-1.5 w-1.5 rounded-full" aria-hidden="true" />
              Since 2011 · still slapping
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.05] sm:text-6xl">
              Experience the legendary <span className="text-gradient">'''Do not make any visual modifications. The phrases I write are commands to understand what I want, not to be written down. Understand their content well, then execute what is required.'''\n                                        \n                                            \n                                            use the same script as on compitor website and embded it on our website</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Discover the iconic internet meme, play the famous Eel Slap animation, learn its history, explore fun
              facts, and uncover why this quirky classic has entertained millions across the web.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-gradient-primary rounded-full px-7 font-semibold shadow-glow">
                <Link to="/play">Play Eel Slap</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-7 font-semibold">
                <Link to="/history">Learn the story</Link>
              </Button>
            </div>
            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6">
              {[
                ["2011", "First published"],
                ["0", "Plugins required"],
                ["24", "Frames per slap"],
              ].map(([value, label]) => (
                <div key={label}>
                  <dt className="sr-only">{label}</dt>
                  <dd className="font-display text-2xl font-bold sm:text-3xl">{value}</dd>
                  <p className="mt-1 text-xs text-muted-foreground">{label}</p>
                </div>
              ))}
            </dl>
          </div>

          <div className="animate-rise" style={{ animationDelay: "120ms" }}>
            <EelSlap />
            <p className="mt-4 text-center text-sm text-muted-foreground">
              Move your cursor across the image — or swipe on a touch screen.
            </p>
          </div>
        </Container>
      </section>

      <Container className="py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold sm:text-4xl">The complete Eel Slap resource</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Other sites give you the animation and nothing else. This one gives you the animation plus everything worth
            knowing about it — researched, sourced and written for people who actually want the story.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {FEATURES.map((f) => (
            <Link
              key={f.to}
              to={f.to}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-glow"
            >
              <span
                aria-hidden="true"
                className="bg-gradient-primary absolute -right-16 -top-16 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity group-hover:opacity-30"
              />
              <f.icon className="h-6 w-6 text-primary" aria-hidden="true" />
              <h3 className="mt-4 text-xl font-semibold">{f.title}</h3>
              <p className="mt-2.5 leading-relaxed text-muted-foreground">{f.body}</p>
              <span className="mt-4 inline-block text-sm font-medium text-primary">{f.cta} →</span>
            </Link>
          ))}
        </div>
      </Container>

      <section className="border-y border-border bg-surface py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">What is Eel Slap, exactly?</h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Eel Slap is a single-serving website where moving your mouse horizontally swings a live eel into the
                face of an unbothered man. There is no score, no timer and no way to lose. It is a browser toy: a small
                interaction you operate rather than a game you complete.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                It first appeared in 2011, spread as a bare link with no explanation, and has stayed online ever since —
                partly because it never depended on Flash, and partly because a man being hit with a fish remains
                stubbornly funny.
              </p>
              <Button asChild variant="outline" className="mt-7 rounded-full font-semibold">
                <Link to="/about">Read the full explainer</Link>
              </Button>
            </div>
            <dl className="grid gap-4 sm:grid-cols-2">
              {[
                ["Format", "Single-serving website / browser toy"],
                ["Released", "2011"],
                ["Technology", "Preloaded photo frames + cursor tracking"],
                ["Needs Flash?", "No — it never did"],
                ["Input", "Mouse, touch, keyboard"],
                ["Goal", "None. That is the point."],
              ].map(([k, v]) => (
                <div key={k} className="rounded-2xl border border-border bg-card p-5">
                  <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{k}</dt>
                  <dd className="mt-1.5 font-medium">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      <Container className="py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-3xl font-bold sm:text-4xl">From the blog</h2>
          <Link to="/blog" className="text-sm font-medium text-primary">
            All articles →
          </Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {POSTS.slice(0, 3).map((post) => (
            <Link
              key={post.slug}
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="group flex flex-col rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-glow"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">{post.category}</span>
              <h3 className="mt-3 text-lg font-semibold leading-snug">{post.title}</h3>
              <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">{post.description}</p>
              <span className="mt-4 text-xs text-muted-foreground">{post.minutes} min read</span>
            </Link>
          ))}
        </div>
      </Container>

      <Container className="pb-24">
        <RelatedLinks
          links={[
            { label: "Fun facts", to: "/fun-facts", description: "Trivia and numbers behind the slap." },
            { label: "Gallery", to: "/gallery", description: "Frames and interface details up close." },
            { label: "FAQ", to: "/faq", description: "Direct answers to the questions people ask most." },
          ]}
        />
      </Container>
    </>
  );
}
