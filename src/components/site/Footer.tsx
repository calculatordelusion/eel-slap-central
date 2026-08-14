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
    <footer className="mt-32 border-t border-border/50 bg-background/50 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid grid-cols-2 gap-12 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="bg-gradient-primary flex h-10 w-10 items-center justify-center rounded-2xl shadow-glow">
                <span className="text-xl" aria-hidden="true">🐟</span>
              </span>
              <span className="font-display text-xl font-bold tracking-tight">Eel Slap</span>
            </Link>
            <p className="mt-6 max-w-xs text-[0.9375rem] leading-relaxed text-muted-foreground">
              The definitive, ad-free digital preservation project documenting the original 2011 internet phenomenon. Built for performance and historic accuracy.
            </p>
            <div className="mt-10">
              <h3 className="text-sm font-semibold text-foreground">Stay Updated</h3>
              <p className="mt-2 text-sm text-muted-foreground">Get notified when we publish new research or archive discoveries.</p>
              <form
                className="mt-4 flex max-w-sm gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  const value = email.trim();
                  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    toast.error("Please enter a valid email address.");
                    return;
                  }
                  setEmail("");
                  toast.success("Thanks! You're on the list for new archive updates.");
                }}
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <div className="relative flex-1">
                  <Input
                    id="newsletter-email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    placeholder="Enter your email"
                    value={email}
                    maxLength={120}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-10 rounded-xl bg-muted/50 border-border/50 focus:ring-primary/20"
                  />
                </div>
                <Button type="submit" size="sm" className="bg-gradient-primary rounded-xl px-5 font-semibold shadow-glow">
                  Join
                </Button>
              </form>
            </div>
          </div>

          {NAV.map((group) => (
            <div key={group.label} className="flex flex-col gap-6">
              <h3 className="text-sm font-semibold tracking-wider text-foreground uppercase">{group.label}</h3>
              <ul className="grid gap-4">
                {group.items.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="group flex items-center text-[0.9375rem] text-muted-foreground transition-all hover:text-primary"
                    >
                      <span className="h-px w-0 bg-primary transition-all group-hover:mr-2 group-hover:w-3" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 border-t border-border/50 pt-10">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="flex flex-col gap-2">
              <p className="text-sm text-muted-foreground">
                © {year} {SITE.publisher}. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground/60 max-w-md">
                Independent digital preservation project. All original assets are property of their respective owners. Not affiliated with eelslap.com or legacy mirrors.
              </p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              {FOOTER_LEGAL.map((item) => (
                <Link 
                  key={item.to} 
                  to={item.to} 
                  className="text-xs font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
