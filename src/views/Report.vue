<script>
import feather from 'feather-icons';
import ProjectHeader from '../components/projects/ProjectHeader.vue';
import ProjectGallery from '../components/projects/ProjectGallery.vue';
import ProjectInfo from '../components/projects/ProjectInfo.vue';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects.vue';

export default {
	name: 'Report',
	components: {
		ProjectHeader,
		ProjectGallery,
		ProjectInfo,
		ProjectRelatedProjects,
	},
	data: () => {
		return {
			singleProjectHeader: {
				singleProjectTitle: 'E-Government Report App',
				singleProjectDate: 'June - August 2022',
				singleProjectTag: 'Mobile Development',
			},
			projectImages: [
				{
					id: 1,
					title: 'Laroyba Classic Furniture Website',
					img: require('@/assets/images/report/satu.jpg'),
				},
				{
					id: 2,
					title: 'Laroyba Classic Furniture Website',
					img: require('@/assets/images/report/dua.jpg'),
				},
				{
					id: 3,
					title: 'Laroyba Classic Furniture Website',
					img: require('@/assets/images/report/tiga.jpg'),
				},
			],
			projectInfo: {
				clientHeading: 'Government Institution',
				companyInfos: [
					{
						id: 1,
						title: 'Name',
						details: 'Regency Government of Jepara',
					},
					{
						id: 2,
						title: 'Services',
						details: 'Mobile Development',
					},
					{
						id: 3,
						title: 'Website',
						details: 'https://wadul.jepara.go.id',
					},
				],
				objectivesHeading: 'Objective',
				objectivesDetails:
					'Membangun aplikasi berbasis ticketing yang mengintegrasikan API Website dengan aplikasi mobile berbasis Flutter',
				technologies: [
					{
						title: 'Tools & Technologies',
						techs: [
							'HTML',
							'CSS',
							'PHP',
							'Flutter',
						],
					},
				],
				projectDetailsHeading: 'Challenge',
				projectDetails: [
					{
						id: 1,
						details:
							'Untuk meningkatkan jangkauan dan memudahkan masyarakat dalam mengakses layanan pengaduan Wadul Bupati Jepara, dikembangkanlah aplikasi Wadul Bupati Jepara yang berbasis Android. Dengan adanya pengajuan tersebut, penulis akan mencoba mengembangkan aplikasi Wadul Bupati Jepara dengan berbasis Android.',
					},
					{
						id: 2,
						details:
							'Dalam membangun aplikasi Wadul Bupati Jepara, digunakan bahasa pemrograman Dart dan framework Flutter untuk membangun aplikasi Android Wadul Bupati Jepara. Back-end aplikasi dihubungkan dengan portal website melalui API dari website yang telah dibangun.',
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
