import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SiteFooter, r as SiteHeader, t as Reveal } from "./site-header-C2WRJh7j.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/development-DviQfVCg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var JCP_IMAGES = [
	{
		src: "/images/fall 2025 jcp projects/casey-jcp.jpeg",
		alt: "Casey presenting a Fall 2025 Junior Consultant Program final project at the semester showcase"
	},
	{
		src: "/images/fall 2025 jcp projects/cole-alex-jcp.jpeg",
		alt: "Cole and Alex presenting their Fall 2025 Junior Consultant Program final project"
	},
	{
		src: "/images/fall 2025 jcp projects/diya-cathryn-jcp.jpeg",
		alt: "Diya and Cathryn presenting their Fall 2025 Junior Consultant Program final project"
	},
	{
		src: "/images/fall 2025 jcp projects/jayden-paulo-jcp.jpeg",
		alt: "Jayden and Paulo presenting their Fall 2025 Junior Consultant Program final project"
	},
	{
		src: "/images/fall 2025 jcp projects/kira-chiara-jcp.jpeg",
		alt: "Kira and Chiara presenting their Fall 2025 Junior Consultant Program final project"
	},
	{
		src: "/images/fall 2025 jcp projects/krishna-rohan-jcp.jpeg",
		alt: "Krishna and Rohan presenting their Fall 2025 Junior Consultant Program final project"
	}
];
var PROGRAMS = [
	{
		index: "01",
		title: "Workshops",
		body: "DataStory emphasizes the development of both technical and behavioral skills. Our Professional Development team offers interactive and comprehensive workshops throughout the semester; some club favorites include peer resume reviews and cross-validation labs.",
		image: "/images/workshop-classroom-scene.png",
		alt: "Workshop classroom scene with students and presentation"
	},
	{
		index: "02",
		title: "Competitions",
		body: "We believe that diverse, real-life experiences are invaluable for expanding professional capabilities. We form teams to participate in premier case and analytics competitions nationwide, enabling our members to compete against and learn from the best.",
		image: "/images/competition-team-mascot.png",
		alt: "DataStory competition team with Cal Hacks mascot at Berkeley hackathon"
	},
	{
		index: "03",
		title: "Panels",
		body: "We take pride in our highly successful and engaged DataStory alumni network. Our speaker events and alumni mentorship program provide our members with many opportunities to gain insight from industry professionals.",
		image: "/images/alumni-panel-discussion.jpeg",
		alt: "Alumni panel discussion with current students and alumni in classroom setting"
	}
];
var AWARDS = [
	{
		logo: "/images/kearney-logo.png",
		alt: "Kearney Logo",
		place: "1st Place",
		title: "2023 Kearney Case Competition",
		raw: false
	},
	{
		logo: "/images/milwaukee-bucks-logo-knockout.svg",
		raw: true,
		alt: "Milwaukee Bucks logo",
		place: "2nd Place",
		title: "2023 Milwaukee Bucks Analytics Competition"
	},
	{
		logo: "/images/paravel-logo.png",
		alt: "Paravel Logo",
		place: "2nd Place",
		title: "2024 Paravel Case Competition",
		raw: false
	}
];
var ALUMNI = [
	{
		name: "RYAN CHAN",
		graduatingClass: "Spring 2025",
		position: "Software Engineer at Meta",
		location: "Menlo Park, CA",
		impact: "DataStory helped me improve my professional career tremendously. I remember for my first internship half their behavioral interview questions were about my experiences at DataStory. I learned a lot of professional advice and got tons of hands on experience from a variety of consulting projects.",
		image: "/images/Ryan-chan-headshot.jpeg"
	},
	{
		name: "HAILEY HOLCOMB",
		graduatingClass: "Spring 2025",
		position: "Software Engineer at Walmart",
		location: "San Francisco, CA",
		impact: "Working on a project at school that affects more than just your personal grade is super rewarding! Doing work for DataStory is challenging in unique ways and teaches you skills that you could never learn in a class environment.",
		image: "/images/hailey-holcomb-headshot.jpeg"
	},
	{
		name: "IMAN HUNDAL",
		graduatingClass: "Fall 2024",
		position: "Data Analyst at Capital One",
		location: "Washington D.C.",
		impact: "The network of friends and connections I've built in many diverse fields within tech has been very useful and will be a great resource in the future!",
		image: "/images/iman-hundal-headshot.jpeg"
	},
	{
		name: "VICTOR SHI",
		graduatingClass: "Spring 2025",
		position: "Software Engineer at Meta",
		location: "Seattle, WA",
		impact: "DataStory helped a lot early in my career to add value to resume through project managing, being on projects, etc. Social events were a lot of fun.",
		image: "/images/victor-shi-headshot.png"
	},
	{
		name: "IRIS CHAO",
		graduatingClass: "Spring 2025",
		position: "Marketing Analyst at Adobe",
		location: "San Francisco, CA",
		impact: "DataStory showed me the positive impact that people can have on your professional and personal life. It was so motivating to be surrounded by the smartest, most talented people who push each other to achieve our academic and professional goals.",
		image: "/images/iris-chao-headshot.jpeg"
	}
];
function DevelopmentPage() {
	const [slide, setSlide] = (0, import_react.useState)(0);
	const [alum, setAlum] = (0, import_react.useState)(0);
	const [expanded, setExpanded] = (0, import_react.useState)(false);
	const [slidePaused, setSlidePaused] = (0, import_react.useState)(false);
	const [alumPaused, setAlumPaused] = (0, import_react.useState)(false);
	const [reduceMotion, setReduceMotion] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
		const update = () => setReduceMotion(mq.matches);
		update();
		mq.addEventListener("change", update);
		return () => mq.removeEventListener("change", update);
	}, []);
	(0, import_react.useEffect)(() => {
		if (slidePaused || reduceMotion) return;
		const id = setInterval(() => setSlide((s) => (s + 1) % JCP_IMAGES.length), 7e3);
		return () => clearInterval(id);
	}, [slidePaused, reduceMotion]);
	(0, import_react.useEffect)(() => {
		if (alumPaused || reduceMotion) return;
		const id = setInterval(() => setAlum((a) => (a + 1) % ALUMNI.length), 12e3);
		return () => clearInterval(id);
	}, [alumPaused, reduceMotion]);
	const person = ALUMNI[alum] ?? ALUMNI[0];
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
								src: "/images/sp26-walking.jpg",
								alt: "DataStory Spring 2026 members walking - How We Grow",
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
									children: "How we grow"
								}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									delay: 120,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
										className: "display-xl mt-6 max-w-4xl text-cream",
										children: "Development"
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
								}), "Junior Consultant Program"]
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-14 grid gap-14 md:grid-cols-12 md:gap-16",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 md:col-span-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "display-md text-forest",
											children: "What is JCP?"
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
											delay: 100,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "lede mt-8",
												children: "The Junior Consultant Program (JCP) is a semester-long training and mentorship program designed for members with limited prior experience in data science or consulting. Participants develop core technical and professional skills through weekly workshops covering topics such as pandas, data cleaning, visualization, modeling, and applied tools like Streamlit."
											})
										}),
										expanded && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground",
											children: "Junior Consultants also complete a final project of their choice, applying these skills end-to-end and presenting their work at the semester Project Showcase. The program serves as a structured pathway into the club's consulting teams, with most members completing one semester in JCP before transitioning into full consultant roles."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
											delay: 160,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-10 flex flex-wrap items-center gap-8",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => setExpanded((v) => !v),
													className: "link-underline text-[0.8125rem] font-medium uppercase tracking-[0.14em] text-forest",
													children: expanded ? "Read less" : "Read more"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													href: "/images/JCP flyers.png",
													target: "_blank",
													rel: "noopener noreferrer",
													className: "link-underline text-[0.8125rem] font-medium uppercase tracking-[0.14em] text-forest",
													children: "See JCP flyer →"
												})]
											})
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "min-w-0 md:col-span-6",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
										delay: 80,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "eyebrow text-forest/50",
												children: "Past JCP projects"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "img-zoom relative mt-6 h-[300px] w-full md:h-[420px]",
												children: JCP_IMAGES.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: item.src,
													alt: item.alt,
													loading: "lazy",
													"aria-hidden": i === slide ? void 0 : true,
													className: `absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${i === slide ? "opacity-100" : "opacity-0"}`
												}, item.src))
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-6 flex flex-wrap items-center gap-x-4 gap-y-3 sm:gap-6",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "flex flex-wrap gap-2 sm:gap-3",
													children: JCP_IMAGES.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														onClick: () => setSlide(i),
														"aria-label": `Show JCP project ${i + 1} of ${JCP_IMAGES.length}`,
														"aria-current": i === slide,
														className: `h-4 w-10 border-y-[7px] border-transparent bg-clip-content transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-forest/50 ${i === slide ? "bg-forest" : "bg-forest/25"}`
													}, item.src))
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => setSlidePaused((v) => !v),
													"aria-pressed": slidePaused,
													className: "link-underline text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-forest/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-forest/50",
													children: slidePaused ? "Play" : "Pause"
												})]
											})
										]
									})
								})]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "rule-top",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "shell",
							children: PROGRAMS.map((program, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								tabIndex: 0,
								className: "card-quiet group grid items-center gap-10 border-b border-border px-4 py-14 md:grid-cols-12 md:gap-14 md:px-6 md:py-20",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "eyebrow text-forest/40 md:col-span-1",
										children: program.index
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: `min-w-0 md:col-span-6 ${i % 2 === 1 ? "md:order-2" : ""}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "display-md text-forest",
											children: program.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-6 max-w-xl text-base leading-relaxed text-muted-foreground",
											children: program.body
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: `img-zoom md:col-span-5 ${i % 2 === 1 ? "md:order-1" : ""}`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: program.image,
											alt: program.alt,
											className: "aspect-[4/3] w-full object-cover",
											loading: "lazy"
										})
									})
								]
							}) }, program.title))
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
								}), "Awards"]
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-14 grid gap-6 md:grid-cols-3",
								children: AWARDS.map((award, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									delay: i * 80,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
										tabIndex: 0,
										className: "card-quiet-dark group flex h-full flex-col border border-cream/20 p-7 md:p-8",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex h-20 items-center sm:w-fit",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: award.logo,
													alt: award.alt,
													className: `w-auto object-contain transition-transform duration-500 ease-out group-hover:scale-[1.04] ${award.raw ? "max-h-12 opacity-95" : "logo-knockout max-h-6 max-w-[140px]"}`,
													loading: "lazy"
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "display-sm mt-8 text-cream",
												children: award.place
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-3 text-base leading-relaxed text-cream/75",
												children: award.title
											})
										]
									})
								}, award.title))
							})]
						})
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
								}), "Alumni spotlight"]
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-14 grid gap-12 md:grid-cols-12 md:gap-16",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "img-zoom md:col-span-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: person.image,
										alt: person.name,
										className: "aspect-[4/5] w-full object-cover",
										loading: "lazy"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex min-w-0 flex-col md:col-span-8",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
												className: "display-md text-forest",
												children: person.name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
												className: "mt-8 grid gap-6 border-t border-border pt-8 sm:grid-cols-3",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
														className: "eyebrow text-forest/50",
														children: "Graduating class"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
														className: "mt-3 text-sm text-foreground",
														children: person.graduatingClass
													})] }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
														className: "eyebrow text-forest/50",
														children: "Current position"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
														className: "mt-3 text-sm text-foreground",
														children: person.position
													})] }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
														className: "eyebrow text-forest/50",
														children: "Location"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
														className: "mt-3 text-sm text-foreground",
														children: person.location
													})] })
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "eyebrow mt-10 text-forest/50",
												children: "Most impactful moment in DataStory"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-5 min-h-[13rem] sm:min-h-[10.5rem] md:min-h-[9.5rem]",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
													className: "lede max-w-2xl",
													children: person.impact
												})
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-10 flex flex-wrap items-center gap-x-6 gap-y-4",
										onKeyDown: (e) => {
											if (e.key === "ArrowLeft") {
												e.preventDefault();
												setAlum((a) => (a - 1 + ALUMNI.length) % ALUMNI.length);
											} else if (e.key === "ArrowRight") {
												e.preventDefault();
												setAlum((a) => (a + 1) % ALUMNI.length);
											}
										},
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-4",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														onClick: () => setAlum((a) => (a - 1 + ALUMNI.length) % ALUMNI.length),
														"aria-label": "Previous alumni spotlight",
														className: "text-lg leading-none text-forest/70 transition-colors hover:text-forest focus:outline-none focus-visible:ring-2 focus-visible:ring-forest/50",
														children: "←"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "eyebrow text-forest/60",
														children: [
															String(alum + 1).padStart(2, "0"),
															" / ",
															String(ALUMNI.length).padStart(2, "0")
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														onClick: () => setAlum((a) => (a + 1) % ALUMNI.length),
														"aria-label": "Next alumni spotlight",
														className: "text-lg leading-none text-forest/70 transition-colors hover:text-forest focus:outline-none focus-visible:ring-2 focus-visible:ring-forest/50",
														children: "→"
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex flex-wrap gap-2 sm:gap-3",
												children: ALUMNI.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => setAlum(i),
													title: a.name,
													"aria-label": `Show alumni spotlight: ${a.name}`,
													"aria-current": i === alum,
													className: `h-4 w-8 border-y-[7px] border-transparent bg-clip-content transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-forest/50 sm:w-10 ${i === alum ? "bg-forest" : "bg-forest/25 hover:bg-forest/50"}`
												}, a.name))
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => setAlumPaused((v) => !v),
												"aria-pressed": alumPaused,
												className: "link-underline text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-forest/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-forest/50",
												children: alumPaused ? "Play" : "Pause"
											})
										]
									})]
								})]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "bg-cream-soft",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "shell py-20 md:py-28",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "display-lg max-w-3xl text-forest",
								children: "Start your data science journey."
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: 120,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-12",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/apply",
										className: "group inline-flex items-center gap-3 bg-forest px-7 py-3.5 text-[0.8125rem] font-medium uppercase tracking-[0.14em] text-cream transition-colors duration-300 hover:bg-forest-deep",
										children: ["Join DataStory", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
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
export { DevelopmentPage as component };
