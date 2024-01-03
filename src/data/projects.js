// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'LaRoyba Classic Furniture',
		category: 'Web Application',
		img: require('@/assets/images/laroyba-classic/first.jpg'),
		link: '/projects/lrb-project',
	},
	{
		id: 2,
		title: 'E-Government Report App',
		category: 'Mobile Application',
		img: require('@/assets/images/report/satu.jpg'),
		link: '/projects/gov-report',
	},
	{
		id: 3,
		title: 'Social-Media Based Covid Tracker',
		category: 'UI/UX Design',
		img: require('@/assets/images/smct/first.jpg'),
		link: '/projects/smct',
	},
	{
		id: 4,
		title: 'SuperIdol Integrated Apps (JKT48 Replicate)',
		category: 'Mobile Application',
		img: require('@/assets/images/superidol/mockuppc.jpg'),
		link: '/projects/superidol',
	},
	{
		id: 5,
		title: 'Aksarapers.com News',
		category: 'Content Writing',
		img: require('@/assets/images/aksarapers.png'),
		link: '/projects/aksarapers-news',
	},
	{
		id: 6,
		title: 'ArgumentasiRealiti Project',
		category: 'Content Writing',
		img: require('@/assets/images/argmtsrealiti3.png'),
		link: '/projects/argumentasirealiti',
	},
];

export default projects;
