import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const NAV = [
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/development", label: "Development" },
  { to: "/team", label: "Our Team" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const solid = !overlay || scrolled || open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          solid ? "border-b border-border bg-background/95 backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <div className="shell grid h-20 grid-cols-[minmax(0,1fr)_auto] items-center gap-6">
          <Link to="/" className="flex min-w-0 items-center" aria-label="DataStory at Berkeley — home">
            <img
              src="/images/datastory-logo.png"
              alt="DataStory at Berkeley"
              width={160}
              height={44}
              className={`h-7 w-auto shrink-0 md:h-8 ${solid ? "logo-forest" : "logo-cream"}`}
            />
          </Link>

          <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`link-underline text-[0.8125rem] font-medium uppercase tracking-[0.13em] transition-colors ${
                  solid ? "text-forest/75 hover:text-forest" : "text-cream/85 hover:text-cream"
                }`}
                activeProps={{ className: solid ? "text-forest" : "text-cream" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/apply"
              className={`px-6 py-3 text-[0.8125rem] font-medium uppercase tracking-[0.13em] transition-colors duration-300 ${
                solid ? "bg-forest text-cream hover:bg-forest-deep" : "bg-cream text-forest hover:bg-white"
              }`}
            >
              Apply
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className={`flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-[5px] lg:hidden ${
              solid ? "text-forest" : "text-cream"
            }`}
          >
            <span
              className={`h-px w-6 bg-current transition-transform duration-300 ${
                open ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-current transition-transform duration-300 ${
                open ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      <div
        id="mobile-nav"
        className={`fixed inset-0 z-40 bg-forest text-cream transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="shell flex h-full flex-col justify-center gap-2 pb-16" aria-label="Mobile">
          {[...NAV, { to: "/apply", label: "Apply" } as const].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="display-md border-b border-cream/15 py-4 text-cream"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {!overlay && <div aria-hidden="true" className="h-20" />}
    </>
  );
}
