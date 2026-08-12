import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Mail } from "lucide-react";

const LINKS = [
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/development", label: "Development" },
  { to: "/team", label: "Our Team" },
  { to: "/contact", label: "Contact" },
  { to: "/apply", label: "Apply Now" },
] as const;

export function SiteFooter() {
  return (
    <footer className="rule-top bg-background">
      <div className="shell py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="min-w-0 md:col-span-6">
            <img
              src="/images/datastory-logo.png"
              alt="DataStory at Berkeley"
              width={200}
              height={56}
              className="logo-forest h-9 w-auto"
            />
            <p className="mt-8 max-w-md text-sm leading-relaxed text-muted-foreground">
              We are a student group acting independently of the University of California. We take
              full responsibility for our organization and this website.
            </p>
          </div>

          <nav className="md:col-span-3" aria-label="Footer">
            <p className="eyebrow text-forest/50">General</p>
            <ul className="mt-6 space-y-3">
              {LINKS.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="link-underline text-sm text-forest/80 hover:text-forest">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <p className="eyebrow text-forest/50">Contact</p>
            <a
              href="mailto:datastory.president@gmail.com"
              className="link-underline mt-6 block text-sm text-forest/80 hover:text-forest"
            >
              datastory.president@gmail.com
            </a>
            <div className="mt-6 flex gap-5">
              <a
                href="mailto:datastory.president@gmail.com"
                aria-label="Email DataStory"
                className="text-forest/70 transition-colors hover:text-forest"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/datastoryconsulting/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DataStory on LinkedIn"
                className="text-forest/70 transition-colors hover:text-forest"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/datastoryberkeley/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DataStory on Instagram"
                className="text-forest/70 transition-colors hover:text-forest"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="rule-top mt-16 flex flex-col gap-2 pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} DataStory at Berkeley. All rights reserved.</p>
          <p>University of California, Berkeley</p>
        </div>
      </div>
    </footer>
  );
}
