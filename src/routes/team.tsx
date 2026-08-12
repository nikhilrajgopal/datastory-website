import { createFileRoute } from "@tanstack/react-router";

import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { consultants, executiveBoard, seniorAdvisors, type Member } from "@/data/team";

const SITE = "https://data-story-unified.lovable.app";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our Team — DataStory at Berkeley Members" },
      {
        name: "description",
        content:
          "Meet the DataStory at Berkeley executive board, consultants, and senior advisors — students across data science, statistics, computer science, and economics.",
      },
      { property: "og:title", content: "Our Team — DataStory at Berkeley" },
      {
        property: "og:description",
        content:
          "The executive board, consultants, and senior advisors behind DataStory at Berkeley.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE}/team` },
      { property: "og:image", content: `${SITE}/images/spring-26-fullclub.jpg` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `${SITE}/images/spring-26-fullclub.jpg` },
    ],
    links: [{ rel: "canonical", href: `${SITE}/team` }],
  }),
  component: TeamPage,
});


function MemberCard({ member, dark = false }: { member: Member; dark?: boolean }) {
  const content = (
    <>
      <div className="img-zoom">
        <img
          src={member.image}
          alt={member.name}
          className="aspect-[4/5] w-full object-cover object-top"
          loading="lazy"
        />
      </div>
      <h3 className="mt-2 font-serif text-sm leading-tight text-forest sm:mt-4 sm:text-base md:text-lg">
        {member.name}
      </h3>
      <p className="mt-1 text-[0.6rem] leading-tight text-forest/60 sm:mt-1.5 sm:text-xs">
        {member.role}
      </p>
      <p className="mt-1 text-[0.65rem] leading-relaxed text-muted-foreground sm:text-xs">
        {member.year}
      </p>
      <p className="text-[0.65rem] leading-relaxed text-muted-foreground sm:text-xs">
        {member.major}
      </p>
    </>
  );

  return (
    <article className="group p-2">

      {member.linkedin ? (
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
        >
          {content}
        </a>
      ) : (
        content
      )}
    </article>
  );
}

function Section({
  index,
  title,
  members,
  dark = false,
}: {
  index: string;
  title: string;
  members: Member[];
  dark?: boolean;
}) {
  return (
    <section className={dark ? "bg-forest text-cream" : ""}>
      <div className="shell py-20 md:py-28">
        <Reveal>
          <div className="flex items-baseline gap-6 pb-8">
            <span className={`eyebrow ${dark ? "text-cream/50" : "text-forest/40"}`}>{index}</span>
            <h2 className={`display-lg ${dark ? "text-cream" : "text-forest"}`}>{title}</h2>
            <span className={`eyebrow ml-auto ${dark ? "text-cream/50" : "text-forest/40"}`}>
              {members.length} members
            </span>
          </div>
        </Reveal>
        <div
          className={`mt-8 grid grid-cols-3 gap-x-3 gap-y-8 border-t pt-8 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-12 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 ${
            dark ? "border-cream/20" : "border-border"
          }`}
        >
          {members.map((member, i) => (
            <Reveal key={`${member.name}-${member.role}`} delay={(i % 3) * 50}>
              {dark ? (
                <div className="[&_h3]:text-cream [&_p]:text-cream/70 [&_p:first-of-type]:text-cream/60">
                  <MemberCard member={member} dark />
                </div>
              ) : (
                <MemberCard member={member} />
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader overlay />

      <main className="flex-1">
        <section className="relative aspect-[4/3] min-h-[380px] w-full overflow-hidden sm:aspect-auto sm:h-[72vh] sm:min-h-[480px]">
          <img
            src="/images/spring-26-fullclub.jpg"
            alt="DataStory at Berkeley full club photo, Spring 2026"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-forest/55" />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-forest/80 to-transparent"
          />
          <div className="shell relative flex h-full flex-col justify-end pb-16 md:pb-24">
            <Reveal>
              <p className="eyebrow text-cream/80">Meet our members</p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="display-xl mt-6 max-w-4xl text-cream">Our Team</h1>
            </Reveal>
          </div>
        </section>

        <Section index="01" title="Executive Board" members={executiveBoard} />
        <Section index="02" title="Consultants" members={consultants} dark />
        <Section index="03" title="Senior Advisors" members={seniorAdvisors} />
      </main>

      <SiteFooter />
    </div>
  );
}
