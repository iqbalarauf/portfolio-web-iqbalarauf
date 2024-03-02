<script>
import feather from 'feather-icons';
import ProjectHeader from '../components/projects/ProjectHeader.vue';
import ProjectGallery from '../components/projects/ProjectGallery.vue';
import ProjectInfo from '../components/projects/ProjectInfo.vue';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects.vue';

export default {
	name: 'Laroyba',
	components: {
		ProjectHeader,
		ProjectGallery,
		ProjectInfo,
		ProjectRelatedProjects,
	},
	data: () => {
		return {
			singleProjectHeader: {
				singleProjectTitle: 'BotOniel: Oniel Jokes Generator',
				singleProjectDate: 'Juli 2023',
				singleProjectTag: 'Web Development',
			},
			projectImages: [
				{
					id: 1,
					title: 'Main',
					img: require('@/assets/images/botoniel.jpg'),
				},
				{
					id: 2,
					title: 'Second',
					img: require('@/assets/images/botoniel-2.jpg'),
				},
				{
					id: 3,
					title: 'Third',
					img: require('@/assets/images/botoniel-3.jpg'),
				},
			],
			projectInfo: {
				clientHeading: 'Information',
				companyInfos: [
					{
						id: 1,
						title: 'Telegram Bot',
						details: 'http://t.me/botnielbot',
					},
					{
						id: 2,
						title: 'Website',
						details: 'http://botoniel.iqbalarauf.my.id',
					},
				],
				objectivesHeading: 'Objective',
				objectivesDetails:
					'Membangun sebuah bot telegram dan website berisi jokes generator dari kumpulan jokes Oniel JKT48',
				technologies: [
					{
						title: 'Tools & Technologies',
						techs: [
							'HTML',
							'CSS',
							'JavaScript',
							'Telegram Bot',
							'Google App Script',
						],
					},
				],
				projectDetailsHeading: 'Challenge',
				projectDetails: [
					{
						id: 1,
						details:
							'Proyek yang dikerjakan selama satu bulan dalam rangka merayakan ulang tahun Oniel JKT48 ke-21 pada Juli 2023 dan berkolaborasi dengan fans Oniel JKT48. Bot Telegram dan Website dibangun untuk merespons permintaan fans Oniel terhadap akses data jokes Oniel yang telah dibukukan (sebagai gift) di waktu yang berdekatan.',
					},
					{
						id: 2,
						details:
							'Untuk meringkas waktu, pembuatan bot Telegram diutamakan dengan menjadikan file Spreadsheet yang berisi kumpulan jokes sebagai database menggunakan Google App Script untuk selanjutnya dipakai sebagai API. Dari API tersebut, kemudian disambungkan kepada bot Telegram dan website yang telah dibuat.',
					},
				],
			},
			relatedProject: {
				relatedProjectsHeading: 'Related Projects',
				relatedProjects: [
				{
						id: 1,
						title: 'Laroyba Classic',
						img: require('@/assets/images/laroyba-classic/first.jpg'),
						link: '/projects/lrb-project',
					},
					{
						id: 2,
						title: 'E-Government Report App',
						img: require('@/assets/images/report/satu.jpg'),
						link: '/projects/egov-report',
					},
					{
						id: 3,
						title: 'Social-Media Based Covid Tracker',
						img: require('@/assets/images/smct/first.jpg'),
						link: '/projects/socmed-covid-tracker',
					},
					{
						id: 4,
						title: 'AksaraPers News',
						img: require('@/assets/images/aksarapers.png'),
						link: '/projects/aksarapers-news',
					},
				],
			},
		};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<div class="container mx-auto mt-10 sm:mt-20">
		<!-- Project header -->
		<ProjectHeader :singleProjectHeader="singleProjectHeader" />

		<!-- Project gallery -->
		<ProjectGallery :projectImages="projectImages" />

		<!-- Project information -->
		<ProjectInfo :projectInfo="projectInfo" />

		<div class="flex justify-center gap-5">
				<a
					href="https://t.me/botnielbot" target="_blank"
					class="flex justify-center items-center w-96 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
				>
					<i
						data-feather="send"
						class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100"
					></i>
					<span
						class="text-sm sm:text-lg font-general-medium duration-100"
						>Akses Bot Telegram</span
					></a
				>
				<a
					href="https://botoniel.iqbalarauf.my.id" target="_blank"
					class="flex justify-center items-center w-96 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
				>
					<i
						data-feather="globe"
						class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100"
					></i>
					<span
						class="text-sm sm:text-lg font-general-medium duration-100"
						>Akses Website</span
					></a
				>
		</div>

		<!-- Project related projects -->
		<ProjectRelatedProjects :relatedProject="relatedProject" />
	</div>
</template>

<style scoped></style>
