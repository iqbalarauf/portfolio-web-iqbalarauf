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
					'Build a company profile website and integrated ticketing system for idol group. It will replicate from JKT48.com business requirements.',
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
							'The development of Superidol was inspired by the JKT48.com website which combines several types of websites such as blog posts, ticketing systems, and scheduling. Superidol will try to replicate the features on the JKT48 website and fix some of the shortcomings that the website has experienced so far.',
					},
					{
						id: 2,
						details:
							'There will be several replication features, such as scanning QR codes to verify event attendance, a ticket purchasing system that can be selected by FCFS or lottery, and processing votes for certain events (starting from generating unique codes to counting votes).',
					},
					{
						id: 3,
						details:
							'This process may take a very long time. So this individual project work will be updated regularly.',
					},
				],
			},
			relatedProject: {
				relatedProjectsHeading: 'Related Projects',
				relatedProjects: [
					{
						id: 1,
						title: 'Mobile UI',
						img: require('@/assets/images/laroyba-classic/lrb-classic-1.png'),
					},
					{
						id: 2,
						title: 'Web Application',
						img: require('@/assets/images/laroyba-classic/lrb-classic-1.png'),
					},
					{
						id: 3,
						title: 'UI Design',
						img: require('@/assets/images/laroyba-classic/lrb-classic-1.png'),
					},
					{
						id: 4,
						title: 'Kabul Mobile App UI',
						img: require('@/assets/images/laroyba-classic/lrb-classic-1.png'),
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
