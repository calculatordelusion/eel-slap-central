import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { FOOTER_LEGAL, NAV, SITE } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  const [email, setEmail] = useState("");
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <span className="bg-gradient-primary grid h-9 w-9 place-items-center rounded-xl">
                <span aria-hidden="true">🐟</span>
              </span>
              <span className="font-display text-lg font-bold">Eel Slap</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              An independent, ad-free archive documenting the Eel Slap phenomenon: the interactive animation, its
              history, and the wider culture of single-serving websites.
            </p>

            <form
              className="mt-6 flex max-w-sm gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                const value = email.trim();
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                  toast.error("Please enter a valid email address.");
                  return;
                }
                setEmail("");
                toast.success("Thanks! You're on the list for new articles.");
              }}
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <Input
                id="newsletter-email"
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={email}
                maxLength={120}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-full"
              />
              <Button type="submit" className="bg-gradient-primary rounded-full font-semibold">
                Subscribe
              </Button>
            </form>
          </div>

          {NAV.map((group) => (
            <nav key={group.label} aria-label={group.label}>
              <h2 className="text-sm font-semibold">{group.label}</h2>
              <ul className="mt-4 grid gap-2.5">
                {group.items.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {year} {SITE.publisher}. Independent reference site — not affiliated with eelslap.com.
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {FOOTER_LEGAL.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-xs text-muted-foreground transition-colors hover:text-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
