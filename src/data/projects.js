// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'LaRoyba Classic Furniture',
		category: 'Web Application',
		img: require('@/assets/images/web-project-2.jpg'),
		link: '/projects/lrb-project',
	},
	{
		id: 2,
		title: 'E-Government Report App',
		category: 'Mobile Application',
		img: require('@/assets/images/mobile-project-2.jpg'),
		link: '/projects/egov-report',
	},
	{
		id: 3,
		title: 'Social-Media Based Covid Tracker',
		category: 'UI/UX Design',
		img: require('@/assets/images/ui-project-1.jpg'),
		link: '/projects/socmed-covid-tracker',
	},
	{
		id: 4,
		title: 'SuperIdol Integrated Apps',
		category: 'Mobile Application',
		img: require('@/assets/images/ui-project-2.jpg'),
		link: '/projects/superidol',
	},
	{
		id: 5,
		title: 'Aksarapers.com News',
		category: 'Content Writing',
		img: require('@/assets/images/mobile-project-1.jpg'),
		link: '/projects/aksarapers-news',
	},
	{
		id: 6,
		title: 'ArgumentasiRealiti Project',
		category: 'Content Writing',
		img: require('@/assets/images/web-project-1.jpg'),
		link: '/projects/argumentasirealiti',
	},
];

export default projects;
