import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const SITE = "https://data-story-unified.lovable.app";

export const Route = createFileRoute("/development")({
  head: () => ({
    meta: [
      { title: "Professional Development — DataStory at Berkeley" },
      {
        name: "description",
        content:
          "How DataStory members grow: the Junior Consultant Program, workshops, case competitions, alumni panels, awards, and alumni spotlights.",
      },
      { property: "og:title", content: "Professional Development — DataStory at Berkeley" },
      {
        property: "og:description",
        content:
          "The Junior Consultant Program, workshops, competitions, and panels that develop DataStory consultants.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE}/development` },
      { property: "og:image", content: `${SITE}/images/sp26-walking.jpg` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `${SITE}/images/sp26-walking.jpg` },
    ],
    links: [{ rel: "canonical", href: `${SITE}/development` }],
  }),
  component: DevelopmentPage,
});


const JCP_IMAGES = [
  {
    src: "/images/fall 2025 jcp projects/casey-jcp.jpeg",
    alt: "Casey presenting a Fall 2025 Junior Consultant Program final project at the semester showcase",
  },
  {
    src: "/images/fall 2025 jcp projects/cole-alex-jcp.jpeg",
    alt: "Cole and Alex presenting their Fall 2025 Junior Consultant Program final project",
  },
  {
    src: "/images/fall 2025 jcp projects/diya-cathryn-jcp.jpeg",
    alt: "Diya and Cathryn presenting their Fall 2025 Junior Consultant Program final project",
  },
  {
    src: "/images/fall 2025 jcp projects/jayden-paulo-jcp.jpeg",
    alt: "Jayden and Paulo presenting their Fall 2025 Junior Consultant Program final project",
  },
  {
    src: "/images/fall 2025 jcp projects/kira-chiara-jcp.jpeg",
    alt: "Kira and Chiara presenting their Fall 2025 Junior Consultant Program final project",
  },
  {
    src: "/images/fall 2025 jcp projects/krishna-rohan-jcp.jpeg",
    alt: "Krishna and Rohan presenting their Fall 2025 Junior Consultant Program final project",
  },
];


const PROGRAMS = [
  {
    index: "01",
    title: "Workshops",
    body: "DataStory emphasizes the development of both technical and behavioral skills. Our Professional Development team offers interactive and comprehensive workshops throughout the semester; some club favorites include peer resume reviews and cross-validation labs.",
    image: "/images/workshop-classroom-scene.png",
    alt: "Workshop classroom scene with students and presentation",
  },
  {
    index: "02",
    title: "Competitions",
    body: "We believe that diverse, real-life experiences are invaluable for expanding professional capabilities. We form teams to participate in premier case and analytics competitions nationwide, enabling our members to compete against and learn from the best.",
    image: "/images/competition-team-mascot.png",
    alt: "DataStory competition team with Cal Hacks mascot at Berkeley hackathon",
  },
  {
    index: "03",
    title: "Panels",
    body: "We take pride in our highly successful and engaged DataStory alumni network. Our speaker events and alumni mentorship program provide our members with many opportunities to gain insight from industry professionals.",
    image: "/images/alumni-panel-discussion.jpeg",
    alt: "Alumni panel discussion with current students and alumni in classroom setting",
  },
];

const AWARDS = [
  { logo: "/images/kearney-logo.png", alt: "Kearney Logo", place: "1st Place", title: "2023 Kearney Case Competition", raw: false },
  {
    logo: "/images/milwaukee-bucks-logo-knockout.svg",
    raw: true,
    alt: "Milwaukee Bucks logo",
    place: "2nd Place",
    title: "2023 Milwaukee Bucks Analytics Competition",
  },
  { logo: "/images/paravel-logo.png", alt: "Paravel Logo", place: "2nd Place", title: "2024 Paravel Case Competition", raw: false },
];

const ALUMNI = [
  {
    name: "RYAN CHAN",
    graduatingClass: "Spring 2025",
    position: "Software Engineer at Meta",
    location: "Menlo Park, CA",
    impact:
      "DataStory helped me improve my professional career tremendously. I remember for my first internship half their behavioral interview questions were about my experiences at DataStory. I learned a lot of professional advice and got tons of hands on experience from a variety of consulting projects.",
    image: "/images/Ryan-chan-headshot.jpeg",
  },
  {
    name: "HAILEY HOLCOMB",
    graduatingClass: "Spring 2025",
    position: "Software Engineer at Walmart",
    location: "San Francisco, CA",
    impact:
      "Working on a project at school that affects more than just your personal grade is super rewarding! Doing work for DataStory is challenging in unique ways and teaches you skills that you could never learn in a class environment.",
    image: "/images/hailey-holcomb-headshot.jpeg",
  },
  {
    name: "IMAN HUNDAL",
    graduatingClass: "Fall 2024",
    position: "Data Analyst at Capital One",
    location: "Washington D.C.",
    impact:
      "The network of friends and connections I've built in many diverse fields within tech has been very useful and will be a great resource in the future!",
    image: "/images/iman-hundal-headshot.jpeg",
  },
  {
    name: "VICTOR SHI",
    graduatingClass: "Spring 2025",
    position: "Software Engineer at Meta",
    location: "Seattle, WA",
    impact:
      "DataStory helped a lot early in my career to add value to resume through project managing, being on projects, etc. Social events were a lot of fun.",
    image: "/images/victor-shi-headshot.png",
  },
  {
    name: "IRIS CHAO",
    graduatingClass: "Spring 2025",
    position: "Marketing Analyst at Adobe",
    location: "San Francisco, CA",
    impact:
      "DataStory showed me the positive impact that people can have on your professional and personal life. It was so motivating to be surrounded by the smartest, most talented people who push each other to achieve our academic and professional goals.",
    image: "/images/iris-chao-headshot.jpeg",
  },
];

function DevelopmentPage() {
  const [slide, setSlide] = useState(0);
  const [alum, setAlum] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [slidePaused, setSlidePaused] = useState(false);
  const [alumPaused, setAlumPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (slidePaused || reduceMotion) return;
    const id = setInterval(() => setSlide((s) => (s + 1) % JCP_IMAGES.length), 7000);
    return () => clearInterval(id);
  }, [slidePaused, reduceMotion]);

  useEffect(() => {
    if (alumPaused || reduceMotion) return;
    const id = setInterval(() => setAlum((a) => (a + 1) % ALUMNI.length), 12000);
    return () => clearInterval(id);
  }, [alumPaused, reduceMotion]);


  const person = ALUMNI[alum] ?? ALUMNI[0]!;

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader overlay />

      <main className="flex-1">
        <section className="relative aspect-[4/3] min-h-[380px] w-full overflow-hidden sm:aspect-auto sm:h-[72vh] sm:min-h-[480px]">
          <img
            src="/images/sp26-walking.jpg"
            alt="DataStory Spring 2026 members walking - How We Grow"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-forest/55" />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-forest/80 to-transparent"
          />
          <div className="shell relative flex h-full flex-col justify-end pb-16 md:pb-24">
            <Reveal>
              <p className="eyebrow text-cream/80">How we grow</p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="display-xl mt-6 max-w-4xl text-cream">Development</h1>
            </Reveal>
          </div>
        </section>

        <section className="section-y">
          <div className="shell">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-forest/60">
                <span aria-hidden="true" className="h-px w-8 bg-forest/30" />
                Junior Consultant Program
              </p>
            </Reveal>
            <div className="mt-14 grid gap-14 md:grid-cols-12 md:gap-16">
              <div className="min-w-0 md:col-span-6">
                <Reveal>
                  <h2 className="display-md text-forest">What is JCP?</h2>
                </Reveal>
                <Reveal delay={100}>
                  <p className="lede mt-8">
                    The Junior Consultant Program (JCP) is a semester-long training and mentorship
                    program designed for members with limited prior experience in data science or
                    consulting. Participants develop core technical and professional skills through
                    weekly workshops covering topics such as pandas, data cleaning, visualization,
                    modeling, and applied tools like Streamlit.
                  </p>
                </Reveal>
                {expanded && (
                  <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
                    Junior Consultants also complete a final project of their choice, applying these
                    skills end-to-end and presenting their work at the semester Project Showcase. The
                    program serves as a structured pathway into the club&apos;s consulting teams, with
                    most members completing one semester in JCP before transitioning into full
                    consultant roles.
                  </p>
                )}
                <Reveal delay={160}>
                  <div className="mt-10 flex flex-wrap items-center gap-8">
                    <button
                      type="button"
                      onClick={() => setExpanded((v) => !v)}
                      className="link-underline text-[0.8125rem] font-medium uppercase tracking-[0.14em] text-forest"
                    >
                      {expanded ? "Read less" : "Read more"}
                    </button>
                    <a
                      href="/images/JCP flyers.png"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline text-[0.8125rem] font-medium uppercase tracking-[0.14em] text-forest"
                    >
                      See JCP flyer →
                    </a>
                  </div>
                </Reveal>
              </div>

              <div className="min-w-0 md:col-span-6">
                <Reveal delay={80}>
                  <p className="eyebrow text-forest/50">Past JCP projects</p>
                  <div className="img-zoom relative mt-6 h-[300px] w-full md:h-[420px]">
                    {JCP_IMAGES.map((item, i) => (
                      <img
                        key={item.src}
                        src={item.src}
                        alt={item.alt}
                        loading="lazy"
                        aria-hidden={i === slide ? undefined : true}
                        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                          i === slide ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3 sm:gap-6">
                    <div className="flex flex-wrap gap-2 sm:gap-3">

                      {JCP_IMAGES.map((item, i) => (
                        <button
                          key={item.src}
                          type="button"
                          onClick={() => setSlide(i)}
                          aria-label={`Show JCP project ${i + 1} of ${JCP_IMAGES.length}`}
                          aria-current={i === slide}
                          className={`h-4 w-10 border-y-[7px] border-transparent bg-clip-content transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-forest/50 ${
                            i === slide ? "bg-forest" : "bg-forest/25"
                          }`}
                        />
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={() => setSlidePaused((v) => !v)}
                      aria-pressed={slidePaused}
                      className="link-underline text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-forest/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-forest/50"
                    >
                      {slidePaused ? "Play" : "Pause"}
                    </button>
                  </div>

                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <section className="rule-top">
          <div className="shell">
            {PROGRAMS.map((program, i) => (
              <Reveal key={program.title}>
                <article tabIndex={0} className="card-quiet group grid items-center gap-10 border-b border-border px-4 py-14 md:grid-cols-12 md:gap-14 md:px-6 md:py-20">

                  <span className="eyebrow text-forest/40 md:col-span-1">{program.index}</span>
                  <div className={`min-w-0 md:col-span-6 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                    <h2 className="display-md text-forest">{program.title}</h2>
                    <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
                      {program.body}
                    </p>
                  </div>
                  <div className={`img-zoom md:col-span-5 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                    <img
                      src={program.image}
                      alt={program.alt}
                      className="aspect-[4/3] w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="bg-forest text-cream">
          <div className="shell py-20 md:py-28">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-cream/70">
                <span aria-hidden="true" className="h-px w-8 bg-cream/40" />
                Awards
              </p>
            </Reveal>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {AWARDS.map((award, i) => (
                <Reveal key={award.title} delay={i * 80}>
                  <article tabIndex={0} className="card-quiet-dark group flex h-full flex-col border border-cream/20 p-7 md:p-8">

                    <div className="flex h-20 items-center sm:w-fit">
                      <img
                        src={award.logo}
                        alt={award.alt}
                        className={`w-auto object-contain transition-transform duration-500 ease-out group-hover:scale-[1.04] ${award.raw ? "max-h-12 opacity-95" : "logo-knockout max-h-6 max-w-[140px]"}`}
                        loading="lazy"
                      />
                    </div>
                    <p className="display-sm mt-8 text-cream">{award.place}</p>
                    <p className="mt-3 text-base leading-relaxed text-cream/75">{award.title}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-y">
          <div className="shell">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-forest/60">
                <span aria-hidden="true" className="h-px w-8 bg-forest/30" />
                Alumni spotlight
              </p>
            </Reveal>
            <div className="mt-14 grid gap-12 md:grid-cols-12 md:gap-16">
              <div className="img-zoom md:col-span-4">
                <img
                  src={person.image}
                  alt={person.name}
                  className="aspect-[4/5] w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex min-w-0 flex-col md:col-span-8">
                <div className="flex-1">
                  <h2 className="display-md text-forest">{person.name}</h2>
                  <dl className="mt-8 grid gap-6 border-t border-border pt-8 sm:grid-cols-3">
                    <div>
                      <dt className="eyebrow text-forest/50">Graduating class</dt>
                      <dd className="mt-3 text-sm text-foreground">{person.graduatingClass}</dd>
                    </div>
                    <div>
                      <dt className="eyebrow text-forest/50">Current position</dt>
                      <dd className="mt-3 text-sm text-foreground">{person.position}</dd>
                    </div>
                    <div>
                      <dt className="eyebrow text-forest/50">Location</dt>
                      <dd className="mt-3 text-sm text-foreground">{person.location}</dd>
                    </div>
                  </dl>
                  <p className="eyebrow mt-10 text-forest/50">Most impactful moment in DataStory</p>
                  <div className="mt-5 min-h-[13rem] sm:min-h-[10.5rem] md:min-h-[9.5rem]">
                    <blockquote className="lede max-w-2xl">{person.impact}</blockquote>
                  </div>
                </div>
                <div
                  className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4"
                  onKeyDown={(e) => {
                    if (e.key === "ArrowLeft") {
                      e.preventDefault();
                      setAlum((a) => (a - 1 + ALUMNI.length) % ALUMNI.length);
                    } else if (e.key === "ArrowRight") {
                      e.preventDefault();
                      setAlum((a) => (a + 1) % ALUMNI.length);
                    }
                  }}
                >
                  <div className="flex items-center gap-4">
                    <button
                      type="button"
                      onClick={() => setAlum((a) => (a - 1 + ALUMNI.length) % ALUMNI.length)}
                      aria-label="Previous alumni spotlight"
                      className="text-lg leading-none text-forest/70 transition-colors hover:text-forest focus:outline-none focus-visible:ring-2 focus-visible:ring-forest/50"
                    >
                      ←
                    </button>
                    <span className="eyebrow text-forest/60">
                      {String(alum + 1).padStart(2, "0")} / {String(ALUMNI.length).padStart(2, "0")}
                    </span>
                    <button
                      type="button"
                      onClick={() => setAlum((a) => (a + 1) % ALUMNI.length)}
                      aria-label="Next alumni spotlight"
                      className="text-lg leading-none text-forest/70 transition-colors hover:text-forest focus:outline-none focus-visible:ring-2 focus-visible:ring-forest/50"
                    >
                      →
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {ALUMNI.map((a, i) => (
                      <button
                        key={a.name}
                        type="button"
                        onClick={() => setAlum(i)}
                        title={a.name}
                        aria-label={`Show alumni spotlight: ${a.name}`}
                        aria-current={i === alum}
                        className={`h-4 w-8 border-y-[7px] border-transparent bg-clip-content transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-forest/50 sm:w-10 ${i === alum ? "bg-forest" : "bg-forest/25 hover:bg-forest/50"}`}

                      />
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => setAlumPaused((v) => !v)}
                    aria-pressed={alumPaused}
                    className="link-underline text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-forest/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-forest/50"
                  >
                    {alumPaused ? "Play" : "Pause"}
                  </button>
                </div>

              </div>

            </div>
          </div>
        </section>

        <section className="bg-cream-soft">
          <div className="shell py-20 md:py-28">
            <Reveal>
              <h2 className="display-lg max-w-3xl text-forest">Start your data science journey.</h2>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-12">
                <Link
                  to="/apply"
                  className="group inline-flex items-center gap-3 bg-forest px-7 py-3.5 text-[0.8125rem] font-medium uppercase tracking-[0.14em] text-cream transition-colors duration-300 hover:bg-forest-deep"
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
