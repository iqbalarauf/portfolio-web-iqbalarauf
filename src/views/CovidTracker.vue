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
					'Social Media-based COVID Tracker (SMCT) merupakan aplikasi yang dapat membantu seseorang untuk melacak dan mencatat riwayat perjalanan melalui postingan media sosialnya.',
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
							'Social Media-based COVID Tracker (SMCT) merupakan aplikasi yang dapat membantu seseorang untuk melacak dan mencatat riwayat perjalanan melalui postingan media sosialnya. Melalui informasi mengenai lokasi dan waktu postingan, pengguna dapat mengecek apakah pernah berkontak dengan pasien COVID-19 dan akan diberi peringatan jika pernah kontak erat dengan pasien COVID-19 yang berada di tempat dan waktu yang sama.',
					},
					{
						id: 2,
						details:
							'Aplikasi akan mengumpulkan informasi berdasarkan postingan media sosial pengguna yang terhubung dengan aplikasi. Kemudian data lokasi dan waktu postingan akan dikirimkan dan dicocokkan oleh sistem. Jika pengguna melaporkan adanya gejala dan diagnosis COVID-19, data pengguna selama 14 hari akan dicek dan dicari pengguna lain yang mungkin berada di satu lokasi yang sama. Pengguna lain yang berada di lokasi dan waktu yang sama dengan pengguna pasien COVID-19 dalam waktu 14 hari akan mendapatkan notifikasi peringatan.',
					},
					{
						id: 3,
						details:
							'SMCT direncanakan dibangun menggunakan basis Flutter dengan menggunakan API dari Social Media yang terhubung. Namun, seiring berjalannya waktu API dari sosial media yang terhubung saat ini mulai terbatas dan hanya beberapa yang bisa diterapkan menggunakan web scrapping.',
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

		<!-- Project Show: Embed FIgma UI -->
		<div class="w-full items-center mt-10 mb-10 sm:mt-0">
			<p class="font-general-medium text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
				UI/UX Design
			</p>
			<iframe class="w-full aspect-video"
				src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FoqrpYhOjPdMyhOU4meH73Y%2FCovid_Tracker%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DwqVafGMshiuVHWcs-1"
				allowfullscreen="true" mozallowfullscreen="true"
				webkitallowfullscreen="true"></iframe>
		</div>
		
		<!-- Project Show: Attachment Data QA dan Pengujian PL -->
		<div class="w-full items-center mt-10 sm:mt-0">
			<p class="font-general-medium text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
				Pengujian dan Quality Assurance
			</p>
			<iframe class="w-full aspect-video"
				src="https://docs.google.com/presentation/d/e/2PACX-1vQGF_SUdPyFtq7lTxeRqr9PjQAsLVfLUSBhRgktzCQjAzGdtbueLysGjZqXtNl3FQ/embed?start=false&loop=false&delayms=3000"
				allowfullscreen="true" mozallowfullscreen="true"
				webkitallowfullscreen="true"></iframe>
		</div>

		<!-- Project Show: Mobile Development -->
		<div class="flex justify-center">
				<a
					download="Resume-IqbalARauf.pdf"
					href="/files/Resume-IqbalARauf.pdf"
					class="flex justify-center items-center w-96 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
					aria-label="Download Resume"
				>
					<i
						data-feather="arrow-down-circle"
						class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100"
					></i>
					<span
						class="text-sm sm:text-lg font-general-medium duration-100"
						>Akses Informasi SRS dan SDD</span
					></a
				>
			</div>

		<!-- Project related projects -->
		<ProjectRelatedProjects :relatedProject="relatedProject" />
	</div>
</template>

<style scoped></style>
