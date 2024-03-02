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
