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
				singleProjectTitle: 'Laroyba Classic Furniture Website',
				singleProjectDate: 'November 2021',
				singleProjectTag: 'Wordpress / Web Development',
			},
			projectImages: [
				{
					id: 1,
					title: 'Laroyba Classic Furniture Website',
					img: require('@/assets/images/laroyba-classic/first.jpg'),
				},
				{
					id: 2,
					title: 'Laroyba Classic Furniture Website',
					img: require('@/assets/images/laroyba-classic/second.jpg'),
				},
				{
					id: 3,
					title: 'Laroyba Classic Furniture Website',
					img: require('@/assets/images/laroyba-classic/third.jpg'),
				},
			],
			projectInfo: {
				clientHeading: 'About Client',
				companyInfos: [
					{
						id: 1,
						title: 'Name',
						details: 'Laroyba Furniture',
					},
					{
						id: 2,
						title: 'Services',
						details: 'Web Development',
					},
					{
						id: 3,
						title: 'Website',
						details: 'https://laroyba.com',
					},
					{
						id: 4,
						title: 'Phone',
						details: '-',
					},
				],
				objectivesHeading: 'Objective',
				objectivesDetails:
					'Membangun sebuah website profile company dan website katalog mebel berbasis Wordpress',
				technologies: [
					{
						title: 'Tools & Technologies',
						techs: [
							'HTML',
							'CSS',
							'PHP',
							'Wordpress',
						],
					},
				],
				projectDetailsHeading: 'Challenge',
				projectDetails: [
					{
						id: 1,
						details:
							'Proyek yang dikerjakan selama 6 bulan dan dikerjakan secara individu. Pembuatan meliputi diskusi perancangan mengenai tujuan bisnis website yang akan dibuat. Kemudian dilakukan pengumpulan foto produk dan pengeditan sesuai permintaan.',
					},
					{
						id: 2,
						details:
							'Pemilihan Wordpress sebagai platform CMS dipertimbangkan untuk mempercepat proses pembuatan website mengingat pengerjaan website dialokasikan untuk pengerjaan produk. Website Laroyba.com dipublikasikan pada September 2021 dan mengalami beberapa perubahan sebelum dilakukan finalisasi.',
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

		<!-- Project related projects -->
		<ProjectRelatedProjects :relatedProject="relatedProject" />
	</div>
</template>

<style scoped></style>
