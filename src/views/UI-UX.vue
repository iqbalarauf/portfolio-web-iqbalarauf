<script>
import feather from 'feather-icons';
import ProjectHeader from '../components/skills/SkillHeader.vue';
import ProjectInfo from '../components/skills/SkillsInfo.vue';

export default {
	name: 'UI/UX Research and Design',
	components: {
		ProjectHeader,
		ProjectInfo,
	},
	data: () => {
		return {
			singleProjectHeader: {
				singleProjectTitle: 'UI/UX Research and Design',
				singleProjectTag: 'Hard Skills',
			},
			projectInfo: {
				companyInfos: [
					{
						title: 'Mata Kuliah Terkait',
						details: [
							'Interaksi Manusia dan Komputer',
							'Pengalaman Pengguna',
							'UI/UX untuk Kompetisi',
						],
					},
				],
				objectivesHeading: 'Kursus Terkait',
				objectivesDetails:
					'-',
				technologies: [
					{
						title: 'Tools & Technologies',
						techs: [
							'Figma',
							'Design Sprint',
							'Agile Methodologies',
						],
					},
				],
				projectDetailsHeading: 'Details Information',
				projectDetails: [
					{
						id: 1,
						details:
							'Pengalaman pengguna merupakan sebuah kunci dalam mengembangkan perangkat lunak yang relevan terhadap kebutuhan penggunanya. ISO 9241-210 mendefinisikan pengalaman pengguna sebagai "persepsi dan respon seseorang yang dihasilkan dari penggunaan atau penggunaan terantisipasi dari sebuah produk, sistem, atau jasa". Maka, pengalaman pengguna adalah subyektif dan berfokus pada penggunaan. Hal ini merupakan bidang yang saya paham dan tekuni terkait bagaimana merancang sebuah perangkat lunak yang memiliki kegunaan bagi penggunanya.',
					},
					{
						id: 2,
						details:
							'Saat mengambil studi saya di bidang Software Engineering, saya mengambil beberapa mata kuliah yang berkaitan dengan bidang perancangan UI/UX ini, yaitu Interaksi Manusia Komputer (3 SKS), dan Pengalaman Pengguna (3 SKS). Selain itu, topik tugas akhir yang saya kerjakan juga berkaitan dengan perancangan pengalaman pengguna, yaitu mengenai redesign HRIS website di sebuah perusahaan menggunakan strategi desain mobile-first.',
					},
					{
						id: 3,
						details:
							'Portfolio yang pernah saya kerjakan terkait dengan UI/UX Research and Design (termasuk akses ke tugas akhir yang telah diselesaikan) tercantum di halaman ini, dan dilengkapi beberapa dokumen pendukung dan akses kepada wireframe Figma (jika tersedia).',
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
		
		<div class="w-full items-center mt-10 sm:mt-0">
			<p class="font-general-medium text-primary-dark dark:text-primary-light text-2xl font-bold mb-7 mt-7">
				Akses Jurnal Tugas Akhir
			</p>
			<iframe class="w-full aspect-video"
				src="https://openlibrary.telkomuniversity.ac.id/home/catalog/id/209119/slug/perancangan-ulang-antarmuka-website-proxsis-workspace-menggunakan-strategi-mobile-first-dalam-bentuk-buku-karya-ilmiah.html"
				allowfullscreen="true" mozallowfullscreen="true"
				webkitallowfullscreen="true" allow="muted"></iframe>
		</div>

		<div class="w-full items-center mt-10 sm:mt-0">
			<p class="font-general-medium text-primary-dark dark:text-primary-light text-2xl font-bold mb-7 mt-7">
				Project: Social Media-based Covid Tracker
			</p>
			<iframe class="w-full aspect-video"
				src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FoqrpYhOjPdMyhOU4meH73Y%2FCovid_Tracker%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DB8zeDKPe0lkES1hK-1"
				allowfullscreen="true" mozallowfullscreen="true"
				webkitallowfullscreen="true"></iframe>
		</div>
<!-- 
		<div class="w-full items-center mt-10 sm:mt-0">
			<p class="font-general-medium text-primary-dark dark:text-primary-light text-2xl font-bold mb-7 mt-7">
				Project: Superidol (on progress)
			</p>
			<iframe class="w-full aspect-video"
				src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FOHkgAq8p7ByK3nvYIcdLz1%2F2SHOTGO!-Portfolio%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DhQozMtjWGujDRGus-1"
				allowfullscreen="true" mozallowfullscreen="true"
				webkitallowfullscreen="true"></iframe>
		</div>
-->
	</div>
</template>

<style scoped></style>
