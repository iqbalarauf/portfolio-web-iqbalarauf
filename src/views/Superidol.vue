<script>
import feather from 'feather-icons';
import ProjectHeader from '../components/projects/ProjectHeader.vue';
import ProjectGallery from '../components/projects/ProjectGallery.vue';
import ProjectInfo from '../components/projects/ProjectInfo.vue';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects.vue';

export default {
	name: 'Superidol',
	components: {
		ProjectHeader,
		ProjectGallery,
		ProjectInfo,
		ProjectRelatedProjects,
	},
	data: () => {
		return {
			singleProjectHeader: {
				singleProjectTitle: 'Superidol Integration App',
				singleProjectDate: 'Start from January 2024',
				singleProjectTag: 'Mobile Development / Web Development',
			},
			projectImages: [
				{
					id: 1,
					title: 'Laroyba Classic Furniture Website',
					img: require('@/assets/images/superidol/mockuppc.jpg'),
				},
				{
					id: 2,
					title: 'Laroyba Classic Furniture Website',
					img: require('@/assets/images/superidol/mockupphone1.jpg'),
				},
				{
					id: 3,
					title: 'Laroyba Classic Furniture Website',
					img: require('@/assets/images/superidol/mockupphone2.jpg'),
				},
			],
			projectInfo: {
				clientHeading: 'About',
				companyInfos: [
					{
						id: 1,
						title: 'Name',
						details: 'Superidol App',
					},
					{
						id: 2,
						title: 'Category',
						details: 'Individual Portfolio',
					},
				],
				objectivesHeading: 'Objective',
				objectivesDetails:
					'Membangun sebuah website pengelolaan tiket dan company profile untuk sebuah grup idola. Mereplikasi fitur dari website JKT48',
				technologies: [
					{
						title: 'Tools & Technologies',
						techs: [
							'HTML',
							'CSS',
							'PHP',
							'Laravel',
							'Flutter',
							'Figma',
						],
					},
				],
				projectDetailsHeading: 'Challenge',
				projectDetails: [
					{
						id: 1,
						details:
							'Pengembangan Superidol terinspirasi dari website JKT48.com yang menggabungkan beberapa jenis website seperti blog post, ticketing system, dan scheduling. Superidol ini akan mencoba mereplikasi fitur-fitur yang ada di website JKT48 dan memperbaiki beberapa kekurangan yang selama ini dialami website tersebut.',
					},
					{
						id: 2,
						details:
							'Akan terdapat beberapa fitur replikasi, seperti scan QR code untuk verifikasi kehadiran acara, sistem pembelian tiket yang dapat dipilih secara FCFS atau undian, dan memproses vote untuk acara tertentu (mulai dari generate kode unik sampai penghitungan suara).',
					},
					{
						id: 3,
						details:
							'Proses ini mungkin memerlukan waktu yang sangat panjang. Sehingga pengerjaan proyek individu ini akan diperbarui secara berkala.',
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
