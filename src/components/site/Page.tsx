import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import type { Section } from "@/lib/site";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 ${className}`}>{children}</div>;
}

export function Breadcrumbs({ trail }: { trail: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
        <li>
          <Link to="/" className="transition-colors hover:text-foreground">
            Home
          </Link>
        </li>
        {trail.map((c) => (
          <li key={c.label} className="flex items-center gap-1.5">
            <ChevronRight className="h-3 w-3" aria-hidden="true" />
            {c.to ? (
              <Link to={c.to} className="transition-colors hover:text-foreground">
                {c.label}
              </Link>
            ) : (
              <span className="text-foreground">{c.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
  trail,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  trail: { label: string; to?: string }[];
}) {
  return (
    <header className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden="true"
        className="bg-gradient-accent absolute -top-40 left-1/2 h-80 w-[52rem] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
      />
      <Container className="relative py-14 sm:py-20">
        <Breadcrumbs trail={trail} />
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">{intro}</p>
      </Container>
    </header>
  );
}

export function QuickAnswer({ children, label = "Quick answer" }: { children: ReactNode; label?: string }) {
  return (
    <aside className="glass rounded-2xl border-l-4 border-l-primary p-5 shadow-soft">
      <p className="text-xs font-semibold uppercase tracking-wider text-primary">{label}</p>
      <div className="mt-2 leading-relaxed">{children}</div>
    </aside>
  );
}

export function SectionRenderer({ sections }: { sections: Section[] }) {
  return (
    <div className="prose-eel">
      {sections.map((s, i) => (
        <section key={i}>
          {s.heading && <h2 id={slugify(s.heading)}>{s.heading}</h2>}
          {s.paragraphs?.map((p, j) => <p key={j}>{p}</p>)}
          {s.bullets && (
            <ul>
              {s.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          )}
          {s.table && (
            <div className="my-6 overflow-x-auto rounded-2xl border border-border">
              <table className="w-full text-left text-sm">
                <thead className="bg-secondary">
                  <tr>
                    {s.table.head.map((h) => (
                      <th key={h} scope="col" className="px-4 py-3 font-semibold">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {s.table.rows.map((row, j) => (
                    <tr key={j} className="border-t border-border">
                      {row.map((cell, k) => (
                        <td key={k} className="px-4 py-3 align-top text-muted-foreground">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      ))}
    </div>
  );
}

export function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function RelatedLinks({ links }: { links: { label: string; to: string; description: string }[] }) {
  return (
    <section aria-labelledby="related" className="mt-16">
      <h2 id="related" className="text-2xl font-bold">
        Keep exploring
      </h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className="group rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:shadow-glow"
          >
            <span className="font-display font-semibold">{l.label}</span>
            <span className="mt-1.5 block text-sm leading-relaxed text-muted-foreground">{l.description}</span>
            <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary">
              Read more
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function AuthorBox({ updated = "14 August 2026" }: { updated?: string }) {
  return (
    <div className="mt-14 flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 sm:flex-row sm:items-center">
      <div className="bg-gradient-accent grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-xl font-bold text-primary-foreground">
        ES
      </div>
      <div>
        <p className="font-display font-semibold">The Eel Slap Archive editorial team</p>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
          We research early-web culture and document how it was built. Every page cites its sources and is reviewed
          before publication. Last reviewed {updated}. Spotted an error?{" "}
          <Link to="/contact" className="text-primary underline underline-offset-2">
            Send a correction
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
