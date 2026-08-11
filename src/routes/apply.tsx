import { createFileRoute } from "@tanstack/react-router";

import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const SITE = "https://data-story-unified.lovable.app";

const TIMELINE = [
  {
    date: "Wednesday, August 26",
    title: "Applications Open",
    description: "The application for the Fall 2026 semester is now live.",
    highlighted: false,
    href: undefined,
  },
  {
    date: "Friday, August 28",
    title: "Joint Infosession (URM Focus)",
    description: "An intro to DataStory centered on underrepresented-minority applicants.",
    highlighted: false,
    href: undefined,
  },
  {
    date: "Monday, August 31",
    title: "Main Infosession",
    description: "8–10 pm · Learn about the club, our projects, and the application process.",
    highlighted: false,
    href: undefined,
  },
  {
    date: "Wednesday, September 2",
    title: "Women's Night",
    description: "7–9 pm · A community evening for women and non-binary applicants.",
    highlighted: false,
    href: undefined,
  },
  {
    date: "Thursday, September 3",
    title: "Applications Close",
    description: "3 pm deadline to submit. Click here to apply when the link is available.",
    highlighted: true,
    href: "https://forms.gle/kG7JohsYbtfapJct5",
  },
];

export const Route = createFileRoute("/apply")({
  head: () => ({
    meta: [
      { title: "Apply — Join DataStory at Berkeley" },
      {
        name: "description",
        content:
          "Applications for DataStory at Berkeley are open for Fall 2026. Join us for infosessions, Women's Night, and submit your application by September 3.",
      },
      { property: "og:title", content: "Apply — Join DataStory at Berkeley" },
      {
        property: "og:description",
        content: "Fall 2026 applications open soon. Attend our infosessions and apply by September 3.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE}/apply` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE}/apply` }],
  }),
  component: ApplyPage,
});

function ApplyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />

      <main className="flex-1">
        <section className="bg-forest text-cream">
          <div className="shell pb-20 pt-36 md:pb-28 md:pt-44">
            <Reveal>
              <p className="eyebrow text-cream/70">Fall 2026 recruitment</p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="display-xl mt-6 max-w-4xl text-cream">Apply Now</h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="lede mt-8 max-w-2xl text-cream/75">
                Applications for the Fall 2026 semester open soon. Attend an infosession, meet the team, and submit your
                application by Thursday, September 3 at 3 pm.
              </p>
            </Reveal>
            <Reveal delay={280}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <a
                  href="#timeline"
                  className="group inline-flex w-full items-center justify-center gap-3 bg-cream px-7 py-3.5 text-[0.8125rem] font-medium uppercase tracking-[0.14em] text-forest transition-colors duration-300 hover:bg-white sm:w-auto"
                >
                  View timeline
                  <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
                <a
                  href="https://forms.gle/kG7JohsYbtfapJct5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex w-full items-center justify-center gap-3 border border-cream/40 px-7 py-3.5 text-[0.8125rem] font-medium uppercase tracking-[0.14em] text-cream transition-colors duration-300 hover:bg-cream hover:text-forest sm:w-auto"
                >
                  Apply now
                  <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="timeline" className="section-y bg-background">
          <div className="shell">
            <div className="max-w-3xl">
              <Reveal>
                <p className="eyebrow flex items-center gap-3 text-forest/60">
                  <span aria-hidden="true" className="h-px w-8 bg-forest/30" />
                  2026 recruitment timeline
                </p>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="display-md mt-4 text-forest">What to expect this semester</h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="lede mt-3 max-w-xl">
                  Five key dates from applications opening to the final deadline. Coffee chats and the main application
                  are linked below.
                </p>
              </Reveal>
            </div>

            <div className="relative mt-10 md:mt-14">
              {/* Vertical line */}
              <div
                className="absolute bottom-0 left-[1.125rem] top-0 w-px bg-forest/20 md:left-1/2"
                aria-hidden="true"
              />

              <div className="relative space-y-8 md:space-y-0">
                {TIMELINE.map((item, i) => {
                  const isEven = i % 2 === 0;
                  const content = (
                    <div
                      className={`timeline-card rounded-md p-4 transition-all duration-300 md:p-5 ${
                        item.highlighted
                          ? "group cursor-pointer bg-forest text-cream hover:-translate-y-1 hover:shadow-lg"
                          : "bg-cream-soft text-forest hover:-translate-y-1 hover:bg-cream"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p
                            className={`font-mono text-[0.625rem] font-medium uppercase tracking-[0.16em] ${
                              item.highlighted ? "text-cream/70" : "text-forest/60"
                            }`}
                          >
                            {item.date}
                          </p>
                          <h3 className="display-sm mt-1">{item.title}</h3>
                        </div>
                        {item.highlighted && (
                          <span
                            aria-hidden="true"
                            className="transition-transform duration-300 group-hover:translate-x-1"
                          >
                            →
                          </span>
                        )}
                      </div>
                      <p
                        className={`mt-2 text-sm leading-relaxed ${
                          item.highlighted ? "text-cream/80" : "text-foreground/80"
                        }`}
                      >
                        {item.description}
                      </p>
                    </div>
                  );

                  return (
                    <Reveal
                      key={item.title}
                      delay={i * 100}
                      className="relative md:grid md:grid-cols-2 md:gap-6 md:pb-8"
                    >
                      {/* Marker dot */}
                      <div
                        className={`absolute left-[1.125rem] top-5 z-10 h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 md:top-8 md:left-1/2 md:-translate-x-1/2 ${
                          item.highlighted ? "border-forest bg-cream" : "border-forest/40 bg-background"
                        }`}
                        aria-hidden="true"
                      />

                      {/* Card + spacer */}
                      <div className={`pl-8 md:pl-0 ${isEven ? "md:pr-8" : "md:col-start-2 md:pl-8"}`}>
                        {item.href ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-forest/40 focus-visible:ring-offset-2"
                          >
                            {content}
                          </a>
                        ) : (
                          <div>{content}</div>
                        )}
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="section-y">
          <div className="shell grid gap-14 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-4">
              <Reveal>
                <p className="eyebrow flex items-center gap-3 text-forest/60">
                  <span aria-hidden="true" className="h-px w-8 bg-forest/30" />
                  02 — Coffee chats
                </p>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="display-md mt-6 text-forest">Fall 2026 Coffee Chats</h2>
              </Reveal>
            </div>
            <div className="md:col-span-8">
              <Reveal delay={140}>
                <div className="border border-border bg-cream-soft p-2">
                  <iframe
                    src="https://airtable.com/embed/app86G4onTOGFdenR/shrSJzMPvExHQ4XZM?viewControls=on"
                    title="DataStory Application Form"
                    className="w-full border-0"
                    height={533}
                    style={{ background: "transparent" }}
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-cream-soft">
          <div className="shell grid gap-14 py-20 md:grid-cols-12 md:gap-16 md:py-28">
            <div className="md:col-span-4">
              <Reveal>
                <p className="eyebrow flex items-center gap-3 text-forest/60">
                  <span aria-hidden="true" className="h-px w-8 bg-forest/30" />
                  03 — Application
                </p>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="display-md mt-6 text-forest">Application Link</h2>
              </Reveal>
            </div>
            <div className="md:col-span-8">
              <Reveal delay={140}>
                <p className="lede italic">Fall 2026 applications are open. Submit by Thursday, September 3 at 3 pm.</p>
                <a
                  href="https://forms.gle/kG7JohsYbtfapJct5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-10 inline-flex items-center gap-3 bg-forest px-7 py-3.5 text-[0.8125rem] font-medium uppercase tracking-[0.14em] text-cream transition-colors duration-300 hover:bg-forest-deep"
                >
                  Click to Apply
                  <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
