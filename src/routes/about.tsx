import { createFileRoute, Link } from "@tanstack/react-router";

import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const SITE = "https://data-story-unified.lovable.app";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About DataStory at Berkeley — Vision, Impact, Evolution" },
      {
        name: "description",
        content:
          "DataStory empowers UC Berkeley students with the skills and experience to solve real-world problems through data science, software, and consulting.",
      },
      { property: "og:title", content: "About DataStory at Berkeley" },
      {
        property: "og:description",
        content:
          "Our vision, impact, and evolution — how DataStory builds consultants and delivers value for startups, non-profits, and corporations.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE}/about` },
      { property: "og:image", content: `${SITE}/images/new-mems-sitting-sp26.jpg` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `${SITE}/images/new-mems-sitting-sp26.jpg` },
    ],
    links: [{ rel: "canonical", href: `${SITE}/about` }],
  }),
  component: AboutPage,
});


const PILLARS = [
  {
    index: "01",
    title: "Vision",
    image: "/images/vision new.png",
    alt: "DataStory team members representing our vision",
    body: "DataStory was founded to empower students with the knowledge, skills, and practical experience necessary to tackle complex real-world challenges through the application of data science. We strive to foster a collaborative and inclusive environment that encourages innovation, professional growth, and societal impact, aiming to put our members on a successful path post-grad.",
  },
  {
    index: "02",
    title: "Impact",
    image: "/images/impact new.png",
    alt: "DataStory team members representing our impact",
    body: "Our projects are focused on creating value for startups, non-profits, and corporations in various fields, including data analytics, software development, machine learning, marketing, and more. We are experienced in tackling a wide range of data-related problems as well as providing solutions to help shape a company's future.",
  },
  {
    index: "03",
    title: "Evolution",
    image: "/images/evolution new.png",
    alt: "DataStory team members representing our evolution",
    body: "Through our Junior Consultant program, we help develop our new members' technical consulting skillset via weekly lessons on data science techniques and industry practices. Additionally, we host professional workshops, case competitions, speaker panels, and alumni events in order to provide our members with diverse opportunities to grow.",
  },
];

function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader overlay />

      <main className="flex-1">
        <section className="relative aspect-[4/3] min-h-[380px] w-full overflow-hidden sm:aspect-auto sm:h-[70vh] sm:min-h-[480px]">
          <img
            src="/images/new-mems-sitting-sp26.jpg"
            alt="DataStory Spring 2026 new members"
            className="absolute inset-0 h-full w-full object-cover object-[center_40%]"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-forest/55" />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-forest/80 to-transparent"
          />
          <div className="shell relative flex h-full flex-col justify-end pb-16 md:pb-24">
            <Reveal>
              <p className="eyebrow text-cream/80">Who we are</p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="display-xl mt-6 max-w-4xl text-cream">About DataStory</h1>
            </Reveal>
          </div>
        </section>

        <section className="section-y">
          <div className="shell grid gap-14 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-5">
              <Reveal>
                <p className="eyebrow flex items-center gap-3 text-forest/60">
                  <span aria-hidden="true" className="h-px w-8 bg-forest/30" />
                  Our story
                </p>
              </Reveal>
            </div>
            <div className="md:col-span-7">
              <Reveal>
                <h2 className="display-lg text-forest">
                  Vision, impact, and evolution — the three ways we grow.
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <p className="lede mt-8 max-w-2xl">
                  DataStory delivers top-notch consulting services in data science and software
                  development, giving members the experience to lead after graduation.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="rule-top">
          <div className="shell">
            {PILLARS.map((pillar, i) => (
              <Reveal key={pillar.title}>
                <article tabIndex={0} className="grid items-center gap-10 border-b border-border px-4 py-14 md:grid-cols-12 md:gap-14 md:px-6 md:py-20">

                  <span className="eyebrow text-forest/40 md:col-span-1">{pillar.index}</span>
                  <div className={`min-w-0 md:col-span-6 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                    <h3 className="display-md text-forest">{pillar.title}</h3>
                    <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
                      {pillar.body}
                    </p>
                  </div>
                  <div className={`img-zoom md:col-span-5 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                    <img
                      src={pillar.image}
                      alt={pillar.alt}
                      className="aspect-[4/3] w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="bg-cream-soft relative">
          <div aria-hidden="true" className="absolute inset-x-0 top-0 -mt-20 h-20 bg-gradient-to-b from-background to-cream-soft" />
          <div className="shell py-20 md:py-28">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-forest/60">
                <span aria-hidden="true" className="h-px w-8 bg-forest/30" />
                Where we work
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="display-lg mt-6 max-w-3xl text-forest">
                Our members go on to build at the world&apos;s best companies.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <img
                src="/images/comprehensive-company-logos.png"
                alt="Companies where DataStory members work including Amazon, Microsoft, Apple, Intel, Tesla, Meta, McKinsey, BlackRock, BCG, Coca-Cola, Adobe, Disney, Red Bull, AT&T, Salesforce, Walmart, ThermoFisher Scientific, DataDog, Rakuten, Atlassian, Chime, PwC, Scale, Visa, CrowdStrike, Accenture, Workday, EY, Coinbase, and Jefferies"
                className="mt-14 w-full object-contain"
                loading="lazy"
              />
            </Reveal>
          </div>
        </section>

        <section className="bg-forest text-cream">
          <div className="shell py-24 md:py-32">
            <Reveal>
              <h2 className="display-lg max-w-3xl text-cream">Work with us, or join us.</h2>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-12 flex flex-wrap gap-4">
                <Link
                  to="/projects"
                  className="group inline-flex items-center gap-3 bg-cream px-7 py-3.5 text-[0.8125rem] font-medium uppercase tracking-[0.14em] text-forest transition-colors duration-300 hover:bg-white"
                >
                  See our projects
                  <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
                <Link
                  to="/apply"
                  className="group inline-flex items-center gap-3 border border-cream/40 px-7 py-3.5 text-[0.8125rem] font-medium uppercase tracking-[0.14em] text-cream transition-colors duration-300 hover:bg-cream hover:text-forest"
                >
                  Join DataStory
                  <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
