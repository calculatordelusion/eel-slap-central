import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Container, PageHeader, RelatedLinks } from "@/components/site/Page";

const title = "Contact the Eel Slap Archive — Corrections, Tips and Questions";
const description =
  "Get in touch with the Eel Slap Archive editorial team. Send a correction, suggest an article, report a broken link or ask a question about the site.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "Correction", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();
    if (name.length < 2) return toast.error("Please enter your name.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return toast.error("Please enter a valid email address.");
    if (message.length < 20) return toast.error("Please add a little more detail (at least 20 characters).");
    setForm({ name: "", email: "", subject: "Correction", message: "" });
    toast.success("Thanks — your message has been recorded. We reply to corrections first.");
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        intro="Corrections, missing questions, article suggestions and broken links all land in the same inbox. Corrections get answered first."
        trail={[{ label: "Contact" }]}
      />
      <Container className="py-14">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <form onSubmit={submit} className="rounded-3xl border border-border bg-card p-7 shadow-soft" noValidate>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="name">Your name</Label>
                <Input
                  id="name"
                  name="name"
                  autoComplete="name"
                  maxLength={80}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  maxLength={120}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="mt-5 grid gap-2">
              <Label htmlFor="subject">Reason for writing</Label>
              <select
                id="subject"
                name="subject"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="h-10 rounded-md border border-input bg-background px-3 text-sm"
              >
                {["Correction", "Article suggestion", "Broken link", "Press or research", "Something else"].map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>

            <div className="mt-5 grid gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                rows={6}
                maxLength={2000}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Include the page you're writing about and, for corrections, a source we can check."
                required
              />
              <p className="text-xs text-muted-foreground">{form.message.length}/2000 characters</p>
            </div>

            <Button type="submit" className="bg-gradient-primary mt-6 w-full rounded-full font-semibold sm:w-auto">
              Send message
            </Button>
          </form>

          <div className="space-y-5">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-lg font-semibold">What to expect</h2>
              <ul className="prose-eel mt-3">
                <li>Corrections: reviewed within a few days, with the page updated if the source checks out.</li>
                <li>Article suggestions: kept on a running list and worked through in order of usefulness.</li>
                <li>Broken links: fixed or replaced with an archived snapshot.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-lg font-semibold">What we can't help with</h2>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                We don't run eelslap.com or any mirror of it, so we can't change, remove or fix anything on those sites.
                We also don't share personal details about the model in the animation.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-lg font-semibold">Privacy</h2>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                Messages are used only to answer you. We don't add contact form addresses to the newsletter. See the{" "}
                <a href="/privacy" className="text-primary underline underline-offset-2">
                  privacy policy
                </a>{" "}
                for detail.
              </p>
            </div>
          </div>
        </div>

        <RelatedLinks
          links={[
            { label: "Editorial policy", to: "/editorial-policy", description: "How corrections are handled." },
            { label: "FAQ", to: "/faq", description: "Your question may already be answered." },
            { label: "Resources", to: "/resources", description: "Research it yourself." },
          ]}
        />
      </Container>
    </>
  );
}
