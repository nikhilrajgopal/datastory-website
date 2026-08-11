import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Database, c as ChartColumn, l as Brain, o as CodeXml, s as ChartPie, t as ShieldCheck } from "../_libs/lucide-react.mjs";
import { n as SiteFooter, r as SiteHeader, t as Reveal } from "./site-header-C2WRJh7j.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects-BDh4Yzde.js
var import_jsx_runtime = require_jsx_runtime();
function slugify(name) {
	return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
var RECENT = [
	{
		logo: "/images/Aflac-logo.png",
		name: "Aflac",
		body: "Engineered an ETL pipeline that transformed over one million U.S. Department of Labor Form 5500 records into a highly accurate, queryable dataset. Utilized NLP, entity resolution, and automated validation workflows to improve subsidiary mapping and ensure data quality at scale."
	},
	{
		logo: "/images/selector-logo.png",
		name: "Selector",
		body: "Developed low-latency machine learning pipelines for real-time anomaly detection and automated security data analysis. Optimized data processing and inference workflows to deliver rapid insights across cloud infrastructure and CI/CD environments."
	},
	{
		logo: "/images/Oracle-Logo.png",
		name: "Oracle",
		body: "Built a multi-agent research platform using LangChain and Oracle AI Database 26ai to analyze financial metrics and live news in parallel. Synthesized insights into strategic briefs, SWOT analyses, and an interactive dashboard to support investment research and decision-making."
	},
	{
		logo: "/images/datastory-logo.png",
		name: "DataStory",
		body: "Built a full-stack sourcing and outreach platform that combined PitchBook data, web scraping, and company enrichment to automate prospect research. Leveraged LLMs to generate personalized outbound email drafts and streamline lead tracking, outreach, and engagement workflows."
	}
];
var PAST = [
	{
		logo: "/images/unicef-logo-clean.png",
		name: "UNICEF",
		body: "Created web scrapers to identify potential partner organizations for UNICEF by utilizing sentiment analysis on social media posts to target organizations with a higher propensity to join."
	},
	{
		logo: "/images/ea-logo.png",
		name: "EA Games",
		body: "Developed a web scraper to capture game leak data, integrating it with an ETL pipeline into Snowflake. Enhanced classification accuracy using confusion matrices and initiated predictive analytics on sentiment and revenue trends."
	},
	{
		logo: "/images/seagate-logo.png",
		name: "Seagate",
		body: "Developed a PostgreSQL-integrated priority scoring framework for automating accounts payable and cost modeling. Built Tableau dashboards with drill-down analytics and streamlined ETL workflows using Metabase and Streamlit."
	},
	{
		logo: "/images/epri-logo.png",
		name: "EPRI",
		body: "Built generative machine learning models including LSTM, GANs, and VAEs to synthesize ultrasonic A-scans for non-destructive testing."
	},
	{
		logo: "/images/education-trust-logo-updated.png",
		name: "The Education Trust",
		body: "Constructed an ETL Snowflake pipeline to automate collection and data. Generated multiple Tableau visualizations using piped data."
	},
	{
		logo: "/images/farmlink-project-logo.png",
		name: "The Farmlink Project",
		body: "Conducted an ML-driven data analysis to segment donors. Identified key factors to increase donations from newsletters."
	}
];
var SERVICES = [
	{
		icon: ChartColumn,
		title: "Data Analytics",
		body: "Transform raw data into actionable insights through statistical analysis and visualization. We help organizations make data-driven decisions."
	},
	{
		icon: Brain,
		title: "Machine Learning",
		body: "Build predictive models and AI solutions to automate decisions, uncover patterns, and drive innovation across your organization."
	},
	{
		icon: CodeXml,
		title: "Software Development",
		body: "Design and build custom applications, dashboards, and data pipelines tailored to your specific business needs."
	},
	{
		icon: ChartPie,
		title: "Data Visualization",
		body: "Create compelling visual stories that communicate complex data clearly to stakeholders at all levels."
	},
	{
		icon: ShieldCheck,
		title: "Business Strategy",
		body: "Provide data-driven recommendations to optimize operations, identify growth opportunities, and improve decision-making."
	},
	{
		icon: Database,
		title: "Data Engineering",
		body: "Build robust data infrastructure, ETL pipelines, and scalable databases to support your analytics initiatives."
	}
];
function ProjectsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, { overlay: true }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "flex-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "relative aspect-[4/3] min-h-[380px] w-full overflow-hidden sm:aspect-auto sm:h-[72vh] sm:min-h-[480px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/images/our-work-hero-new.jpeg",
								alt: "DataStory team",
								className: "absolute inset-0 h-full w-full object-cover object-center"
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
									children: "Our work"
								}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									delay: 120,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
										className: "display-xl mt-6 max-w-4xl text-cream",
										children: "Projects"
									})
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "section-y",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "shell",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "eyebrow flex items-center gap-3 text-forest/60",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": "true",
									className: "h-px w-8 bg-forest/30"
								}), "Recent projects"]
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-14 grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-2",
								children: RECENT.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									delay: i % 2 === 1 ? 100 : 0,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
										id: slugify(item.name),
										tabIndex: 0,
										className: "group relative flex h-full scroll-mt-28 flex-col rounded-lg border border-border bg-background p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-forest/30 hover:bg-cream-soft hover:shadow-[0_18px_40px_-24px_rgba(20,45,32,0.45)] focus-visible:-translate-y-1 focus-visible:border-forest/30 focus-visible:bg-cream-soft focus-visible:outline-none sm:p-7 md:p-8",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex h-10 items-center sm:h-14 sm:w-fit",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: item.logo,
													alt: `${item.name} logo`,
													className: "logo-brand max-h-7 w-auto sm:max-h-10 object-contain transition-transform duration-300 ease-out group-hover:scale-105 group-focus-visible:scale-105",
													loading: "lazy"
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
												className: "display-sm mt-4 text-forest sm:display-md sm:mt-6",
												children: item.name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												"aria-hidden": "true",
												className: "mt-3 block h-px w-10 origin-left bg-forest/30 transition-all duration-300 ease-out group-hover:w-20 group-hover:bg-forest/60 group-focus-visible:w-20"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:mt-5 sm:text-base",
												children: item.body
											})
										]
									})
								}, item.name))
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "bg-forest text-cream",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "shell py-20 md:py-28",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "eyebrow flex items-center gap-3 text-cream/70",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": "true",
									className: "h-px w-8 bg-cream/40"
								}), "Past projects"]
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-14 grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-2 lg:grid-cols-3",
								children: PAST.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									delay: i % 3 * 80,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
										id: slugify(item.name),
										tabIndex: 0,
										className: "group relative flex h-full scroll-mt-28 flex-col rounded-lg border border-cream/20 bg-cream/[0.03] p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-cream/45 hover:bg-cream/[0.08] hover:shadow-[0_18px_40px_-24px_rgba(0,0,0,0.6)] focus-visible:-translate-y-1 focus-visible:border-cream/45 focus-visible:bg-cream/[0.08] focus-visible:outline-none sm:p-7 md:p-8",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex h-10 items-center sm:h-14 sm:w-fit",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: item.logo,
													alt: `${item.name} logo`,
													className: "logo-knockout max-h-7 w-auto sm:max-h-10 object-contain transition-transform duration-300 ease-out group-hover:scale-105 group-focus-visible:scale-105",
													loading: "lazy"
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
												className: "display-sm mt-4 text-cream sm:mt-6",
												children: item.name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												"aria-hidden": "true",
												className: "mt-3 block h-px w-10 origin-left bg-cream/30 transition-all duration-300 ease-out group-hover:w-20 group-hover:bg-cream/70 group-focus-visible:w-20"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-4 text-sm leading-relaxed text-cream/75 sm:mt-5 sm:text-base",
												children: item.body
											})
										]
									})
								}, item.name))
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "py-16 md:py-20",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "shell",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "eyebrow flex items-center gap-3 text-forest/60",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": "true",
									className: "h-px w-8 bg-forest/30"
								}), "Our services"]
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-10 grid grid-cols-2 gap-px border border-border bg-border lg:grid-cols-3",
								children: SERVICES.map((item, i) => {
									const Icon = item.icon;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
										delay: i % 3 * 80,
										className: "bg-background",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
											tabIndex: 0,
											className: "group relative flex h-full flex-col p-4 outline-none sm:p-6 md:p-7",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "flex h-9 w-9 shrink-0 items-center justify-center bg-cream-soft text-forest transition-colors duration-300 group-hover:bg-forest group-hover:text-cream group-focus-visible:bg-forest group-focus-visible:text-cream",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
														size: 18,
														strokeWidth: 1.5,
														"aria-hidden": "true"
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "mt-4 font-display text-lg leading-tight tracking-tight text-forest sm:mt-5 sm:text-xl md:text-2xl",
													children: item.title
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-3 text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-forest/80 group-focus-visible:text-forest/80",
													children: item.body
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													"aria-hidden": "true",
													className: "mt-5 block h-px w-0 bg-forest/40 transition-all duration-500 ease-out group-hover:w-12 group-focus-visible:w-12"
												})
											]
										})
									}, item.title);
								})
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "bg-cream-soft",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "shell py-20 md:py-28",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "eyebrow flex items-center gap-3 text-forest/60",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"aria-hidden": "true",
										className: "h-px w-8 bg-forest/30"
									}), "Testimonials"]
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									className: "mt-14",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
										tabIndex: 0,
										className: "grid gap-10 rounded-lg border border-border bg-background/70 p-5 sm:p-7 md:grid-cols-12 md:p-10",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "md:col-span-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: "/images/selector-logo.png",
												alt: "Selector logo",
												className: "logo-brand max-h-7 w-auto sm:max-h-10 object-contain",
												loading: "lazy"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-4 text-sm leading-relaxed text-muted-foreground",
												children: "AI-Powered Network Intelligence Platform"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "md:col-span-9",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
													className: "max-w-4xl space-y-6 text-base leading-relaxed text-muted-foreground",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "pull-quote text-forest",
														children: "“Selector has partnered with DataStory with the research and development of complex data summarization models across logs, graphs, and time-series data. The team successfully navigated complex technical constraints, including near real-time throughput, high structural variability across datasets, and massive data volumes. Over a four-month engagement, they assembled a highly capable team of eight student engineers who operated with remarkable professionalism. Project managers Yash and Nikhil demonstrated exceptional diligence, facilitating weekly sync-ups with our internal experts to ensure seamless alignment."
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We particularly appreciated their structured approach, which included comprehensive mid-term and final presentations to our entire team. DataStory handed off a well-organized repository of their implementations and went above and beyond by providing excellent post-deliverable support, giving a clear path for our engineers to transition these models into production. Overall, we give Team DataStory a strong thumbs-up and wish them the absolute best in their future endeavors.”" })]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													"aria-hidden": "true",
													className: "mt-8 block h-px w-10 bg-forest/30"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "eyebrow mt-4 text-forest/60",
													children: "Selector"
												})
											]
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									className: "mt-8",
									delay: 120,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
										id: "good360",
										tabIndex: 0,
										className: "grid scroll-mt-28 gap-10 rounded-lg border border-border bg-background/70 p-5 sm:p-7 md:grid-cols-12 md:p-10",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "md:col-span-3",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: "/images/good360-logo.png",
												alt: "Good360 logo",
												className: "logo-brand max-h-12 w-auto object-contain",
												loading: "lazy"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "md:col-span-9",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
													className: "pull-quote text-forest",
													children: "“Each of the customer-facing consultants were professional and mature beyond their years. The team was adaptable to various challenges and scope adjustments necessitated by the project and ultimately delivered several PowerBI dashboards that will have ongoing value to Good360. I would definitely recommend the Berkeley Data Story team for supplemental BI and Data Science projects.”"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													"aria-hidden": "true",
													className: "mt-8 block h-px w-10 bg-forest/30"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "eyebrow mt-4 text-forest/60",
													children: "Kniffen Kelly, Sr. Director of Business Intelligence Center of Excellence at Good 360"
												})
											]
										})]
									})
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "rule-top",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "shell py-16 md:py-20",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "eyebrow flex items-center gap-3 text-forest/60",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": "true",
									className: "h-px w-8 bg-forest/30"
								}), "Additional past clients"]
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: 100,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/images/additional-past-clients.png",
									alt: "Additional Past Clients - SimpleLab, IBM, GIG Car Share, Leaf, Plan International, LifeMoves, Fingenic",
									className: "mt-12 w-full object-contain",
									loading: "lazy"
								})
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "bg-forest text-cream",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "shell py-24 md:py-32",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "display-lg max-w-3xl text-cream",
								children: "Have a project in mind?"
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: 120,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-12",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/contact",
										className: "group inline-flex items-center gap-3 bg-cream px-7 py-3.5 text-[0.8125rem] font-medium uppercase tracking-[0.14em] text-forest transition-colors duration-300 hover:bg-white",
										children: ["Work with DataStory", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											"aria-hidden": "true",
											className: "transition-transform duration-300 group-hover:translate-x-1",
											children: "→"
										})]
									})
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
export { ProjectsPage as component };
