import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SiteFooter, r as SiteHeader, t as Reveal } from "./site-header-C2WRJh7j.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-Do1njiQi.js
var import_jsx_runtime = require_jsx_runtime();
var PILLARS = [
	{
		index: "01",
		title: "Vision",
		image: "/images/vision new.png",
		alt: "DataStory team members representing our vision",
		body: "DataStory was founded to empower students with the knowledge, skills, and practical experience necessary to tackle complex real-world challenges through the application of data science. We strive to foster a collaborative and inclusive environment that encourages innovation, professional growth, and societal impact, aiming to put our members on a successful path post-grad."
	},
	{
		index: "02",
		title: "Impact",
		image: "/images/impact new.png",
		alt: "DataStory team members representing our impact",
		body: "Our projects are focused on creating value for startups, non-profits, and corporations in various fields, including data analytics, software development, machine learning, marketing, and more. We are experienced in tackling a wide range of data-related problems as well as providing solutions to help shape a company's future."
	},
	{
		index: "03",
		title: "Evolution",
		image: "/images/evolution new.png",
		alt: "DataStory team members representing our evolution",
		body: "Through our Junior Consultant program, we help develop our new members' technical consulting skillset via weekly lessons on data science techniques and industry practices. Additionally, we host professional workshops, case competitions, speaker panels, and alumni events in order to provide our members with diverse opportunities to grow."
	}
];
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, { overlay: true }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "flex-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "relative aspect-[4/3] min-h-[380px] w-full overflow-hidden sm:aspect-auto sm:h-[70vh] sm:min-h-[480px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/images/new-mems-sitting-sp26.jpg",
								alt: "DataStory Spring 2026 new members",
								className: "absolute inset-0 h-full w-full object-cover object-[center_40%]"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								"aria-hidden": "true",
								className: "absolute inset-0 bg-forest/55"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								"aria-hidden": "true",
								className: "absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-forest/80 to-transparent"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "shell relative flex h-full flex-col justify-end pb-16 md:pb-24",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow text-cream/80",
									children: "Who we are"
								}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									delay: 120,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
										className: "display-xl mt-6 max-w-4xl text-cream",
										children: "About DataStory"
									})
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "section-y",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "shell grid gap-14 md:grid-cols-12 md:gap-16",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "md:col-span-5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "eyebrow flex items-center gap-3 text-forest/60",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"aria-hidden": "true",
										className: "h-px w-8 bg-forest/30"
									}), "Our story"]
								}) })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "md:col-span-7",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "display-lg text-forest",
									children: "Vision, impact, and evolution — the three ways we grow."
								}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									delay: 120,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "lede mt-8 max-w-2xl",
										children: "DataStory delivers top-notch consulting services in data science and software development, giving members the experience to lead after graduation."
									})
								})]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "rule-top",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "shell",
							children: PILLARS.map((pillar, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								tabIndex: 0,
								className: "grid items-center gap-10 border-b border-border px-4 py-14 md:grid-cols-12 md:gap-14 md:px-6 md:py-20",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "eyebrow text-forest/40 md:col-span-1",
										children: pillar.index
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: `min-w-0 md:col-span-6 ${i % 2 === 1 ? "md:order-2" : ""}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "display-md text-forest",
											children: pillar.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-6 max-w-xl text-base leading-relaxed text-muted-foreground",
											children: pillar.body
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: `img-zoom md:col-span-5 ${i % 2 === 1 ? "md:order-1" : ""}`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: pillar.image,
											alt: pillar.alt,
											className: "aspect-[4/3] w-full object-cover",
											loading: "lazy"
										})
									})
								]
							}) }, pillar.title))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "bg-cream-soft relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							"aria-hidden": "true",
							className: "absolute inset-x-0 top-0 -mt-20 h-20 bg-gradient-to-b from-background to-cream-soft"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "shell py-20 md:py-28",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "eyebrow flex items-center gap-3 text-forest/60",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"aria-hidden": "true",
										className: "h-px w-8 bg-forest/30"
									}), "Where we work"]
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									delay: 100,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "display-lg mt-6 max-w-3xl text-forest",
										children: "Our members go on to build at the world's best companies."
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									delay: 160,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: "/images/comprehensive-company-logos.png",
										alt: "Companies where DataStory members work including Amazon, Microsoft, Apple, Intel, Tesla, Meta, McKinsey, BlackRock, BCG, Coca-Cola, Adobe, Disney, Red Bull, AT&T, Salesforce, Walmart, ThermoFisher Scientific, DataDog, Rakuten, Atlassian, Chime, PwC, Scale, Visa, CrowdStrike, Accenture, Workday, EY, Coinbase, and Jefferies",
										className: "mt-14 w-full object-contain",
										loading: "lazy"
									})
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "bg-forest text-cream",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "shell py-24 md:py-32",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "display-lg max-w-3xl text-cream",
								children: "Work with us, or join us."
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: 120,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-12 flex flex-wrap gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/projects",
										className: "group inline-flex items-center gap-3 bg-cream px-7 py-3.5 text-[0.8125rem] font-medium uppercase tracking-[0.14em] text-forest transition-colors duration-300 hover:bg-white",
										children: ["See our projects", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											"aria-hidden": "true",
											className: "transition-transform duration-300 group-hover:translate-x-1",
											children: "→"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/apply",
										className: "group inline-flex items-center gap-3 border border-cream/40 px-7 py-3.5 text-[0.8125rem] font-medium uppercase tracking-[0.14em] text-cream transition-colors duration-300 hover:bg-cream hover:text-forest",
										children: ["Join DataStory", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											"aria-hidden": "true",
											className: "transition-transform duration-300 group-hover:translate-x-1",
											children: "→"
										})]
									})]
								})
							})]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { AboutPage as component };
