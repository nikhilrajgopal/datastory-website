import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CogC0H6t.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-lwJ-BGc8.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$7 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "DataStory at Berkeley — Student Data Science Consulting" },
			{
				name: "description",
				content: "DataStory at Berkeley is a student consulting group delivering data science, machine learning, and software solutions for startups, non-profits, and corporations."
			},
			{
				name: "author",
				content: "DataStory at Berkeley"
			},
			{
				property: "og:title",
				content: "DataStory at Berkeley"
			},
			{
				property: "og:description",
				content: "Student-led data science and software consulting at UC Berkeley."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}, {
			rel: "icon",
			href: "/images/website_favicon.png",
			type: "image/png"
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$7.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$6 = () => import("./routes-DojFlmEX.mjs");
var SITE$6 = "https://data-story-unified.lovable.app";
var Route$6 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "DataStory at Berkeley — Data Science & Software Consulting" },
			{
				name: "description",
				content: "DataStory is a student-led data science and software consulting organization at UC Berkeley, building community through real client work."
			},
			{
				property: "og:title",
				content: "DataStory at Berkeley — Data Science & Software Consulting"
			},
			{
				property: "og:description",
				content: "A premier student-led organization at UC Berkeley delivering data science and software consulting for startups, non-profits, and corporations."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: `${SITE$6}/`
			},
			{
				property: "og:image",
				content: `${SITE$6}/images/spring-26-fullclub.jpg`
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:image",
				content: `${SITE$6}/images/spring-26-fullclub.jpg`
			}
		],
		links: [{
			rel: "canonical",
			href: `${SITE$6}/`
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Organization",
				name: "DataStory at Berkeley",
				url: SITE$6,
				logo: `${SITE$6}/images/datastory-logo.png`,
				email: "datastory.president@gmail.com",
				description: "A student-led data science and software consulting organization at UC Berkeley.",
				sameAs: ["https://www.linkedin.com/company/datastoryconsulting/", "https://www.instagram.com/datastoryberkeley/"]
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./about-Do1njiQi.mjs");
var SITE$5 = "https://data-story-unified.lovable.app";
var Route$5 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: "About DataStory at Berkeley — Vision, Impact, Evolution" },
			{
				name: "description",
				content: "DataStory empowers UC Berkeley students with the skills and experience to solve real-world problems through data science, software, and consulting."
			},
			{
				property: "og:title",
				content: "About DataStory at Berkeley"
			},
			{
				property: "og:description",
				content: "Our vision, impact, and evolution — how DataStory builds consultants and delivers value for startups, non-profits, and corporations."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: `${SITE$5}/about`
			},
			{
				property: "og:image",
				content: `${SITE$5}/images/new-mems-sitting-sp26.jpg`
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:image",
				content: `${SITE$5}/images/new-mems-sitting-sp26.jpg`
			}
		],
		links: [{
			rel: "canonical",
			href: `${SITE$5}/about`
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./apply-D1DJetpi.mjs");
var SITE$4 = "https://data-story-unified.lovable.app";
var Route$4 = createFileRoute("/apply")({
	head: () => ({
		meta: [
			{ title: "Apply — Join DataStory at Berkeley" },
			{
				name: "description",
				content: "Applications for DataStory at Berkeley are open for Fall 2026. Join us for infosessions, Women's Night, and submit your application by September 3."
			},
			{
				property: "og:title",
				content: "Apply — Join DataStory at Berkeley"
			},
			{
				property: "og:description",
				content: "Fall 2026 applications open soon. Attend our infosessions and apply by September 3."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: `${SITE$4}/apply`
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: `${SITE$4}/apply`
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./contact-B-MwwTM1.mjs");
var SITE$3 = "https://data-story-unified.lovable.app";
var Route$3 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Contact — Work With DataStory at Berkeley" },
			{
				name: "description",
				content: "Get in touch with DataStory at Berkeley. Startups, non-profits, corporations, and students can reach us at datastory.president@gmail.com."
			},
			{
				property: "og:title",
				content: "Contact — DataStory at Berkeley"
			},
			{
				property: "og:description",
				content: "Leave us a message to discuss a data science, software, or analytics consulting project."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: `${SITE$3}/contact`
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: `${SITE$3}/contact`
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./development-DviQfVCg.mjs");
var SITE$2 = "https://data-story-unified.lovable.app";
var Route$2 = createFileRoute("/development")({
	head: () => ({
		meta: [
			{ title: "Professional Development — DataStory at Berkeley" },
			{
				name: "description",
				content: "How DataStory members grow: the Junior Consultant Program, workshops, case competitions, alumni panels, awards, and alumni spotlights."
			},
			{
				property: "og:title",
				content: "Professional Development — DataStory at Berkeley"
			},
			{
				property: "og:description",
				content: "The Junior Consultant Program, workshops, competitions, and panels that develop DataStory consultants."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: `${SITE$2}/development`
			},
			{
				property: "og:image",
				content: `${SITE$2}/images/sp26-walking.jpg`
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:image",
				content: `${SITE$2}/images/sp26-walking.jpg`
			}
		],
		links: [{
			rel: "canonical",
			href: `${SITE$2}/development`
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./projects-BDh4Yzde.mjs");
var SITE$1 = "https://data-story-unified.lovable.app";
var Route$1 = createFileRoute("/projects")({
	head: () => ({
		meta: [
			{ title: "Projects — DataStory at Berkeley Client Work" },
			{
				name: "description",
				content: "Client work from DataStory at Berkeley: data engineering, machine learning, dashboards, and LLM tooling for Aflac, Oracle, Selector, UNICEF, EA, Seagate, and more."
			},
			{
				property: "og:title",
				content: "Projects — DataStory at Berkeley"
			},
			{
				property: "og:description",
				content: "Recent and past consulting projects delivered by DataStory teams for startups, non-profits, and corporations."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: `${SITE$1}/projects`
			},
			{
				property: "og:image",
				content: `${SITE$1}/images/our-work-hero-new.jpeg`
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:image",
				content: `${SITE$1}/images/our-work-hero-new.jpeg`
			}
		],
		links: [{
			rel: "canonical",
			href: `${SITE$1}/projects`
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./team-DJY2glDS.mjs");
var SITE = "https://data-story-unified.lovable.app";
var Route = createFileRoute("/team")({
	head: () => ({
		meta: [
			{ title: "Our Team — DataStory at Berkeley Members" },
			{
				name: "description",
				content: "Meet the DataStory at Berkeley executive board, consultants, and senior advisors — students across data science, statistics, computer science, and economics."
			},
			{
				property: "og:title",
				content: "Our Team — DataStory at Berkeley"
			},
			{
				property: "og:description",
				content: "The executive board, consultants, and senior advisors behind DataStory at Berkeley."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: `${SITE}/team`
			},
			{
				property: "og:image",
				content: `${SITE}/images/spring-26-fullclub.jpg`
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:image",
				content: `${SITE}/images/spring-26-fullclub.jpg`
			}
		],
		links: [{
			rel: "canonical",
			href: `${SITE}/team`
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$6.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$7
	}),
	AboutRoute: Route$5.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$7
	}),
	ApplyRoute: Route$4.update({
		id: "/apply",
		path: "/apply",
		getParentRoute: () => Route$7
	}),
	ContactRoute: Route$3.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$7
	}),
	DevelopmentRoute: Route$2.update({
		id: "/development",
		path: "/development",
		getParentRoute: () => Route$7
	}),
	ProjectsRoute: Route$1.update({
		id: "/projects",
		path: "/projects",
		getParentRoute: () => Route$7
	}),
	TeamRoute: Route.update({
		id: "/team",
		path: "/team",
		getParentRoute: () => Route$7
	})
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
