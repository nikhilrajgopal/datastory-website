import { n as SiteFooter, r as Reveal, t as SiteHeader } from "./site-header-C2WRJh7j.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/apply.tsx?tsr-split=component
var TIMELINE = [
	{
		date: "Wednesday, August 26",
		title: "Applications Open",
		description: "The application for the Fall 2026 semester is now live.",
		highlighted: false,
		href: void 0
	},
	{
		date: "Friday, August 28",
		title: "Joint Infosession (URM Focus)",
		description: "An intro to DataStory centered on underrepresented-minority applicants.",
		highlighted: false,
		href: void 0
	},
	{
		date: "Monday, August 31",
		title: "Main Infosession",
		description: "8–10 pm · Learn about the club, our projects, and the application process.",
		highlighted: false,
		href: void 0
	},
	{
		date: "Wednesday, September 2",
		title: "Women's Night",
		description: "7–9 pm · A community evening for women and non-binary applicants.",
		highlighted: false,
		href: void 0
	},
	{
		date: "Thursday, September 3",
		title: "Applications Close",
		description: "3 pm deadline to submit. Click here to apply when the link is available.",
		highlighted: true,
		href: "https://forms.gle/kG7JohsYbtfapJct5"
	}
];
function ApplyPage() {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex min-h-screen flex-col bg-background",
		children: [
			/* @__PURE__ */ jsx(SiteHeader, {}),
			/* @__PURE__ */ jsxs("main", {
				className: "flex-1",
				children: [
					/* @__PURE__ */ jsx("section", {
						className: "bg-forest text-cream",
						children: /* @__PURE__ */ jsxs("div", {
							className: "shell pb-20 pt-36 md:pb-28 md:pt-44",
							children: [
								/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("p", {
									className: "eyebrow text-cream/70",
									children: "Fall 2026 recruitment"
								}) }),
								/* @__PURE__ */ jsx(Reveal, {
									delay: 120,
									children: /* @__PURE__ */ jsx("h1", {
										className: "display-xl mt-6 max-w-4xl text-cream",
										children: "Apply Now"
									})
								}),
								/* @__PURE__ */ jsx(Reveal, {
									delay: 200,
									children: /* @__PURE__ */ jsx("p", {
										className: "lede mt-8 max-w-2xl text-cream/75",
										children: "Applications for the Fall 2026 semester open soon. Attend an infosession, meet the team, and submit your application by Thursday, September 3 at 3 pm."
									})
								}),
								/* @__PURE__ */ jsx(Reveal, {
									delay: 280,
									children: /* @__PURE__ */ jsxs("div", {
										className: "mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4",
										children: [/* @__PURE__ */ jsxs("a", {
											href: "#timeline",
											className: "group inline-flex w-full items-center justify-center gap-3 bg-cream px-7 py-3.5 text-[0.8125rem] font-medium uppercase tracking-[0.14em] text-forest transition-colors duration-300 hover:bg-white sm:w-auto",
											children: ["View timeline", /* @__PURE__ */ jsx("span", {
												"aria-hidden": "true",
												className: "transition-transform duration-300 group-hover:translate-x-1",
												children: "→"
											})]
										}), /* @__PURE__ */ jsxs("a", {
											href: "https://forms.gle/kG7JohsYbtfapJct5",
											target: "_blank",
											rel: "noopener noreferrer",
											className: "group inline-flex w-full items-center justify-center gap-3 border border-cream/40 px-7 py-3.5 text-[0.8125rem] font-medium uppercase tracking-[0.14em] text-cream transition-colors duration-300 hover:bg-cream hover:text-forest sm:w-auto",
											children: ["Apply now", /* @__PURE__ */ jsx("span", {
												"aria-hidden": "true",
												className: "transition-transform duration-300 group-hover:translate-x-1",
												children: "→"
											})]
										})]
									})
								})
							]
						})
					}),
					/* @__PURE__ */ jsx("section", {
						id: "timeline",
						className: "section-y bg-background",
						children: /* @__PURE__ */ jsxs("div", {
							className: "shell",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "max-w-3xl",
								children: [
									/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("p", {
										className: "eyebrow flex items-center gap-3 text-forest/60",
										children: [/* @__PURE__ */ jsx("span", {
											"aria-hidden": "true",
											className: "h-px w-8 bg-forest/30"
										}), "2026 recruitment timeline"]
									}) }),
									/* @__PURE__ */ jsx(Reveal, {
										delay: 100,
										children: /* @__PURE__ */ jsx("h2", {
											className: "display-md mt-4 text-forest",
											children: "What to expect this semester"
										})
									}),
									/* @__PURE__ */ jsx(Reveal, {
										delay: 140,
										children: /* @__PURE__ */ jsx("p", {
											className: "lede mt-3 max-w-xl",
											children: "Five key dates from applications opening to the final deadline. Coffee chats and the main application are linked below."
										})
									})
								]
							}), /* @__PURE__ */ jsxs("div", {
								className: "relative mt-10 md:mt-14",
								children: [/* @__PURE__ */ jsx("div", {
									className: "absolute bottom-0 left-[1.125rem] top-0 w-px bg-forest/20 md:left-1/2",
									"aria-hidden": "true"
								}), /* @__PURE__ */ jsx("div", {
									className: "relative space-y-8 md:space-y-0",
									children: TIMELINE.map((item, i) => {
										const isEven = i % 2 === 0;
										const content = /* @__PURE__ */ jsxs("div", {
											className: `timeline-card rounded-md p-4 transition-all duration-300 md:p-5 ${item.highlighted ? "group cursor-pointer bg-forest text-cream hover:-translate-y-1 hover:shadow-lg" : "bg-cream-soft text-forest hover:-translate-y-1 hover:bg-cream"}`,
											children: [/* @__PURE__ */ jsxs("div", {
												className: "flex items-start justify-between gap-4",
												children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
													className: `font-mono text-[0.625rem] font-medium uppercase tracking-[0.16em] ${item.highlighted ? "text-cream/70" : "text-forest/60"}`,
													children: item.date
												}), /* @__PURE__ */ jsx("h3", {
													className: "display-sm mt-1",
													children: item.title
												})] }), item.highlighted && /* @__PURE__ */ jsx("span", {
													"aria-hidden": "true",
													className: "transition-transform duration-300 group-hover:translate-x-1",
													children: "→"
												})]
											}), /* @__PURE__ */ jsx("p", {
												className: `mt-2 text-sm leading-relaxed ${item.highlighted ? "text-cream/80" : "text-foreground/80"}`,
												children: item.description
											})]
										});
										return /* @__PURE__ */ jsxs(Reveal, {
											delay: i * 100,
											className: "relative md:grid md:grid-cols-2 md:gap-6 md:pb-8",
											children: [/* @__PURE__ */ jsx("div", {
												className: `absolute left-[1.125rem] top-5 z-10 h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 md:top-8 md:left-1/2 md:-translate-x-1/2 ${item.highlighted ? "border-forest bg-cream" : "border-forest/40 bg-background"}`,
												"aria-hidden": "true"
											}), /* @__PURE__ */ jsx("div", {
												className: `pl-8 md:pl-0 ${isEven ? "md:pr-8" : "md:col-start-2 md:pl-8"}`,
												children: item.href ? /* @__PURE__ */ jsx("a", {
													href: item.href,
													target: "_blank",
													rel: "noopener noreferrer",
													className: "block focus:outline-none focus-visible:ring-2 focus-visible:ring-forest/40 focus-visible:ring-offset-2",
													children: content
												}) : /* @__PURE__ */ jsx("div", { children: content })
											})]
										}, item.title);
									})
								})]
							})]
						})
					}),
					/* @__PURE__ */ jsx("section", {
						className: "section-y",
						children: /* @__PURE__ */ jsxs("div", {
							className: "shell grid gap-14 md:grid-cols-12 md:gap-16",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "md:col-span-4",
								children: [/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("p", {
									className: "eyebrow flex items-center gap-3 text-forest/60",
									children: [/* @__PURE__ */ jsx("span", {
										"aria-hidden": "true",
										className: "h-px w-8 bg-forest/30"
									}), "02 — Coffee chats"]
								}) }), /* @__PURE__ */ jsx(Reveal, {
									delay: 100,
									children: /* @__PURE__ */ jsx("h2", {
										className: "display-md mt-6 text-forest",
										children: "Fall 2026 Coffee Chats"
									})
								})]
							}), /* @__PURE__ */ jsx("div", {
								className: "md:col-span-8",
								children: /* @__PURE__ */ jsx(Reveal, {
									delay: 140,
									children: /* @__PURE__ */ jsx("div", {
										className: "border border-border bg-cream-soft p-2",
										children: /* @__PURE__ */ jsx("iframe", {
											src: "https://airtable.com/embed/app86G4onTOGFdenR/shrSJzMPvExHQ4XZM?viewControls=on",
											title: "DataStory Application Form",
											className: "w-full border-0",
											height: 533,
											style: { background: "transparent" }
										})
									})
								})
							})]
						})
					}),
					/* @__PURE__ */ jsx("section", {
						className: "bg-cream-soft",
						children: /* @__PURE__ */ jsxs("div", {
							className: "shell grid gap-14 py-20 md:grid-cols-12 md:gap-16 md:py-28",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "md:col-span-4",
								children: [/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("p", {
									className: "eyebrow flex items-center gap-3 text-forest/60",
									children: [/* @__PURE__ */ jsx("span", {
										"aria-hidden": "true",
										className: "h-px w-8 bg-forest/30"
									}), "03 — Application"]
								}) }), /* @__PURE__ */ jsx(Reveal, {
									delay: 100,
									children: /* @__PURE__ */ jsx("h2", {
										className: "display-md mt-6 text-forest",
										children: "Application Link"
									})
								})]
							}), /* @__PURE__ */ jsx("div", {
								className: "md:col-span-8",
								children: /* @__PURE__ */ jsxs(Reveal, {
									delay: 140,
									children: [/* @__PURE__ */ jsx("p", {
										className: "lede italic",
										children: "Fall 2026 applications are open. Submit by Thursday, September 3 at 3 pm."
									}), /* @__PURE__ */ jsxs("a", {
										href: "https://forms.gle/kG7JohsYbtfapJct5",
										target: "_blank",
										rel: "noopener noreferrer",
										className: "group mt-10 inline-flex items-center gap-3 bg-forest px-7 py-3.5 text-[0.8125rem] font-medium uppercase tracking-[0.14em] text-cream transition-colors duration-300 hover:bg-forest-deep",
										children: ["Click to Apply", /* @__PURE__ */ jsx("span", {
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
			/* @__PURE__ */ jsx(SiteFooter, {})
		]
	});
}
//#endregion
export { ApplyPage as component };
