<script>
import feather from 'feather-icons';
import ProjectHeader from '../components/skills/SkillHeader.vue';
import ProjectInfo from '../components/skills/SkillsInfo.vue';

export default {
	name: 'Software QA',
	components: {
		ProjectHeader,
		ProjectInfo,
	},
	data: () => {
		return {
			singleProjectHeader: {
				singleProjectTitle: 'Software Quality Assurance and Testing',
				singleProjectTag: 'Hard Skills',
			},
			projectInfo: {
				companyInfos: [
					{
						title: 'Mata Kuliah Terkait',
						details: [
							'Pengujian Mutu Perangkat Lunak',
							'Pengujian Perangkat Lunak',
							'Manajemen Konfigurasi Evolusi Perangkat Lunak',
						],
					},
				],
				objectivesHeading: 'Kursus Terkait',
				objectivesDetails:
					'MySkill - Quality Assurance (Januari-Februari 2024)',
				technologies: [
					{
						title: 'Tools & Technologies',
						techs: [
							'Qase.io',
							'JMeter',
							'Katalon Studio',
							'Selenium',
							'Postman',
						],
					},
				],
				projectDetailsHeading: 'Details Information',
				projectDetails: [
					{
						id: 1,
						details:
							'Pengujian merupakan salah satu tahapan penting dalam pengembangan sebuah sistem perangkat lunak, dimana pada tahap ini dilakukan evaluasi terhadap perangkat lunak yang akan digunakan. Hal tersebut dilakukan agar perangkat lunak yang dibangun sesuai dengan requirement yang diperlukan dan menghindari kesalahan pada program. Hal itulah merupakan bidang yang saya tekuni terkait bagaimana pengujian sebuah perangkat lunak dilakukan.',
					},
					{
						id: 2,
						details:
							'Saat mengambil studi saya di bidang Software Engineering, saya mengambil beberapa mata kuliah yang berkaitan dengan bidang Software Quality Assurance, yaitu Pengujian Perangkat Lunak (3 SKS dan Praktikum 1 SKS), Software Quality Assurance (3 SKS) dan Software Evolution and Configuration (3 SKS). Mata kuliah ini merangkum beberapa hal terkait dengan test plan dan organization, manual and automation testing, sampai penerapan CI/CD dalam GIT.',
					},
					{
						id: 3,
						details:
							'Tools yang saya gunakan selama mengambil mata kuliah tersebut meliputi: Jira, Qase.io, JMeter, Selenium, Gherkin, dan Katalon Studio.',
					},
					{
						id: 4,
						details:
							'Selain itu, untuk menguatkan pemahaman mengenai software QA, saya mengambil kursus di platform MySkill sebagai Quality Assurance. Dari kursus ini saya mendapatkan beberapa insight baru, khususnya mengenai pengujian mobile app, API testing dan database testing.',
					},
					{
						id: 5,
						details:
							'Portfolio yang pernah saya kerjakan terkait dengan software QA tercantum di halaman ini, dan dilengkapi beberapa dokumen pendukung dan akses kepada aplikasi yang diuji (jika tersedia).',
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

		<!-- Project information -->
		<ProjectInfo :projectInfo="projectInfo" />
		
		<!-- Project Show: Attachment Data QA dan Pengujian PL -->
		<div class="w-full items-center mt-10 sm:mt-0">
			<p class="font-general-medium text-primary-dark dark:text-primary-light text-2xl font-bold mb-7 mt-7">
				Quality Assurance Portfolio
			</p>
			<iframe class="w-full aspect-video"
				src="https://docs.google.com/presentation/d/e/2PACX-1vRb1kSsbT9wB5_JlhWf5_VOo3ND_Z-zMGXFa37HfEE8SSiTOiJ6niyDB7Uir7RjHzwbJHJVjebMFr7d/embed?start=false&loop=false&delayms=3000"
				allowfullscreen="true" mozallowfullscreen="true"
				webkitallowfullscreen="true"></iframe>
		</div>

		<div class="flex justify-center gap-5">
				<a
					href="#" target="_blank"
					class="flex justify-center items-center w-96 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
					aria-label="Drive Dokumen"
				>
					<i
						data-feather="archive"
						class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100"
					></i>
					<span
						class="text-sm sm:text-lg font-general-medium duration-100"
						>Akses Arsip Dokumen QA Testing</span
					></a
				>
				<a
					href="#" target="_blank"
					class="flex justify-center items-center w-96 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
					aria-label="Drive Dokumen"
				>
					<i
						data-feather="globe"
						class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100"
					></i>
					<span
						class="text-sm sm:text-lg font-general-medium duration-100"
						>Akses Website Prototype</span
					></a
				>
		</div>

		<!-- Project Show: Attachment Data QA dan Pengujian PL -->
		<div class="w-full items-center mt-10 sm:mt-0">
			<p class="font-general-medium text-primary-dark dark:text-primary-light text-2xl font-bold mb-7 mt-7">
				Tugas Besar Mata Kuliah: Social-media Based Covid Tracker
			</p>
			<iframe class="w-full aspect-video"
				src="https://docs.google.com/presentation/d/e/2PACX-1vTBJv5RNu1EK-pRUulfheF4V43Crs8CB-dNDmyz59ElDGU80mma5lEualo5DM6w_GFG8opWu8y0TSN9/embed?start=false&loop=false&delayms=3000"
				allowfullscreen="true" mozallowfullscreen="true"
				webkitallowfullscreen="true"></iframe>
		</div>

		<div class="flex justify-center gap-5">
				<a
					href="https://drive.google.com/drive/folders/1O6s2GYgJuI9XgNB9GsDSwTFRsCVvBKg0?usp=sharing" target="_blank"
					class="flex justify-center items-center w-96 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
					aria-label="Drive Dokumen"
				>
					<i
						data-feather="archive"
						class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100"
					></i>
					<span
						class="text-sm sm:text-lg font-general-medium duration-100"
						>Akses Arsip Dokumen QA Testing</span
					></a
				>
				<a
					href="https://adoring-montalcini.178-128-119-9.plesk.page" target="_blank"
					class="flex justify-center items-center w-96 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
					aria-label="Drive Dokumen"
				>
					<i
						data-feather="globe"
						class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100"
					></i>
					<span
						class="text-sm sm:text-lg font-general-medium duration-100"
						>Akses Website Prototype</span
					></a
				>
		</div>
	</div>
</template>

<style scoped></style>
