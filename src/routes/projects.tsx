import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BarChart3,
  Brain,
  Code2,
  Database,
  PieChart,
  ShieldCheck,
} from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const SITE = "https://data-story-unified.lovable.app";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — DataStory at Berkeley Client Work" },
      {
        name: "description",
        content:
          "Client work from DataStory at Berkeley: data engineering, machine learning, dashboards, and LLM tooling for Aflac, Oracle, Selector, UNICEF, EA, Seagate, and more.",
      },
      { property: "og:title", content: "Projects — DataStory at Berkeley" },
      {
        property: "og:description",
        content:
          "Recent and past consulting projects delivered by DataStory teams for startups, non-profits, and corporations.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE}/projects` },
      { property: "og:image", content: `${SITE}/images/our-work-hero-new.jpeg` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `${SITE}/images/our-work-hero-new.jpeg` },
    ],
    links: [{ rel: "canonical", href: `${SITE}/projects` }],
  }),
  component: ProjectsPage,
});


function slugify(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

const RECENT = [
  {
    logo: "/images/Aflac-logo.png",
    name: "Aflac",
    body: "Engineered an ETL pipeline that transformed over one million U.S. Department of Labor Form 5500 records into a highly accurate, queryable dataset. Utilized NLP, entity resolution, and automated validation workflows to improve subsidiary mapping and ensure data quality at scale.",
  },
  {
    logo: "/images/selector-logo.png",
    name: "Selector",
    body: "Developed low-latency machine learning pipelines for real-time anomaly detection and automated security data analysis. Optimized data processing and inference workflows to deliver rapid insights across cloud infrastructure and CI/CD environments.",
  },
  {
    logo: "/images/Oracle-Logo.png",
    name: "Oracle",
    body: "Built a multi-agent research platform using LangChain and Oracle AI Database 26ai to analyze financial metrics and live news in parallel. Synthesized insights into strategic briefs, SWOT analyses, and an interactive dashboard to support investment research and decision-making.",
  },
  {
    logo: "/images/datastory-logo.png",
    name: "DataStory",
    body: "Built a full-stack sourcing and outreach platform that combined PitchBook data, web scraping, and company enrichment to automate prospect research. Leveraged LLMs to generate personalized outbound email drafts and streamline lead tracking, outreach, and engagement workflows.",
  },
];

const PAST = [
  {
    logo: "/images/unicef-logo-clean.png",
    name: "UNICEF",
    body: "Created web scrapers to identify potential partner organizations for UNICEF by utilizing sentiment analysis on social media posts to target organizations with a higher propensity to join.",
  },
  {
    logo: "/images/ea-logo.png",
    name: "EA Games",
    body: "Developed a web scraper to capture game leak data, integrating it with an ETL pipeline into Snowflake. Enhanced classification accuracy using confusion matrices and initiated predictive analytics on sentiment and revenue trends.",
  },
  {
    logo: "/images/seagate-logo.png",
    name: "Seagate",
    body: "Developed a PostgreSQL-integrated priority scoring framework for automating accounts payable and cost modeling. Built Tableau dashboards with drill-down analytics and streamlined ETL workflows using Metabase and Streamlit.",
  },
  {
    logo: "/images/epri-logo.png",
    name: "EPRI",
    body: "Built generative machine learning models including LSTM, GANs, and VAEs to synthesize ultrasonic A-scans for non-destructive testing.",
  },
  {
    logo: "/images/education-trust-logo-updated.png",
    name: "The Education Trust",
    body: "Constructed an ETL Snowflake pipeline to automate collection and data. Generated multiple Tableau visualizations using piped data.",
  },
  {
    logo: "/images/farmlink-project-logo.png",
    name: "The Farmlink Project",
    body: "Conducted an ML-driven data analysis to segment donors. Identified key factors to increase donations from newsletters.",
  },
];

const SERVICES = [
  {
    icon: BarChart3,
    title: "Data Analytics",
    body: "Transform raw data into actionable insights through statistical analysis and visualization. We help organizations make data-driven decisions.",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    body: "Build predictive models and AI solutions to automate decisions, uncover patterns, and drive innovation across your organization.",
  },
  {
    icon: Code2,
    title: "Software Development",
    body: "Design and build custom applications, dashboards, and data pipelines tailored to your specific business needs.",
  },
  {
    icon: PieChart,
    title: "Data Visualization",
    body: "Create compelling visual stories that communicate complex data clearly to stakeholders at all levels.",
  },
  {
    icon: ShieldCheck,
    title: "Business Strategy",
    body: "Provide data-driven recommendations to optimize operations, identify growth opportunities, and improve decision-making.",
  },
  {
    icon: Database,
    title: "Data Engineering",
    body: "Build robust data infrastructure, ETL pipelines, and scalable databases to support your analytics initiatives.",
  },
];


function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader overlay />

      <main className="flex-1">
        <section className="relative aspect-[4/3] min-h-[380px] w-full overflow-hidden sm:aspect-auto sm:h-[72vh] sm:min-h-[480px]">
          <img
            src="/images/our-work-hero-new.jpeg"
            alt="DataStory team"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-forest/55" />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-forest/80 to-transparent"
          />
          <div className="shell relative flex h-full flex-col justify-end pb-16 md:pb-24">
            <Reveal>
              <p className="eyebrow text-cream/80">Our work</p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="display-xl mt-6 max-w-4xl text-cream">Projects</h1>
            </Reveal>
          </div>
        </section>

        <section className="section-y">
          <div className="shell">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-forest/60">
                <span aria-hidden="true" className="h-px w-8 bg-forest/30" />
                Recent projects
              </p>
            </Reveal>
            <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-2">
              {RECENT.map((item, i) => (
                <Reveal key={item.name} delay={i % 2 === 1 ? 100 : 0}>
                  <article
                    id={slugify(item.name)}
                    tabIndex={0}
                    className="group relative flex h-full scroll-mt-28 flex-col rounded-lg border border-border bg-background p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-forest/30 hover:bg-cream-soft hover:shadow-[0_18px_40px_-24px_rgba(20,45,32,0.45)] focus-visible:-translate-y-1 focus-visible:border-forest/30 focus-visible:bg-cream-soft focus-visible:outline-none sm:p-7 md:p-8"
                  >
                    <div className="flex h-10 items-center sm:h-14 sm:w-fit">
                      <img
                        src={item.logo}
                        alt={`${item.name} logo`}
                        className="logo-brand max-h-7 w-auto sm:max-h-10 object-contain transition-transform duration-300 ease-out group-hover:scale-105 group-focus-visible:scale-105"
                        loading="lazy"
                      />
                    </div>

                    <h2 className="display-sm mt-4 text-forest sm:display-md sm:mt-6">{item.name}</h2>
                    <span
                      aria-hidden="true"
                      className="mt-3 block h-px w-10 origin-left bg-forest/30 transition-all duration-300 ease-out group-hover:w-20 group-hover:bg-forest/60 group-focus-visible:w-20"
                    />
                    <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:mt-5 sm:text-base">
                      {item.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>

          </div>
        </section>

        <section className="bg-forest text-cream">
          <div className="shell py-20 md:py-28">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-cream/70">
                <span aria-hidden="true" className="h-px w-8 bg-cream/40" />
                Past projects
              </p>
            </Reveal>
            <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
              {PAST.map((item, i) => (
                <Reveal key={item.name} delay={(i % 3) * 80}>
                  <article
                    id={slugify(item.name)}
                    tabIndex={0}
                    className="group relative flex h-full scroll-mt-28 flex-col rounded-lg border border-cream/20 bg-cream/[0.03] p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-cream/45 hover:bg-cream/[0.08] hover:shadow-[0_18px_40px_-24px_rgba(0,0,0,0.6)] focus-visible:-translate-y-1 focus-visible:border-cream/45 focus-visible:bg-cream/[0.08] focus-visible:outline-none sm:p-7 md:p-8"
                  >
                    <div className="flex h-10 items-center sm:h-14 sm:w-fit">
                      <img
                        src={item.logo}
                        alt={`${item.name} logo`}
                        className="logo-knockout max-h-7 w-auto sm:max-h-10 object-contain transition-transform duration-300 ease-out group-hover:scale-105 group-focus-visible:scale-105"
                        loading="lazy"
                      />
                    </div>

                    <h2 className="display-sm mt-4 text-cream sm:mt-6">{item.name}</h2>
                    <span
                      aria-hidden="true"
                      className="mt-3 block h-px w-10 origin-left bg-cream/30 transition-all duration-300 ease-out group-hover:w-20 group-hover:bg-cream/70 group-focus-visible:w-20"
                    />
                    <p className="mt-4 text-sm leading-relaxed text-cream/75 sm:mt-5 sm:text-base">{item.body}</p>
                  </article>
                </Reveal>
              ))}
            </div>

          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="shell">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-forest/60">
                <span aria-hidden="true" className="h-px w-8 bg-forest/30" />
                Our services
              </p>
            </Reveal>
            <div className="mt-10 grid grid-cols-2 gap-px border border-border bg-border lg:grid-cols-3">
              {SERVICES.map((item, i) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.title} delay={(i % 3) * 80} className="bg-background">
                    <article
                      tabIndex={0}
                      className="group relative flex h-full flex-col p-4 outline-none sm:p-6 md:p-7"
                    >

                      <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-cream-soft text-forest transition-colors duration-300 group-hover:bg-forest group-hover:text-cream group-focus-visible:bg-forest group-focus-visible:text-cream">
                        <Icon size={18} strokeWidth={1.5} aria-hidden="true" />
                      </span>
                      <h3 className="mt-4 font-display text-lg leading-tight tracking-tight text-forest sm:mt-5 sm:text-xl md:text-2xl">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-forest/80 group-focus-visible:text-forest/80">
                        {item.body}
                      </p>
                      <span
                        aria-hidden="true"
                        className="mt-5 block h-px w-0 bg-forest/40 transition-all duration-500 ease-out group-hover:w-12 group-focus-visible:w-12"
                      />
                    </article>
                  </Reveal>
                );
              })}
            </div>

          </div>
        </section>

        <section className="bg-cream-soft">
          <div className="shell py-20 md:py-28">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-forest/60">
                <span aria-hidden="true" className="h-px w-8 bg-forest/30" />
                Testimonials
              </p>
            </Reveal>

            <Reveal className="mt-14">
              <article
                tabIndex={0}
                className="grid gap-10 rounded-lg border border-border bg-background/70 p-5 sm:p-7 md:grid-cols-12 md:p-10"
              >

                <div className="md:col-span-3">
                  <img
                    src="/images/selector-logo.png"
                    alt="Selector logo"
                    className="logo-brand max-h-7 w-auto sm:max-h-10 object-contain"
                    loading="lazy"
                  />
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    AI-Powered Network Intelligence Platform
                  </p>
                </div>
                <div className="md:col-span-9">
                  <blockquote className="max-w-4xl space-y-6 text-base leading-relaxed text-muted-foreground">
                    <p className="pull-quote text-forest">
                      &ldquo;Selector has partnered with DataStory with the research and development of
                      complex data summarization models across logs, graphs, and time-series data. The
                      team successfully navigated complex technical constraints, including near
                      real-time throughput, high structural variability across datasets, and massive
                      data volumes. Over a four-month engagement, they assembled a highly capable team
                      of eight student engineers who operated with remarkable professionalism. Project
                      managers Yash and Nikhil demonstrated exceptional diligence, facilitating weekly
                      sync-ups with our internal experts to ensure seamless alignment.
                    </p>
                    <p>
                      We particularly appreciated their structured approach, which included
                      comprehensive mid-term and final presentations to our entire team. DataStory
                      handed off a well-organized repository of their implementations and went above
                      and beyond by providing excellent post-deliverable support, giving a clear path
                      for our engineers to transition these models into production. Overall, we give
                      Team DataStory a strong thumbs-up and wish them the absolute best in their future
                      endeavors.&rdquo;
                    </p>
                  </blockquote>
                  <span
                    aria-hidden="true"
                    className="mt-8 block h-px w-10 bg-forest/30"
                  />
                  <p className="eyebrow mt-4 text-forest/60">Selector</p>
                </div>

              </article>
            </Reveal>

            <Reveal className="mt-8" delay={120}>
              <article
                id="good360"
                tabIndex={0}
                className="grid scroll-mt-28 gap-10 rounded-lg border border-border bg-background/70 p-5 sm:p-7 md:grid-cols-12 md:p-10"
              >
                <div className="md:col-span-3">
                  <img
                    src="/images/good360-logo.png"
                    alt="Good360 logo"
                    className="logo-brand max-h-12 w-auto object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="md:col-span-9">
                  <blockquote className="pull-quote text-forest">
                    &ldquo;Each of the customer-facing consultants were professional and mature beyond
                    their years. The team was adaptable to various challenges and scope adjustments
                    necessitated by the project and ultimately delivered several PowerBI dashboards
                    that will have ongoing value to Good360. I would definitely recommend the Berkeley
                    Data Story team for supplemental BI and Data Science projects.&rdquo;
                  </blockquote>
                  <span
                    aria-hidden="true"
                    className="mt-8 block h-px w-10 bg-forest/30"
                  />
                  <p className="eyebrow mt-4 text-forest/60">
                    Kniffen Kelly, Sr. Director of Business Intelligence Center of Excellence at Good 360
                  </p>
                </div>
              </article>
            </Reveal>


          </div>
        </section>


        <section className="rule-top">
          <div className="shell py-16 md:py-20">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-forest/60">
                <span aria-hidden="true" className="h-px w-8 bg-forest/30" />
                Additional past clients
              </p>
            </Reveal>
            <Reveal delay={100}>
              <img
                src="/images/additional-past-clients.png"
                alt="Additional Past Clients - SimpleLab, IBM, GIG Car Share, Leaf, Plan International, LifeMoves, Fingenic"
                className="mt-12 w-full object-contain"
                loading="lazy"
              />
            </Reveal>
          </div>
        </section>

        <section className="bg-forest text-cream">
          <div className="shell py-24 md:py-32">
            <Reveal>
              <h2 className="display-lg max-w-3xl text-cream">Have a project in mind?</h2>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-12">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 bg-cream px-7 py-3.5 text-[0.8125rem] font-medium uppercase tracking-[0.14em] text-forest transition-colors duration-300 hover:bg-white"
                >
                  Work with DataStory
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
