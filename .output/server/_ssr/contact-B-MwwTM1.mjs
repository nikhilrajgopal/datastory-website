import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as SiteFooter, r as SiteHeader, t as Reveal } from "./site-header-C2WRJh7j.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-B-MwwTM1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FIELD = "w-full border-0 border-b border-border bg-transparent px-0 py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-forest";
var LABEL = "eyebrow text-forest/60";
function ContactPage() {
	const [sent, setSent] = (0, import_react.useState)(false);
	const [form, setForm] = (0, import_react.useState)({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		type: "",
		message: ""
	});
	function handleSubmit(e) {
		e.preventDefault();
		const body = [
			`Name: ${form.firstName} ${form.lastName}`,
			`Email: ${form.email}`,
			form.phone ? `Phone: ${form.phone}` : "",
			form.type ? `I am a: ${form.type}` : "",
			"",
			form.message
		].filter(Boolean).join("\n");
		window.location.href = `mailto:datastory.president@gmail.com?subject=${encodeURIComponent(`Message from ${form.firstName} ${form.lastName}`)}&body=${encodeURIComponent(body)}`;
		setSent(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "bg-forest text-cream",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "shell pb-20 pt-36 md:pb-28 md:pt-44",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-cream/70",
							children: "Get in touch"
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 120,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "display-xl mt-6 max-w-4xl text-cream",
								children: "Leave us a message!"
							})
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "section-y",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "shell grid gap-14 md:grid-cols-12 md:gap-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "md:col-span-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "eyebrow flex items-center gap-3 text-forest/60",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"aria-hidden": "true",
										className: "h-px w-8 bg-forest/30"
									}), "Contact"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "mailto:datastory.president@gmail.com",
									className: "link-underline mt-8 inline-block font-serif text-2xl text-forest",
									children: "datastory.president@gmail.com"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-8 max-w-sm text-base leading-relaxed text-muted-foreground",
									children: "University of California, Berkeley"
								})
							] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "md:col-span-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: 120,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
									onSubmit: handleSubmit,
									className: "grid gap-10 sm:grid-cols-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: LABEL,
											htmlFor: "firstName",
											children: "First name*"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: "firstName",
											required: true,
											value: form.firstName,
											onChange: (e) => setForm({
												...form,
												firstName: e.target.value
											}),
											className: FIELD
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: LABEL,
											htmlFor: "lastName",
											children: "Last name*"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: "lastName",
											required: true,
											value: form.lastName,
											onChange: (e) => setForm({
												...form,
												lastName: e.target.value
											}),
											className: FIELD
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: LABEL,
											htmlFor: "email",
											children: "Email*"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: "email",
											type: "email",
											required: true,
											value: form.email,
											onChange: (e) => setForm({
												...form,
												email: e.target.value
											}),
											className: FIELD
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: LABEL,
											htmlFor: "phone",
											children: "Phone"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: "phone",
											type: "tel",
											value: form.phone,
											onChange: (e) => setForm({
												...form,
												phone: e.target.value
											}),
											className: FIELD
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "sm:col-span-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: LABEL,
												htmlFor: "type",
												children: "I am a"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
												id: "type",
												value: form.type,
												onChange: (e) => setForm({
													...form,
													type: e.target.value
												}),
												className: FIELD,
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "",
														children: "Select an option"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "Startup",
														children: "Startup"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "Non-profit",
														children: "Non-profit"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "Corporation",
														children: "Corporation"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "Student",
														children: "Student"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "Other",
														children: "Other"
													})
												]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "sm:col-span-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: LABEL,
												htmlFor: "message",
												children: "Message"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
												id: "message",
												rows: 5,
												value: form.message,
												onChange: (e) => setForm({
													...form,
													message: e.target.value
												}),
												className: `${FIELD} resize-none`
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "sm:col-span-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "submit",
												className: "group inline-flex items-center gap-3 bg-forest px-7 py-3.5 text-[0.8125rem] font-medium uppercase tracking-[0.14em] text-cream transition-colors duration-300 hover:bg-forest-deep",
												children: ["Send message", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													"aria-hidden": "true",
													className: "transition-transform duration-300 group-hover:translate-x-1",
													children: "→"
												})]
											}), sent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-6 text-sm text-muted-foreground",
												children: "Your email draft is open — send it and we'll get back to you soon."
											})]
										})
									]
								})
							})
						})]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { ContactPage as component };
