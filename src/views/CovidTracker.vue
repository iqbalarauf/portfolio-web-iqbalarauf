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
							'Social Media-based COVID Tracker (SMCT) is an application that can help someone track and record travel history through social media posts. Through information regarding the location and time of posting, users can check whether they have had contact with a COVID-19 patient and will be given a warning if they have had close contact with a COVID-19 patient who was in the same place and time.',
					},
					{
						id: 2,
						details:
							'The application will collect information based on the social media posts of users connected to the application. Then the location data and posting time will be sent and matched by the system. If a user reports symptoms and diagnosis of COVID-19, the users data for 14 days will be checked and other users who may be in the same location will be searched. Other users who are at the same location and time as the COVID-19 patient user within 14 days will receive a warning notification.',
					},
					{
						id: 3,
						details:
							'SMCT is planned to be built using a Flutter base using APIs from connected Social Media. However, as time goes by, the APIs from connected social media are starting to become limited and only a few can be implemented using web scrapping.',
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
