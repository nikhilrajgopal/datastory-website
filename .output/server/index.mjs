globalThis.__nitro_main__ = import.meta.url;
import { n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-08-11T18:14:05.663Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/assets/about-BfmhApJm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"19a4-oa+XNfxS7cGKbBa/QClT0oep60U\"",
		"mtime": "2026-08-11T18:14:05.333Z",
		"size": 6564,
		"path": "../public/assets/about-BfmhApJm.js"
	},
	"/assets/apply-ChhqmA3O.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1db6-c5xZF2fFn+b6vG57J5dscbWFp8k\"",
		"mtime": "2026-08-11T18:14:05.333Z",
		"size": 7606,
		"path": "../public/assets/apply-ChhqmA3O.js"
	},
	"/assets/development-NZP_Pc05.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3c9a-M6DoXbNHJwCrxk5ldMvqypp14QQ\"",
		"mtime": "2026-08-11T18:14:05.333Z",
		"size": 15514,
		"path": "../public/assets/development-NZP_Pc05.js"
	},
	"/assets/contact-Bg6zXFQc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1209-uYkQv1+xkO2EXS5srScg44c8hEU\"",
		"mtime": "2026-08-11T18:14:05.333Z",
		"size": 4617,
		"path": "../public/assets/contact-Bg6zXFQc.js"
	},
	"/assets/projects-CeEu6CK6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3ec7-pLllr2ZnP+et8GZ+LhfENuENaeA\"",
		"mtime": "2026-08-11T18:14:05.333Z",
		"size": 16071,
		"path": "../public/assets/projects-CeEu6CK6.js"
	},
	"/assets/routes-C6_gtoqp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"329d-8/Vm1DNiJuBFGtJjJyWJkS6mLTE\"",
		"mtime": "2026-08-11T18:14:05.333Z",
		"size": 12957,
		"path": "../public/assets/routes-C6_gtoqp.js"
	},
	"/assets/site-header-DfV4C9MH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1f40-SQC26ze55EJajw9lPlgN790eM6Y\"",
		"mtime": "2026-08-11T18:14:05.334Z",
		"size": 8e3,
		"path": "../public/assets/site-header-DfV4C9MH.js"
	},
	"/assets/team-ByFdk-Ur.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"314c-ej+kkNxUGO+HpwJtzXPwMW0VZsA\"",
		"mtime": "2026-08-11T18:14:05.334Z",
		"size": 12620,
		"path": "../public/assets/team-ByFdk-Ur.js"
	},
	"/assets/index-CBnKyjPr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5662d-YkJptTnnLNuV617a48I6OqgHG50\"",
		"mtime": "2026-08-11T18:14:05.332Z",
		"size": 353837,
		"path": "../public/assets/index-CBnKyjPr.js"
	},
	"/assets/styles-lwJ-BGc8.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"185aa-8JS367apsUrltJJ81Jrt42VjQuU\"",
		"mtime": "2026-08-11T18:14:05.334Z",
		"size": 99754,
		"path": "../public/assets/styles-lwJ-BGc8.css"
	},
	"/images/2026-community-pic.jpg": {
		"type": "image/jpeg",
		"etag": "\"4616c-gQmgAVs8VMHAos+/xMQAguSft0w\"",
		"mtime": "2026-08-11T18:14:05.629Z",
		"size": 287084,
		"path": "../public/images/2026-community-pic.jpg"
	},
	"/images/Aflac-logo.png": {
		"type": "image/png",
		"etag": "\"153a8-BLuv313PEvtNb+YKH0SrU4nFdxY\"",
		"mtime": "2026-08-11T18:14:05.633Z",
		"size": 86952,
		"path": "../public/images/Aflac-logo.png"
	},
	"/images/Oracle-Logo.png": {
		"type": "image/png",
		"etag": "\"d31a-CxHPWAw3FV1KmHsLGRWrPGkL5Eo\"",
		"mtime": "2026-08-11T18:14:05.630Z",
		"size": 54042,
		"path": "../public/images/Oracle-Logo.png"
	},
	"/images/Ryan-chan-headshot.jpeg": {
		"type": "image/jpeg",
		"etag": "\"584c6-8HJmCWu6UvNceiV1LQ9qf6gf5xM\"",
		"mtime": "2026-08-11T18:14:05.637Z",
		"size": 361670,
		"path": "../public/images/Ryan-chan-headshot.jpeg"
	},
	"/images/akshay-anand-headshot.jpeg": {
		"type": "image/jpeg",
		"etag": "\"8af0-NqyhJ3upngaU47W/dFkpXOujzpU\"",
		"mtime": "2026-08-11T18:14:05.636Z",
		"size": 35568,
		"path": "../public/images/akshay-anand-headshot.jpeg"
	},
	"/images/additional-past-clients.png": {
		"type": "image/png",
		"etag": "\"3360b-9aks8p1/OA2r2HzuNtMlY7+vzkc\"",
		"mtime": "2026-08-11T18:14:05.631Z",
		"size": 210443,
		"path": "../public/images/additional-past-clients.png"
	},
	"/images/arav-sachdeva-headshot.jpeg": {
		"type": "image/jpeg",
		"etag": "\"4b60-Q/Fp6NPcjP5tvoYpyTQQAclKBME\"",
		"mtime": "2026-08-11T18:14:05.632Z",
		"size": 19296,
		"path": "../public/images/arav-sachdeva-headshot.jpeg"
	},
	"/images/alexander-zhao-headshot.jpg": {
		"type": "image/jpeg",
		"etag": "\"29f64-SWwdzK2ZT2Nm2ZsxLWfX48fg/FQ\"",
		"mtime": "2026-08-11T18:14:05.631Z",
		"size": 171876,
		"path": "../public/images/alexander-zhao-headshot.jpg"
	},
	"/images/arjun-kelkar-headshot.png": {
		"type": "image/png",
		"etag": "\"304ec-7YAD5qY4/d3kjRo6JnbeguSwMPg\"",
		"mtime": "2026-08-11T18:14:05.634Z",
		"size": 197868,
		"path": "../public/images/arjun-kelkar-headshot.png"
	},
	"/images/anthony-kobzar-headshot.jpg": {
		"type": "image/jpeg",
		"etag": "\"3ee73-Sr+zhti8IOpyqiLLIQYa/u5xQQg\"",
		"mtime": "2026-08-11T18:14:05.632Z",
		"size": 257651,
		"path": "../public/images/anthony-kobzar-headshot.jpg"
	},
	"/images/avyukth-harish-headshot.jpg": {
		"type": "image/jpeg",
		"etag": "\"36420-An/IR0xXPwPRvXgyJqq51nannF0\"",
		"mtime": "2026-08-11T18:14:05.636Z",
		"size": 222240,
		"path": "../public/images/avyukth-harish-headshot.jpg"
	},
	"/images/alumni-panel-discussion.jpeg": {
		"type": "image/jpeg",
		"etag": "\"57fc9-TVNDvAOiYwJiR8ReN/Uhb8onsq8\"",
		"mtime": "2026-08-11T18:14:05.632Z",
		"size": 360393,
		"path": "../public/images/alumni-panel-discussion.jpeg"
	},
	"/images/JCP flyers.png": {
		"type": "image/png",
		"etag": "\"85dbd-wa0JFzY6r+HfO/2JpKi8FMdk/4w\"",
		"mtime": "2026-08-11T18:14:05.631Z",
		"size": 548285,
		"path": "../public/images/JCP flyers.png"
	},
	"/images/about-vision-impact-evolution.png": {
		"type": "image/png",
		"etag": "\"10c73e-CGmSIfLL/gb1Xhr/tX+lDTQzyMQ\"",
		"mtime": "2026-08-11T18:14:05.632Z",
		"size": 1099582,
		"path": "../public/images/about-vision-impact-evolution.png"
	},
	"/images/chat-sp26.jpg": {
		"type": "image/jpeg",
		"etag": "\"1983b-8nyblT9axwg+JdXPgrSEVawbV30\"",
		"mtime": "2026-08-11T18:14:05.639Z",
		"size": 104507,
		"path": "../public/images/chat-sp26.jpg"
	},
	"/images/bucks-comp-img.avif": {
		"type": "image/avif",
		"etag": "\"8faa-NRjV3UWBJat8QOQJos9rr/so2Tc\"",
		"mtime": "2026-08-11T18:14:05.633Z",
		"size": 36778,
		"path": "../public/images/bucks-comp-img.avif"
	},
	"/images/cathryn-chang-headshot.jpg": {
		"type": "image/jpeg",
		"etag": "\"1fe21-FsoGvuTTk7zNVBi3UzBDjyJa0o8\"",
		"mtime": "2026-08-11T18:14:05.639Z",
		"size": 130593,
		"path": "../public/images/cathryn-chang-headshot.jpg"
	},
	"/images/cole-dickerson-headshot.jpg": {
		"type": "image/jpeg",
		"etag": "\"8bca-W3tBG/Ck0FqvuEVLcvjJHNtNy+w\"",
		"mtime": "2026-08-11T18:14:05.639Z",
		"size": 35786,
		"path": "../public/images/cole-dickerson-headshot.jpg"
	},
	"/images/casey-colson-headshot.JPEG": {
		"type": "image/jpeg",
		"etag": "\"37c25-6A+Nk2LLDKaT0Kapv7rRBg3pdKg\"",
		"mtime": "2026-08-11T18:14:05.636Z",
		"size": 228389,
		"path": "../public/images/casey-colson-headshot.JPEG"
	},
	"/images/datastory-logo.png": {
		"type": "image/png",
		"etag": "\"518b-wXcoYZs4xlQy4MnfXPEuIcRb6aQ\"",
		"mtime": "2026-08-11T18:14:05.640Z",
		"size": 20875,
		"path": "../public/images/datastory-logo.png"
	},
	"/images/chiara-rignot-headshot.jpg": {
		"type": "image/jpeg",
		"etag": "\"36ae1-/8QKMEi/SlCJmmUB2W+I+Zl6uaM\"",
		"mtime": "2026-08-11T18:14:05.640Z",
		"size": 223969,
		"path": "../public/images/chiara-rignot-headshot.jpg"
	},
	"/images/dennis-vengerov-headshot.jpg": {
		"type": "image/jpeg",
		"etag": "\"4034-fDvhXqEqflJz6TG6RKjSFKjZRfs\"",
		"mtime": "2026-08-11T18:14:05.640Z",
		"size": 16436,
		"path": "../public/images/dennis-vengerov-headshot.jpg"
	},
	"/images/dhruv-hebbar-headshot.jpeg": {
		"type": "image/jpeg",
		"etag": "\"595a-QmAlqzg61KIThL741LrvRg/iPeA\"",
		"mtime": "2026-08-11T18:14:05.641Z",
		"size": 22874,
		"path": "../public/images/dhruv-hebbar-headshot.jpeg"
	},
	"/images/ea-logo.png": {
		"type": "image/png",
		"etag": "\"62f5-mK7iEbBq7e7y3rqzhz8YW9Q1YPM\"",
		"mtime": "2026-08-11T18:14:05.643Z",
		"size": 25333,
		"path": "../public/images/ea-logo.png"
	},
	"/images/comprehensive-company-logos.png": {
		"type": "image/png",
		"etag": "\"6b7ca-k3ThYd2mdlQV4cV2Gbbg+mysQc4\"",
		"mtime": "2026-08-11T18:14:05.644Z",
		"size": 440266,
		"path": "../public/images/comprehensive-company-logos.png"
	},
	"/images/education-trust-logo-updated.png": {
		"type": "image/png",
		"etag": "\"2844-fZLqbtvZP+wvTQB5BR4wuB6RI6k\"",
		"mtime": "2026-08-11T18:14:05.644Z",
		"size": 10308,
		"path": "../public/images/education-trust-logo-updated.png"
	},
	"/images/epri-logo.png": {
		"type": "image/png",
		"etag": "\"4045-CwI8KN+zoVTQ+/ttRxyzD6pb9tM\"",
		"mtime": "2026-08-11T18:14:05.644Z",
		"size": 16453,
		"path": "../public/images/epri-logo.png"
	},
	"/images/ethan-wei-headshot.jpeg": {
		"type": "image/jpeg",
		"etag": "\"663d-iGaw/wra9fnCBXauO35TANCc734\"",
		"mtime": "2026-08-11T18:14:05.644Z",
		"size": 26173,
		"path": "../public/images/ethan-wei-headshot.jpeg"
	},
	"/images/diya-pendyala-headshot.jpg": {
		"type": "image/jpeg",
		"etag": "\"28aac-/WSYOUDr4HQsL5Dd/2lUi+1eEsI\"",
		"mtime": "2026-08-11T18:14:05.644Z",
		"size": 166572,
		"path": "../public/images/diya-pendyala-headshot.jpg"
	},
	"/images/exec-railing-sp26.jpg": {
		"type": "image/jpeg",
		"etag": "\"21cc0-7L2ZWCHfFeZ43CPuoauQ7ysleuE\"",
		"mtime": "2026-08-11T18:14:05.645Z",
		"size": 138432,
		"path": "../public/images/exec-railing-sp26.jpg"
	},
	"/images/farmlink-project-logo.png": {
		"type": "image/png",
		"etag": "\"11d83-fQZh7yT8Aw0dr53UTliqucEez5w\"",
		"mtime": "2026-08-11T18:14:05.645Z",
		"size": 73091,
		"path": "../public/images/farmlink-project-logo.png"
	},
	"/images/good360-logo.png": {
		"type": "image/png",
		"etag": "\"13146-FbouS+nKh6EMVufWVf2VOl33ViE\"",
		"mtime": "2026-08-11T18:14:05.646Z",
		"size": 78150,
		"path": "../public/images/good360-logo.png"
	},
	"/images/evolution new.png": {
		"type": "image/png",
		"etag": "\"4dcd9-YMt8CZ1KMiXkBcVrOz5kBgobDoI\"",
		"mtime": "2026-08-11T18:14:05.645Z",
		"size": 318681,
		"path": "../public/images/evolution new.png"
	},
	"/images/competition-team-mascot.png": {
		"type": "image/png",
		"etag": "\"b52e3-+3oYMlYw1JGFBOByKoetBkwF8Pc\"",
		"mtime": "2026-08-11T18:14:05.642Z",
		"size": 742115,
		"path": "../public/images/competition-team-mascot.png"
	},
	"/images/hannah-chung-headshot.jpeg": {
		"type": "image/jpeg",
		"etag": "\"5806-xSkuUW7ZZffUnxAEzJBUAFCtDoY\"",
		"mtime": "2026-08-11T18:14:05.653Z",
		"size": 22534,
		"path": "../public/images/hannah-chung-headshot.jpeg"
	},
	"/images/divya-madgula-headshot.png": {
		"type": "image/png",
		"etag": "\"dc8e1-i6YPt6Y9h2NAptIz2KReETkxFQg\"",
		"mtime": "2026-08-11T18:14:05.644Z",
		"size": 903393,
		"path": "../public/images/divya-madgula-headshot.png"
	},
	"/images/hasset-mekuria-headshot.jpeg": {
		"type": "image/jpeg",
		"etag": "\"582a-D6KX8K7QvJsEMfasO5wvf2+vIjo\"",
		"mtime": "2026-08-11T18:14:05.645Z",
		"size": 22570,
		"path": "../public/images/hasset-mekuria-headshot.jpeg"
	},
	"/images/hailey-holcomb-headshot.jpeg": {
		"type": "image/jpeg",
		"etag": "\"4a03e-H8KP0SwwG2PLwk5qxxjpz68CHm8\"",
		"mtime": "2026-08-11T18:14:05.646Z",
		"size": 303166,
		"path": "../public/images/hailey-holcomb-headshot.jpeg"
	},
	"/images/himani-balaga-headshot.png": {
		"type": "image/png",
		"etag": "\"28d80-LSifPm+nsQ7LSgxHWM/BLES7TGw\"",
		"mtime": "2026-08-11T18:14:05.646Z",
		"size": 167296,
		"path": "../public/images/himani-balaga-headshot.png"
	},
	"/images/iman-hundal-headshot.jpeg": {
		"type": "image/jpeg",
		"etag": "\"100f4-vq0X+sj6ZenkHPC815LVB3g2qcM\"",
		"mtime": "2026-08-11T18:14:05.646Z",
		"size": 65780,
		"path": "../public/images/iman-hundal-headshot.jpeg"
	},
	"/images/jonathan-wagner-headshot.jpg": {
		"type": "image/jpeg",
		"etag": "\"68ab-DwUOY0jH2cj5trCOHP4IW9Q//9g\"",
		"mtime": "2026-08-11T18:14:05.647Z",
		"size": 26795,
		"path": "../public/images/jonathan-wagner-headshot.jpg"
	},
	"/images/iris-chao-headshot.jpeg": {
		"type": "image/jpeg",
		"etag": "\"3239a-yr4WBgO8MR7wcJ4ngGZon2L16dg\"",
		"mtime": "2026-08-11T18:14:05.648Z",
		"size": 205722,
		"path": "../public/images/iris-chao-headshot.jpeg"
	},
	"/images/impact new.png": {
		"type": "image/png",
		"etag": "\"53f7e-KCU8z4fzncImglWuqfOm/liNvBU\"",
		"mtime": "2026-08-11T18:14:05.647Z",
		"size": 343934,
		"path": "../public/images/impact new.png"
	},
	"/images/kearney-logo.avif": {
		"type": "image/avif",
		"etag": "\"c10-mtsFLl7fjkhiB2WsWUEx3lIQzIo\"",
		"mtime": "2026-08-11T18:14:05.648Z",
		"size": 3088,
		"path": "../public/images/kearney-logo.avif"
	},
	"/images/julia-shvartsman-headshot.jpeg": {
		"type": "image/jpeg",
		"etag": "\"11465-FNopcs4+i5nNNQ8xX4O/3fwihKk\"",
		"mtime": "2026-08-11T18:14:05.649Z",
		"size": 70757,
		"path": "../public/images/julia-shvartsman-headshot.jpeg"
	},
	"/images/jayden-burton-headshot.jpg": {
		"type": "image/jpeg",
		"etag": "\"2ce3f-JhwC/Ger8r3TuA8dQFUIHZF/gm8\"",
		"mtime": "2026-08-11T18:14:05.649Z",
		"size": 183871,
		"path": "../public/images/jayden-burton-headshot.jpg"
	},
	"/images/kearney-logo.png": {
		"type": "image/png",
		"etag": "\"13278-N8ZxQw0TtwqFWn8ca9+DrrRzLZg\"",
		"mtime": "2026-08-11T18:14:05.649Z",
		"size": 78456,
		"path": "../public/images/kearney-logo.png"
	},
	"/images/kathy-yun-headshot.JPG": {
		"type": "image/jpeg",
		"etag": "\"41991-CX1lC0TDY68l/yC3e/to0XduV5A\"",
		"mtime": "2026-08-11T18:14:05.650Z",
		"size": 268689,
		"path": "../public/images/kathy-yun-headshot.JPG"
	},
	"/images/kira-pan-headshot-2.JPG": {
		"type": "image/jpeg",
		"etag": "\"46a6-SHGEOpEKcWXaxc9K6TbXgYc4noM\"",
		"mtime": "2026-08-11T18:14:05.649Z",
		"size": 18086,
		"path": "../public/images/kira-pan-headshot-2.JPG"
	},
	"/images/krishna-narayanasamy-headshot.jpg": {
		"type": "image/jpeg",
		"etag": "\"296b7-FQn3s8HR14d5p3pd6W3LfMKqgys\"",
		"mtime": "2026-08-11T18:14:05.650Z",
		"size": 169655,
		"path": "../public/images/krishna-narayanasamy-headshot.jpg"
	},
	"/images/milwaukee-bucks-logo-knockout.svg": {
		"type": "image/svg+xml",
		"etag": "\"1f73-/DMZDVZM1XVK7B0sZI7NO5Ip/Fo\"",
		"mtime": "2026-08-11T18:14:05.650Z",
		"size": 8051,
		"path": "../public/images/milwaukee-bucks-logo-knockout.svg"
	},
	"/images/meet-mems-2026.jpg": {
		"type": "image/jpeg",
		"etag": "\"46cb3-l6V5YbYIZMTfPmDmnwJ2w8oaTqM\"",
		"mtime": "2026-08-11T18:14:05.651Z",
		"size": 289971,
		"path": "../public/images/meet-mems-2026.jpg"
	},
	"/images/milwaukee-bucks-logo.svg": {
		"type": "image/svg+xml",
		"etag": "\"1f70-E1a0r2NppdK74VxK01uqmvyyu44\"",
		"mtime": "2026-08-11T18:14:05.652Z",
		"size": 8048,
		"path": "../public/images/milwaukee-bucks-logo.svg"
	},
	"/images/neil-thomas-headshot.jpeg": {
		"type": "image/jpeg",
		"etag": "\"55cf-H2r4cpeIxZFGwJYriwO+d7wcu3k\"",
		"mtime": "2026-08-11T18:14:05.650Z",
		"size": 21967,
		"path": "../public/images/neil-thomas-headshot.jpeg"
	},
	"/images/nikhil-rajgopal-headshot.jpeg": {
		"type": "image/jpeg",
		"etag": "\"4bf9-INM27GCcCdKk5nQZqRTLOsiH16I\"",
		"mtime": "2026-08-11T18:14:05.652Z",
		"size": 19449,
		"path": "../public/images/nikhil-rajgopal-headshot.jpeg"
	},
	"/images/new-mems-sitting-sp26.jpg": {
		"type": "image/jpeg",
		"etag": "\"533d6-jYSDIh8lM6+ugr2YGvgix+bRuKE\"",
		"mtime": "2026-08-11T18:14:05.652Z",
		"size": 340950,
		"path": "../public/images/new-mems-sitting-sp26.jpg"
	},
	"/images/oscar-araujo-headshot.jpeg": {
		"type": "image/jpeg",
		"etag": "\"4f9d-kgU+2PktmInoKwUpoC+WWSNiyIs\"",
		"mtime": "2026-08-11T18:14:05.652Z",
		"size": 20381,
		"path": "../public/images/oscar-araujo-headshot.jpeg"
	},
	"/images/our-work-hero-new.jpeg": {
		"type": "image/jpeg",
		"etag": "\"2850f-VZHTjqLB2iIzo/nVXuvumKfWLRA\"",
		"mtime": "2026-08-11T18:14:05.654Z",
		"size": 165135,
		"path": "../public/images/our-work-hero-new.jpeg"
	},
	"/images/paravel-logo.avif": {
		"type": "image/avif",
		"etag": "\"e13-fhf8/WaAWJPijDG0t9ty7y2OEac\"",
		"mtime": "2026-08-11T18:14:05.653Z",
		"size": 3603,
		"path": "../public/images/paravel-logo.avif"
	},
	"/images/paravel-logo.png": {
		"type": "image/png",
		"etag": "\"1354b-Kk31eUysoSIj2YifICWCXDptNgI\"",
		"mtime": "2026-08-11T18:14:05.653Z",
		"size": 79179,
		"path": "../public/images/paravel-logo.png"
	},
	"/images/rayan-sudeora-headshot.png": {
		"type": "image/png",
		"etag": "\"1cd55-E3djWaEYHXYr2QQ1EIVX9sX9Ank\"",
		"mtime": "2026-08-11T18:14:05.654Z",
		"size": 118101,
		"path": "../public/images/rayan-sudeora-headshot.png"
	},
	"/images/paulo-trento-headshot.jpg": {
		"type": "image/jpeg",
		"etag": "\"2ef6d-mcrz3kM0c01GPr7nYq10WXSDOvU\"",
		"mtime": "2026-08-11T18:14:05.654Z",
		"size": 192365,
		"path": "../public/images/paulo-trento-headshot.jpg"
	},
	"/images/ria-voodi-headshot.jpeg": {
		"type": "image/jpeg",
		"etag": "\"217fc-qXe7cHkAf51mV4EyD0ESEoy7LcM\"",
		"mtime": "2026-08-11T18:14:05.657Z",
		"size": 137212,
		"path": "../public/images/ria-voodi-headshot.jpeg"
	},
	"/images/rohan-dash-headshot.jpg": {
		"type": "image/jpeg",
		"etag": "\"258cc-LviaY/7NTjh0IvHVZKWh6aFhEN8\"",
		"mtime": "2026-08-11T18:14:05.655Z",
		"size": 153804,
		"path": "../public/images/rohan-dash-headshot.jpg"
	},
	"/images/selector-logo.png": {
		"type": "image/png",
		"etag": "\"55d2-jaHSMVhJ7eGrVZQTUhqkDJELN2s\"",
		"mtime": "2026-08-11T18:14:05.654Z",
		"size": 21970,
		"path": "../public/images/selector-logo.png"
	},
	"/images/shaivi-shah-headshot.jpeg": {
		"type": "image/jpeg",
		"etag": "\"5e39-pr+Byw+ncJpW42Q66ZZ3oZDKpgs\"",
		"mtime": "2026-08-11T18:14:05.655Z",
		"size": 24121,
		"path": "../public/images/shaivi-shah-headshot.jpeg"
	},
	"/images/seagate-logo.png": {
		"type": "image/png",
		"etag": "\"a6f6-/v0mCQrI0yVx9xai242VoCmJ6ZQ\"",
		"mtime": "2026-08-11T18:14:05.654Z",
		"size": 42742,
		"path": "../public/images/seagate-logo.png"
	},
	"/images/sp26-walking.jpg": {
		"type": "image/jpeg",
		"etag": "\"43041-kTcmoY2eDi2Ojx3yqSWrXdeKL8c\"",
		"mtime": "2026-08-11T18:14:05.656Z",
		"size": 274497,
		"path": "../public/images/sp26-walking.jpg"
	},
	"/images/spring-26-fullclub.jpg": {
		"type": "image/jpeg",
		"etag": "\"5af80-O/TrtyyllS0CGSt7Y6wzBWmZQHM\"",
		"mtime": "2026-08-11T18:14:05.656Z",
		"size": 372608,
		"path": "../public/images/spring-26-fullclub.jpg"
	},
	"/images/services-icons-only.png": {
		"type": "image/png",
		"etag": "\"60340-sv5vqYYpS0P5FI6S37U1JJ6sMIM\"",
		"mtime": "2026-08-11T18:14:05.656Z",
		"size": 394048,
		"path": "../public/images/services-icons-only.png"
	},
	"/images/unicef-logo-clean.png": {
		"type": "image/png",
		"etag": "\"3321-lxVPtHzMBcKByrgPeLbyl50YZSI\"",
		"mtime": "2026-08-11T18:14:05.656Z",
		"size": 13089,
		"path": "../public/images/unicef-logo-clean.png"
	},
	"/images/viktor-gonzalez-headshot.png": {
		"type": "image/png",
		"etag": "\"2f217-YQmxJFrKyiWGl2EKT6VjJd2CFgk\"",
		"mtime": "2026-08-11T18:14:05.657Z",
		"size": 193047,
		"path": "../public/images/viktor-gonzalez-headshot.png"
	},
	"/images/vision new.png": {
		"type": "image/png",
		"etag": "\"4bc54-Z2WGa3IRyq2OsZD2EapyHnasoI0\"",
		"mtime": "2026-08-11T18:14:05.657Z",
		"size": 310356,
		"path": "../public/images/vision new.png"
	},
	"/images/vrushtee-shah-headshot.jpg": {
		"type": "image/jpeg",
		"etag": "\"640c-tSnJdqI9P/kKhVdWTnv9OLPV4mE\"",
		"mtime": "2026-08-11T18:14:05.658Z",
		"size": 25612,
		"path": "../public/images/vrushtee-shah-headshot.jpg"
	},
	"/images/workshop-classroom-scene.png": {
		"type": "image/png",
		"etag": "\"7ddd4-jgEVRgarjLPwrc9y4CHaaNthE/w\"",
		"mtime": "2026-08-11T18:14:05.661Z",
		"size": 515540,
		"path": "../public/images/workshop-classroom-scene.png"
	},
	"/images/fall 2025 jcp projects/casey-jcp.jpeg": {
		"type": "image/jpeg",
		"etag": "\"287b4-NwRAmmU/8hnaqCJ1qcF2V5JQCKM\"",
		"mtime": "2026-08-11T18:14:05.630Z",
		"size": 165812,
		"path": "../public/images/fall 2025 jcp projects/casey-jcp.jpeg"
	},
	"/images/fall 2025 jcp projects/cole-alex-jcp.jpeg": {
		"type": "image/jpeg",
		"etag": "\"2d75a-F91swdf0llQ+8sCp6PrbSyCWX5M\"",
		"mtime": "2026-08-11T18:14:05.661Z",
		"size": 186202,
		"path": "../public/images/fall 2025 jcp projects/cole-alex-jcp.jpeg"
	},
	"/images/fall 2025 jcp projects/diya-cathryn-jcp.jpeg": {
		"type": "image/jpeg",
		"etag": "\"38bb0-xypheYx+Nux3UfpOrEXF3CQlGjw\"",
		"mtime": "2026-08-11T18:14:05.662Z",
		"size": 232368,
		"path": "../public/images/fall 2025 jcp projects/diya-cathryn-jcp.jpeg"
	},
	"/images/yash-chitambar-headshot.jpeg": {
		"type": "image/jpeg",
		"etag": "\"42af-QA9Fa6ZSAdlqga5hJEvjiucSRXs\"",
		"mtime": "2026-08-11T18:14:05.659Z",
		"size": 17071,
		"path": "../public/images/yash-chitambar-headshot.jpeg"
	},
	"/images/fall 2025 jcp projects/kira-chiara-jcp.jpeg": {
		"type": "image/jpeg",
		"etag": "\"26f89-0hTXl9SenoO9orJjxO/dGYHJzaE\"",
		"mtime": "2026-08-11T18:14:05.661Z",
		"size": 159625,
		"path": "../public/images/fall 2025 jcp projects/kira-chiara-jcp.jpeg"
	},
	"/images/women-2026-group.jpg": {
		"type": "image/jpeg",
		"etag": "\"3ac7c-qXMTv8V7J+CmgyZmaTqomastH94\"",
		"mtime": "2026-08-11T18:14:05.661Z",
		"size": 240764,
		"path": "../public/images/women-2026-group.jpg"
	},
	"/images/website_favicon.png": {
		"type": "image/png",
		"etag": "\"acc3-hZg+RtZqmZ1FmHkRKbxX5ZpUIoI\"",
		"mtime": "2026-08-11T18:14:05.663Z",
		"size": 44227,
		"path": "../public/images/website_favicon.png"
	},
	"/images/fall 2025 jcp projects/jayden-paulo-jcp.jpeg": {
		"type": "image/jpeg",
		"etag": "\"339b2-N982rUx+3A130ilr7NIrR9R6dHA\"",
		"mtime": "2026-08-11T18:14:05.662Z",
		"size": 211378,
		"path": "../public/images/fall 2025 jcp projects/jayden-paulo-jcp.jpeg"
	},
	"/images/fall 2025 jcp projects/krishna-rohan-jcp.jpeg": {
		"type": "image/jpeg",
		"etag": "\"27b9c-aHWUeZJK3PleFit44FucMU/emK0\"",
		"mtime": "2026-08-11T18:14:05.663Z",
		"size": 162716,
		"path": "../public/images/fall 2025 jcp projects/krishna-rohan-jcp.jpeg"
	},
	"/images/victor-shi-headshot.png": {
		"type": "image/png",
		"etag": "\"158c90-V91cTZ3sWCr0S2wp/A+f1ZEfuHM\"",
		"mtime": "2026-08-11T18:14:05.660Z",
		"size": 1412240,
		"path": "../public/images/victor-shi-headshot.png"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_A1GVty = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_A1GVty
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
