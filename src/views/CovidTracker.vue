<script>
import feather from 'feather-icons';
import ProjectHeader from '../components/projects/ProjectHeader.vue';
import ProjectGallery from '../components/projects/ProjectGallery.vue';
import ProjectInfo from '../components/projects/ProjectInfo.vue';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects.vue';

export default {
	name: 'Covid Tracker',
	components: {
		ProjectHeader,
		ProjectGallery,
		ProjectInfo,
		ProjectRelatedProjects,
	},
	data: () => {
		return {
			singleProjectHeader: {
				singleProjectTitle: 'Social-Media Based Covid Tracker',
				singleProjectDate: 'September 2021 - June 2022',
				singleProjectTag: 'UI/UX Design, Mobile Development',
			},
			projectImages: [
				{
					id: 1,
					title: 'Laroyba Classic Furniture Website',
					img: require('@/assets/images/smct/first.jpg'),
				},
				{
					id: 2,
					title: 'Laroyba Classic Furniture Website',
					img: require('@/assets/images/smct/second.jpg'),
				},
				{
					id: 3,
					title: 'Laroyba Classic Furniture Website',
					img: require('@/assets/images/smct/thirds.jpg'),
				},
			],
			projectInfo: {
				clientHeading: 'Information',
				companyInfos: [
					{
						id: 1,
						title: 'College Subject',
						details: 'UI/UX Design, Mobile Development, Scrum Project Simulation/2nd-3rd Years Project, Software Requirement',
					},
					{
						id: 2,
						title: 'Spesific Task',
						details: 'UI/UX Design, SRS, SDD, Mobile Development',
					},
				],
				objectivesHeading: 'Objective',
				objectivesDetails:
					'Build a company profile website for a furniture company and a website containing a furniture product catalog using Wordpress.',
				technologies: [
					{
						title: 'Tools & Technologies',
						techs: [
							'Scrum',
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
