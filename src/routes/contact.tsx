import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const SITE = "https://data-story-unified.lovable.app";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Work With DataStory at Berkeley" },
      {
        name: "description",
        content:
          "Get in touch with DataStory at Berkeley. Startups, non-profits, corporations, and students can reach us at datastory.president@gmail.com.",
      },
      { property: "og:title", content: "Contact — DataStory at Berkeley" },
      {
        property: "og:description",
        content:
          "Leave us a message to discuss a data science, software, or analytics consulting project.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE}/contact` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE}/contact` }],
  }),
  component: ContactPage,
});


const FIELD =
  "w-full border-0 border-b border-border bg-transparent px-0 py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-forest";
const LABEL = "eyebrow text-forest/60";

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    type: "",
    message: "",
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const body = [
      `Name: ${form.firstName} ${form.lastName}`,
      `Email: ${form.email}`,
      form.phone ? `Phone: ${form.phone}` : "",
      form.type ? `I am a: ${form.type}` : "",
      "",
      form.message,
    ]
      .filter(Boolean)
      .join("\n");
    window.location.href = `mailto:datastory.president@gmail.com?subject=${encodeURIComponent(
      `Message from ${form.firstName} ${form.lastName}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />

      <main className="flex-1">
        <section className="bg-forest text-cream">
          <div className="shell pb-20 pt-36 md:pb-28 md:pt-44">
            <Reveal>
              <p className="eyebrow text-cream/70">Get in touch</p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="display-xl mt-6 max-w-4xl text-cream">Leave us a message!</h1>
            </Reveal>
          </div>
        </section>

        <section className="section-y">
          <div className="shell grid gap-14 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-4">
              <Reveal>
                <p className="eyebrow flex items-center gap-3 text-forest/60">
                  <span aria-hidden="true" className="h-px w-8 bg-forest/30" />
                  Contact
                </p>
                <a
                  href="mailto:datastory.president@gmail.com"
                  className="link-underline mt-8 inline-block font-serif text-2xl text-forest"
                >
                  datastory.president@gmail.com
                </a>
                <p className="mt-8 max-w-sm text-base leading-relaxed text-muted-foreground">
                  University of California, Berkeley
                </p>
              </Reveal>
            </div>

            <div className="md:col-span-8">
              <Reveal delay={120}>
                <form onSubmit={handleSubmit} className="grid gap-10 sm:grid-cols-2">
                  <div>
                    <label className={LABEL} htmlFor="firstName">
                      First name*
                    </label>
                    <input
                      id="firstName"
                      required
                      value={form.firstName}
                      onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                      className={FIELD}
                    />
                  </div>
                  <div>
                    <label className={LABEL} htmlFor="lastName">
                      Last name*
                    </label>
                    <input
                      id="lastName"
                      required
                      value={form.lastName}
                      onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                      className={FIELD}
                    />
                  </div>
                  <div>
                    <label className={LABEL} htmlFor="email">
                      Email*
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={FIELD}
                    />
                  </div>
                  <div>
                    <label className={LABEL} htmlFor="phone">
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={FIELD}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className={LABEL} htmlFor="type">
                      I am a
                    </label>
                    <select
                      id="type"
                      value={form.type}
                      onChange={(e) => setForm({ ...form, type: e.target.value })}
                      className={FIELD}
                    >
                      <option value="">Select an option</option>
                      <option value="Startup">Startup</option>
                      <option value="Non-profit">Non-profit</option>
                      <option value="Corporation">Corporation</option>
                      <option value="Student">Student</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className={LABEL} htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={`${FIELD} resize-none`}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="group inline-flex items-center gap-3 bg-forest px-7 py-3.5 text-[0.8125rem] font-medium uppercase tracking-[0.14em] text-cream transition-colors duration-300 hover:bg-forest-deep"
                    >
                      Send message
                      <span
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </button>
                    {sent && (
                      <p className="mt-6 text-sm text-muted-foreground">
                        Your email draft is open — send it and we&apos;ll get back to you soon.
                      </p>
                    )}
                  </div>
                </form>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
