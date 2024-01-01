<script>
import feather from 'feather-icons';
import ProjectHeader from '../components/projects/ProjectHeader.vue';
import ProjectGallery from '../components/projects/ProjectGallery.vue';
import ProjectInfo from '../components/projects/ProjectInfo.vue';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects.vue';

export default {
	name: 'Projects',
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
					title: 'Kabul Project Management UI',
					img: require('@/assets/images/laroyba-classic/lrb-classic-1.png'),
				},
				{
					id: 2,
					title: 'Kabul Project Management UI',
					img: require('@/assets/images/laroyba-classic/lrb-classic-2.png'),
				},
				{
					id: 3,
					title: 'Kabul Project Management UI',
					img: require('@/assets/images/laroyba-classic/lrb-classic-3.png'),
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
					'Build a company profile website for a furniture company and a website containing a furniture product catalog using Wordpress.',
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
							'The project was carried out for 6 months and was carried out individually. Creation includes design discussions regarding the business objectives of the website to be created. Then product photos are collected and edited according to request.',
					},
					{
						id: 2,
						details:
							'The choice of WordPress as a CMS platform was considered to speed up the website creation process considering that website work was allocated for product work. The Laroyba.com website was published in September 2021 and underwent several changes before being finalized.',
					},
					{
						id: 3,
						details:
							'Maintenance is carried out slowly to adjust to the situation while making a transition to a website that is more optimal and lightweight for the long term.',
					},
				],
			},
			relatedProject: {
				relatedProjectsHeading: 'Related Projects',
				relatedProjects: [
					{
						id: 1,
						title: 'Mobile UI',
						img: require('@/assets/images/mobile-project-1.jpg'),
					},
					{
						id: 2,
						title: 'Web Application',
						img: require('@/assets/images/web-project-1.jpg'),
					},
					{
						id: 3,
						title: 'UI Design',
						img: require('@/assets/images/ui-project-2.jpg'),
					},
					{
						id: 4,
						title: 'Kabul Mobile App UI',
						img: require('@/assets/images/mobile-project-2.jpg'),
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
