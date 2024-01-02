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
				singleProjectTitle: 'Argumentasi Realiti Project',
				singleProjectDate: 'Start from July 2019',
				singleProjectTag: 'Creative Writing',
			},
			projectImages: [
				{
					id: 1,
					title: 'Laroyba Classic Furniture Website',
					img: require('@/assets/images/argmtsrealiti.png'),
				},
				{
					id: 2,
					title: 'Laroyba Classic Furniture Website',
					img: require('@/assets/images/ui-project-1.jpg'),
				},
				{
					id: 3,
					title: 'Laroyba Classic Furniture Website',
					img: require('@/assets/images/web-project-1.jpg'),
				},
			],
			projectInfo: {
				clientHeading: 'About',
				companyInfos: [
					{
						id: 1,
						title: 'Name',
						details: 'Argumentasi Realiti',
					},
					{
						id: 2,
						title: 'Category',
						details: 'Creative Writing',
					},
					{
						id: 3,
						title: 'Website',
						details: 'https://argumentasirealiti.iqbalarauf.my.id',
					},
				],
				objectivesHeading: 'Objective',
				objectivesDetails:
					'Sebuah kumpulan tulisan dari pribadi IqbalARauf yang berisi tentang banyak hal. Dibuat hanya untuk mengeluarkan isi pikiran mengamati realitas.',
				technologies: [
					{
						title: 'Content',
						techs: [
							'Opini',
							'Featured',
							'Tulisan Teknologi',
							'KembaliNgidol',
							'Bangku Kuliah',
							'Narasi Puisi',
						],
					},
				],
				projectDetailsHeading: 'Philosophy',
				projectDetails: [
					{
						id: 1,
						details:
							'ArgumentasiRealiti bermula dari kata pelesetan dari Augmented Reality. Filosofi Augmented Reality dalam dunia teknologi yang mewujudkan simulasi antara imajinasi maya pada dunia nyata.',
					},
					{
						id: 2,
						details:
							'Sama dengan kami, ArgumentasiRealiti menjadi sebuah proyek yang dapat mewujudkan imajinasi bagi para penggunanya. Menuangkan berbagai macam ide kepala seorang manusia agar dapat diwujudkan sebagai sebuah gagasan baru.',
					},
					{
						id: 3,
						details:
							'ArgumentasiRealiti diharapkan menjadi jawaban agar setiap gagasan dan ide yang dikeluarkan dapat melihat realitas sekitar kami sehingga dapat menjadi lebih relevan. Menyampaikan “Suara yang Tak Sampai”',
					},
				],
			},
			relatedProject: {
				relatedProjectsHeading: 'Related Projects',
				relatedProjects: [
				{
						id: 1,
						title: 'Laroyba Classic',
						img: require('@/assets/images/laroyba-classic/lrb-classic-1.png'),
						link: '/projects/lrb-project',
					},
					{
						id: 2,
						title: 'E-Government Report App',
						img: require('@/assets/images/report/first.png'),
						link: '/projects/egov-report',
					},
					{
						id: 3,
						title: 'Social-Media Based Covid Tracker',
						img: require('@/assets/images/smct/first.png'),
						link: '/projects/socmed-covid-tracker',
					},
					{
						id: 4,
						title: 'AksaraPers News',
						img: require('@/assets/images/aksarapers.png'),
						link: '/projects/argumentasirealiti',
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

		<!-- Project related projects -->
		<ProjectRelatedProjects :relatedProject="relatedProject" />
	</div>
</template>

<style scoped></style>
