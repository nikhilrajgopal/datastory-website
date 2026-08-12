import { useEffect, useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Instagram, Linkedin, Mail } from "lucide-react";
//#region src/components/reveal.tsx
function Reveal({ children, as: Tag = "div", delay = 0, className = "" }) {
	const ref = useRef(null);
	const [shown, setShown] = useState(false);
	const [instant, setInstant] = useState(false);
	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const rect = el.getBoundingClientRect();
		if (rect.top < window.innerHeight * .9 && rect.bottom > 0) {
			setInstant(true);
			setShown(true);
			return;
		}
		const observer = new IntersectionObserver((entries) => {
			for (const entry of entries) if (entry.isIntersecting) {
				setShown(true);
				observer.disconnect();
			}
		}, {
			rootMargin: "0px 0px -8% 0px",
			threshold: .01
		});
		observer.observe(el);
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ jsx(Tag, {
		ref,
		style: delay && !instant ? { transitionDelay: `${delay}ms` } : void 0,
		className: `reveal ${instant ? "reveal-instant" : ""} ${shown ? "is-revealed" : ""} ${className}`,
		children
	});
}
//#endregion
//#region src/components/site-footer.tsx
var LINKS = [
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/projects",
		label: "Projects"
	},
	{
		to: "/development",
		label: "Development"
	},
	{
		to: "/team",
		label: "Our Team"
	},
	{
		to: "/contact",
		label: "Contact"
	},
	{
		to: "/apply",
		label: "Apply Now"
	}
];
function SiteFooter() {
	return /* @__PURE__ */ jsx("footer", {
		className: "rule-top bg-background",
		children: /* @__PURE__ */ jsxs("div", {
			className: "shell py-16 md:py-24",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "grid gap-12 md:grid-cols-12",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "min-w-0 md:col-span-6",
						children: [/* @__PURE__ */ jsx("img", {
							src: "/images/datastory-logo.png",
							alt: "DataStory at Berkeley",
							width: 200,
							height: 56,
							className: "logo-forest h-9 w-auto"
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-8 max-w-md text-sm leading-relaxed text-muted-foreground",
							children: "We are a student group acting independently of the University of California. We take full responsibility for our organization and this website."
						})]
					}),
					/* @__PURE__ */ jsxs("nav", {
						className: "md:col-span-3",
						"aria-label": "Footer",
						children: [/* @__PURE__ */ jsx("p", {
							className: "eyebrow text-forest/50",
							children: "General"
						}), /* @__PURE__ */ jsx("ul", {
							className: "mt-6 space-y-3",
							children: LINKS.map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
								to: link.to,
								className: "link-underline text-sm text-forest/80 hover:text-forest",
								children: link.label
							}) }, link.to))
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "md:col-span-3",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "eyebrow text-forest/50",
								children: "Contact"
							}),
							/* @__PURE__ */ jsx("a", {
								href: "mailto:datastory.president@gmail.com",
								className: "link-underline mt-6 block text-sm text-forest/80 hover:text-forest",
								children: "datastory.president@gmail.com"
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-6 flex gap-5",
								children: [
									/* @__PURE__ */ jsx("a", {
										href: "mailto:datastory.president@gmail.com",
										"aria-label": "Email DataStory",
										className: "text-forest/70 transition-colors hover:text-forest",
										children: /* @__PURE__ */ jsx(Mail, { className: "h-5 w-5" })
									}),
									/* @__PURE__ */ jsx("a", {
										href: "https://www.linkedin.com/company/datastoryconsulting/",
										target: "_blank",
										rel: "noopener noreferrer",
										"aria-label": "DataStory on LinkedIn",
										className: "text-forest/70 transition-colors hover:text-forest",
										children: /* @__PURE__ */ jsx(Linkedin, { className: "h-5 w-5" })
									}),
									/* @__PURE__ */ jsx("a", {
										href: "https://www.instagram.com/datastoryberkeley/",
										target: "_blank",
										rel: "noopener noreferrer",
										"aria-label": "DataStory on Instagram",
										className: "text-forest/70 transition-colors hover:text-forest",
										children: /* @__PURE__ */ jsx(Instagram, { className: "h-5 w-5" })
									})
								]
							})
						]
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "rule-top mt-16 flex flex-col gap-2 pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ jsxs("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" DataStory at Berkeley. All rights reserved."
				] }), /* @__PURE__ */ jsx("p", { children: "University of California, Berkeley" })]
			})]
		})
	});
}
//#endregion
//#region src/components/site-header.tsx
var NAV = [
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/projects",
		label: "Projects"
	},
	{
		to: "/development",
		label: "Development"
	},
	{
		to: "/team",
		label: "Our Team"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function SiteHeader({ overlay = false }) {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	useEffect(() => {
		setOpen(false);
	}, [pathname]);
	const solid = !overlay || scrolled || open;
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("header", {
			className: `fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${solid ? "border-b border-border bg-background/95 backdrop-blur-sm" : "bg-transparent"}`,
			children: /* @__PURE__ */ jsxs("div", {
				className: "shell grid h-20 grid-cols-[minmax(0,1fr)_auto] items-center gap-6",
				children: [
					/* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "flex min-w-0 items-center",
						"aria-label": "DataStory at Berkeley — home",
						children: /* @__PURE__ */ jsx("img", {
							src: "/images/datastory-logo.png",
							alt: "DataStory at Berkeley",
							width: 160,
							height: 44,
							className: `h-7 w-auto shrink-0 md:h-8 ${solid ? "logo-forest" : "logo-cream"}`
						})
					}),
					/* @__PURE__ */ jsxs("nav", {
						className: "hidden items-center gap-9 lg:flex",
						"aria-label": "Primary",
						children: [NAV.map((item) => /* @__PURE__ */ jsx(Link, {
							to: item.to,
							className: `link-underline text-[0.8125rem] font-medium uppercase tracking-[0.13em] transition-colors ${solid ? "text-forest/75 hover:text-forest" : "text-cream/85 hover:text-cream"}`,
							activeProps: { className: solid ? "text-forest" : "text-cream" },
							children: item.label
						}, item.to)), /* @__PURE__ */ jsx(Link, {
							to: "/apply",
							className: `px-6 py-3 text-[0.8125rem] font-medium uppercase tracking-[0.13em] transition-colors duration-300 ${solid ? "bg-forest text-cream hover:bg-forest-deep" : "bg-cream text-forest hover:bg-white"}`,
							children: "Apply"
						})]
					}),
					/* @__PURE__ */ jsxs("button", {
						type: "button",
						onClick: () => setOpen((v) => !v),
						"aria-expanded": open,
						"aria-controls": "mobile-nav",
						"aria-label": open ? "Close menu" : "Open menu",
						className: `flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-[5px] lg:hidden ${solid ? "text-forest" : "text-cream"}`,
						children: [/* @__PURE__ */ jsx("span", { className: `h-px w-6 bg-current transition-transform duration-300 ${open ? "translate-y-[3px] rotate-45" : ""}` }), /* @__PURE__ */ jsx("span", { className: `h-px w-6 bg-current transition-transform duration-300 ${open ? "-translate-y-[3px] -rotate-45" : ""}` })]
					})
				]
			})
		}),
		/* @__PURE__ */ jsx("div", {
			id: "mobile-nav",
			className: `fixed inset-0 z-40 bg-forest text-cream transition-opacity duration-300 lg:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"}`,
			children: /* @__PURE__ */ jsx("nav", {
				className: "shell flex h-full flex-col justify-center gap-2 pb-16",
				"aria-label": "Mobile",
				children: [...NAV, {
					to: "/apply",
					label: "Apply"
				}].map((item) => /* @__PURE__ */ jsx(Link, {
					to: item.to,
					className: "display-md border-b border-cream/15 py-4 text-cream",
					children: item.label
				}, item.to))
			})
		}),
		!overlay && /* @__PURE__ */ jsx("div", {
			"aria-hidden": "true",
			className: "h-20"
		})
	] });
}
//#endregion
export { SiteFooter as n, Reveal as r, SiteHeader as t };
