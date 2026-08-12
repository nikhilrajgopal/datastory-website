import { createFileRoute, Link } from "@tanstack/react-router";

import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const SITE = "https://data-story-unified.lovable.app";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DataStory at Berkeley — Data Science & Software Consulting" },
      {
        name: "description",
        content:
          "DataStory is a student-led data science and software consulting organization at UC Berkeley, building community through real client work.",
      },
      { property: "og:title", content: "DataStory at Berkeley — Data Science & Software Consulting" },
      {
        property: "og:description",
        content:
          "A premier student-led organization at UC Berkeley delivering data science and software consulting for startups, non-profits, and corporations.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE}/` },
      { property: "og:image", content: `${SITE}/images/spring-26-fullclub.jpg` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `${SITE}/images/spring-26-fullclub.jpg` },
    ],
    links: [{ rel: "canonical", href: `${SITE}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "DataStory at Berkeley",
          url: SITE,
          logo: `${SITE}/images/datastory-logo.png`,
          email: "datastory.president@gmail.com",
          description:
            "A student-led data science and software consulting organization at UC Berkeley.",
          sameAs: [
            "https://www.linkedin.com/company/datastoryconsulting/",
            "https://www.instagram.com/datastoryberkeley/",
          ],
        }),
      },
    ],
  }),
  component: HomePage,
});


// Edit this list to update the majors marquee.
const MAJORS = [
  "Applied Mathematics",
  "Computational Biology",
  "Computer Science",
  "Cognitive Science",
  "Data Science",
  "Economics",
  "Electrical Engineering and Computer Science",
  "Engineering",
  "Environmental Economics and Policy",
  "Legal Studies",
  "Mathematics",
  "Molecular and Cell Biology",
  "Philosophy",
  "Political Economy",
  "Political Science",
  "Public Health",
  "Statistics",
];

const PARTNERS = [
  { src: "/images/Oracle-Logo.png", alt: "Oracle", hash: "oracle" },
  { src: "/images/unicef-logo-clean.png", alt: "UNICEF", hash: "unicef" },
  { src: "/images/Aflac-logo.png", alt: "Aflac", hash: "aflac" },
  { src: "/images/ea-logo.png", alt: "EA", hash: "ea-games" },
  { src: "/images/seagate-logo.png", alt: "Seagate", hash: "seagate" },
  { src: "/images/epri-logo.png", alt: "EPRI", hash: "epri" },
  { src: "/images/education-trust-logo-updated.png", alt: "The Education Trust", hash: "the-education-trust" },
  { src: "/images/farmlink-project-logo.png", alt: "The Farmlink Project", hash: "the-farmlink-project" },
  { src: "/images/good360-logo.png", alt: "Good360", hash: "good360" },
  { src: "/images/selector-logo.png", alt: "Selector", hash: "selector" },
];

const ALUMNI = [
  {
    name: "Ryan Chan",
    year: "Spring 2025",
    position: "Software Engineer at Meta",
    image: "/images/Ryan-chan-headshot.jpeg",
  },
  {
    name: "Hailey Holcomb",
    year: "Spring 2025",
    position: "Software Engineer at Walmart",
    image: "/images/hailey-holcomb-headshot.jpeg",
  },
  {
    name: "Iman Hundal",
    year: "Fall 2024",
    position: "Data Analyst at Capital One",
    image: "/images/iman-hundal-headshot.jpeg",
  },
  {
    name: "Victor Shi",
    year: "Spring 2025",
    position: "Software Engineer at Meta",
    image: "/images/victor-shi-headshot.png",
  },
  {
    name: "Iris Chao",
    year: "Spring 2025",
    position: "Marketing Analyst at Adobe",
    image: "/images/iris-chao-headshot.jpeg",
  },
];

function MarqueeRow({ reverse = false, duration }: { reverse?: boolean; duration: string }) {
  const items = [...MAJORS, ...MAJORS];
  return (
    <div className="overflow-hidden">
      <div
        className={`marquee-track ${reverse ? "marquee-track-reverse" : ""}`}
        style={{ animationDuration: duration }}
      >
        {items.map((major, i) => (
          <span
            key={`${major}-${i}`}
            className="flex shrink-0 items-center gap-4 whitespace-nowrap px-4 font-serif text-base text-cream/80 md:gap-8 md:px-8 md:text-2xl"
          >
            {major}
            <span aria-hidden="true" className="text-cream/30">
              ·
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

function LogoStrip() {
  const items = [...PARTNERS, ...PARTNERS];
  return (
    <div className="logo-marquee-mask overflow-hidden">
      <div className="marquee-track items-center" style={{ animationDuration: "50s" }}>
        {items.map((partner, i) => (
          <Link
            key={`${partner.alt}-${i}`}
            to="/projects"
            hash={partner.hash}
            aria-label={`See our work with ${partner.alt}`}
            className="flex h-16 shrink-0 items-center px-10 md:px-14"
          >
            <img
              src={partner.src}
              alt={`${partner.alt} logo`}
              className="logo-marquee-link max-h-9 w-auto object-contain md:max-h-10"
              loading="lazy"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}


function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader overlay />

      <main className="flex-1">
        <section className="relative h-[76svh] max-h-[660px] min-h-[460px] w-full overflow-hidden sm:h-[88vh] sm:max-h-none sm:min-h-[560px]">
          <img
            src="/images/spring-26-fullclub.jpg"
            alt="DataStory at Berkeley members gathered for the Spring 2026 full club photo"
            className="absolute inset-0 h-full w-full object-cover object-[50%_35%] sm:object-center"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-forest/55" />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-forest/80 to-transparent"
          />
          <div className="shell relative flex h-full flex-col justify-between pb-7 pt-24 sm:justify-end sm:pb-16 sm:pt-32 md:pb-24">
            <div className="mt-6 max-w-3xl sm:mt-0">
              <Reveal>
                <p className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-cream/80 sm:eyebrow">
                  UC Berkeley · Data Science &amp; Software Consulting
                </p>
              </Reveal>
              <Reveal delay={120}>
                <h1 className="mt-3 font-display text-[1.875rem] font-normal leading-[1.0] tracking-tight text-cream sm:mt-6 sm:text-[2.25rem] md:text-[2.75rem] lg:text-[3.5rem] xl:text-[4.5rem]">
                  Building Community
                  <br />
                  Through Data Science
                </h1>
              </Reveal>
            </div>
            <Reveal delay={240}>
              <div className="flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:gap-4">
                <Link
                  to="/projects"
                  className="group inline-flex w-full items-center justify-center gap-3 bg-cream px-4 py-2.5 text-[0.75rem] font-medium uppercase tracking-[0.12em] text-forest transition-colors duration-300 hover:bg-white sm:w-auto sm:justify-start sm:px-7 sm:py-3.5 sm:text-[0.8125rem] sm:tracking-[0.14em]"
                >
                  Explore our work
                  <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
                <Link
                  to="/apply"
                  className="group inline-flex w-full items-center justify-center gap-3 border border-cream/40 px-4 py-2.5 text-[0.75rem] font-medium uppercase tracking-[0.12em] text-cream transition-colors duration-300 hover:bg-cream hover:text-forest sm:w-auto sm:justify-start sm:px-7 sm:py-3.5 sm:text-[0.8125rem] sm:tracking-[0.14em]"
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


        <section className="section-y">
          <div className="shell grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <Reveal>
                <p className="eyebrow flex items-center gap-3 text-forest/60">
                  <span aria-hidden="true" className="h-px w-8 bg-forest/30" />
                  Who we are
                </p>
              </Reveal>
            </div>
            <div className="md:col-span-8">
              <Reveal>
                <h2 className="display-lg text-forest">A community built around data.</h2>
              </Reveal>
              <Reveal delay={120}>
                <p className="lede mt-8 max-w-2xl">
                  DataStory brings together Berkeley students from across disciplines to build real projects, learn from
                  one another, and form a community beyond the classroom.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <div className="mt-10">
                  <Link
                    to="/about"
                    className="link-underline text-[0.8125rem] font-medium uppercase tracking-[0.14em] text-forest"
                  >
                    More about DataStory →
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-forest py-10 text-cream md:py-20">
          <div className="shell">
            <Reveal>
              <h2 className="display-lg text-cream">18+ majors. One community.</h2>
            </Reveal>
          </div>
          <div className="mt-6 space-y-2 md:mt-10 md:space-y-3">
            <MarqueeRow duration="160s" />
            <MarqueeRow reverse duration="200s" />
          </div>
        </section>

        <section className="section-y">
          <div className="shell">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <Reveal>
                <p className="eyebrow flex items-center gap-3 text-forest/60">
                  <span aria-hidden="true" className="h-px w-8 bg-forest/30" />
                  Selected clients &amp; partners
                </p>
              </Reveal>
              <Reveal delay={80}>
                <Link
                  to="/projects"
                  className="link-underline text-[0.8125rem] font-medium uppercase tracking-[0.14em] text-forest"
                >
                  Explore our work →
                </Link>
              </Reveal>
            </div>
          </div>
          <div className="shell mt-14 md:mt-16">
            <div tabIndex={0} className="group grid gap-10 border border-border p-7 md:grid-cols-12 md:p-10">

            <Reveal className="md:col-span-3">
              <img
                src="/images/selector-logo.png"
                alt="Selector logo"
                className="logo-brand max-h-10 w-auto object-contain"
                loading="lazy"
              />
            </Reveal>
            <Reveal delay={100} className="md:col-span-9">
              <blockquote className="pull-quote text-forest">
                &ldquo;Over a four-month engagement, they assembled a highly capable team of eight
                student engineers who operated with remarkable professionalism&hellip; Overall, we
                give Team DataStory a strong thumbs-up.&rdquo;
              </blockquote>
              <p className="eyebrow mt-8 text-forest/60">
                Selector — AI-Powered Network Intelligence Platform
              </p>
              <Link
                to="/projects"
                className="link-underline mt-8 inline-block text-[0.8125rem] font-medium uppercase tracking-[0.14em] text-forest"
              >
                Read the full testimonial →
              </Link>
            </Reveal>
            </div>
          </div>
          <Reveal delay={80}>
            <div className="mt-16 md:mt-20">
              <LogoStrip />
            </div>
          </Reveal>
        </section>


        <section className="bg-cream-soft">
          <div className="shell py-20 md:py-28">
            <div className="grid gap-6 md:grid-cols-12 md:items-end">
              <div className="md:col-span-8">
                <Reveal>
                  <p className="eyebrow flex items-center gap-3 text-forest/60">
                    <span aria-hidden="true" className="h-px w-8 bg-forest/30" />
                    Alumni
                  </p>
                </Reveal>
                <Reveal delay={100}>
                  <h2 className="display-lg mt-6 text-forest">The community doesn&rsquo;t end at Berkeley.</h2>
                </Reveal>
              </div>
              <div className="md:col-span-4 md:text-right">
                <Reveal delay={160}>
                  <Link
                    to="/development"
                    className="link-underline text-[0.8125rem] font-medium uppercase tracking-[0.14em] text-forest"
                  >
                    Meet our alumni →
                  </Link>
                </Reveal>
              </div>
            </div>

            <div className="mt-16">
              <div className="-mx-6 overflow-x-auto px-6 no-scrollbar snap-x snap-mandatory lg:mx-0 lg:overflow-visible lg:px-0 lg:snap-none">
                <div className="flex w-max gap-3 sm:gap-6 lg:grid lg:w-auto lg:grid-cols-5 lg:gap-x-8 lg:gap-y-12">
                  {ALUMNI.map((person, i) => (
                    <Reveal
                      key={person.name}
                      delay={i * 60}
                      className="w-[148px] shrink-0 snap-start sm:w-[180px] lg:w-auto"
                    >
                      <div className="p-1">
                        <div className="img-zoom">
                          <img
                            src={person.image}
                            alt={person.name}
                            className="aspect-[4/5] w-full object-cover object-top"
                            loading="lazy"
                          />
                        </div>
                        <h3 className="mt-2 font-serif text-sm leading-tight text-forest sm:mt-5 sm:text-lg lg:text-2xl">
                          {person.name}
                        </h3>
                        <p className="eyebrow mt-1 text-forest/50 sm:mt-2">{person.year}</p>
                        <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:mt-3 sm:text-sm">
                          {person.position}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>


          </div>
        </section>

        <section className="section-y">
          <div className="shell">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-forest/60">
                <span aria-hidden="true" className="h-px w-8 bg-forest/30" />
                Community
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display-lg mt-6 max-w-4xl text-forest">More than the work.</h2>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <div className="img-zoom mt-12 w-full">
              <img
                src="/images/2026-community-pic.jpg"
                alt="DataStory members at a community event"
                className="aspect-[16/10] w-full object-cover object-center sm:aspect-auto sm:h-[52vh] sm:min-h-[320px] md:h-[64vh]"
                loading="lazy"
              />
            </div>
          </Reveal>
          <div className="shell mt-12 grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <Reveal>
                <p className="lede">Projects bring us together. The people make us stay.</p>
              </Reveal>
            </div>
            <div className="md:col-span-4 md:text-right">
              <Reveal delay={100}>
                <Link
                  to="/team"
                  className="link-underline text-[0.8125rem] font-medium uppercase tracking-[0.14em] text-forest"
                >
                  Meet the team →
                </Link>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-forest text-cream">
          <div className="shell py-20 md:py-28">
            <Reveal>
              <h2 className="display-xl max-w-4xl text-cream">Build with us.</h2>
            </Reveal>
            <div className="mt-12 flex flex-wrap items-center gap-4 border-t border-cream/20 pt-12">
              <Reveal>
                <Link
                  to="/apply"
                  className="group inline-flex items-center gap-3 bg-cream px-7 py-3.5 text-[0.8125rem] font-medium uppercase tracking-[0.14em] text-forest transition-colors duration-300 hover:bg-white"
                >
                  Join DataStory
                  <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </Reveal>
              <Reveal delay={100}>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 border border-cream/40 px-7 py-3.5 text-[0.8125rem] font-medium uppercase tracking-[0.14em] text-cream transition-colors duration-300 hover:bg-cream hover:text-forest"
                >
                  Work with DataStory
                  <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
