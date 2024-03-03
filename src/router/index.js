import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Superidol from '../views/Superidol.vue';
import CovidTracker from '../views/CovidTracker.vue';
import Report from '../views/Report.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		meta: {
			title: 'Hi, Welcome to IqbalARauf Web!',
		},
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: About,
		meta: {
			title: 'About IqbalARauf',
		},
	},
	{
		path: '/projects',
		name: 'Projects',
		// route level code-splitting
		// this generates a separate chunk (projects.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "projects" */ '../views/Projects.vue'),
		meta: {
			title: 'IqbalARauf Projects',
		},
	},
	{
		path: '/projects/lrb-project',
		name: 'Single Project',
		// route level code-splitting
		// this generates a separate chunk (projects.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(
				/* webpackChunkName: "projects" */ '../views/Laroyba.vue'
			),
		meta: {
			title: 'Project - LaRoyba Project',
		},
	},
	{
		path: '/projects/gov-report',
		name: 'Report',
		// route level code-splitting
		// this generates a separate chunk (projects.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: Report,
		meta: {
			title: 'Project - E-Government Report App',
		},
	},
	{
		path: '/projects/smct',
		name: 'Social Media-based Covid Tracker',
		// route level code-splitting
		// this generates a separate chunk (projects.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: CovidTracker,
		meta: {
			title: 'Project - Socmed Covid Tracker',
		},
	},
	{
		path: '/projects/superidol',
		name: 'Superidol',
		// route level code-splitting
		// this generates a separate chunk (projects.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: Superidol,
		meta: {
			title: 'Project - Superidol Integrated App',
		},
	},
	{
		path: '/projects/aksarapers-news',
		name: 'Second Project',
		// route level code-splitting
		// this generates a separate chunk (projects.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(
				/* webpackChunkName: "projects" */ '../views/AksaraPers.vue'
			),
		meta: {
			title: 'Project - AksaraPers.com News',
		},
	},
	{
		path: '/contact',
		name: 'Contact',
		// route level code-splitting
		// this generates a separate chunk (projects.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "projects" */ '../views/Contact.vue'),
		meta: {
			title: 'Contact to IqbalARauf',
		},
	},
	{
		path: '/skills/software-qa',
		name: 'Software QA',
		// route level code-splitting
		// this generates a separate chunk (projects.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(
				/* webpackChunkName: "projects" */ '../views/SoftwareQA.vue'
			),
		meta: {
			title: 'Skill - Software QA',
		},
	},
	{
		path: '/skills',
		name: 'Skills',
		// route level code-splitting
		// this generates a separate chunk (projects.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(
				/* webpackChunkName: "projects" */ '../views/Skills.vue'
			),
		meta: {
			title: 'IqbalARauf Skills',
		},
	},
	{
		path: '/projects/botoniel',
		name: 'BotOniel',
		// route level code-splitting
		// this generates a separate chunk (projects.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(
				/* webpackChunkName: "projects" */ '../views/BotOniel.vue'
			),
		meta: {
			title: 'Project - BotOniel',
		},
	},
	{
		path: '/skills/ui-ux',
		name: 'UI/UX Research and Design',
		// route level code-splitting
		// this generates a separate chunk (projects.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(
				/* webpackChunkName: "projects" */ '../views/UI-UX.vue'
			),
		meta: {
			title: 'Skill - UI/UX Research and Design',
		},
	},
	{
		path: '/skills/mobile-dev',
		name: 'Mobile Application Development',
		// route level code-splitting
		// this generates a separate chunk (projects.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(
				/* webpackChunkName: "projects" */ '../views/MobileDev.vue'
			),
		meta: {
			title: 'Skill - Mobile Application Development',
		},
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
	scrollBehavior() {
		document.getElementById('app').scrollIntoView();
	},
});

export default router;

/**
 * Below code will display the component/active page title
 * Powered by: Nangialai Stoman
 */

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
	// This goes through the matched routes from last to first, finding the closest route with a title.
	// e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
	// `/nested`'s will be chosen.
	const nearestWithTitle = to.matched
		.slice()
		.reverse()
		.find((r) => r.meta && r.meta.title);

	// Find the nearest route element with meta tags.
	const nearestWithMeta = to.matched
		.slice()
		.reverse()
		.find((r) => r.meta && r.meta.metaTags);

	const previousNearestWithMeta = from.matched
		.slice()
		.reverse()
		.find((r) => r.meta && r.meta.metaTags);

	// If a route with a title was found, set the document (page) title to that value.
	if (nearestWithTitle) {
		document.title = nearestWithTitle.meta.title;
	} else if (previousNearestWithMeta) {
		document.title = previousNearestWithMeta.meta.title;
	}

	// Remove any stale meta tags from the document using the key attribute we set below.
	Array.from(
		document.querySelectorAll('[data-vue-router-controlled]')
	).map((el) => el.parentNode.removeChild(el));

	// Skip rendering meta tags if there are none.
	if (!nearestWithMeta) return next();

	// Turn the meta tag definitions into actual elements in the head.
	nearestWithMeta.meta.metaTags
		.map((tagDef) => {
			const tag = document.createElement('meta');

			Object.keys(tagDef).forEach((key) => {
				tag.setAttribute(key, tagDef[key]);
			});

			// We use this to track which meta tags we create so we don't interfere with other ones.
			tag.setAttribute('data-vue-router-controlled', '');

			return tag;
		})
		// Add the meta tags to the document head.
		.forEach((tag) => document.head.appendChild(tag));

	next();
});
