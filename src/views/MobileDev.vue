<script>
import feather from 'feather-icons';
import ProjectHeader from '../components/skills/SkillHeader.vue';
import ProjectInfo from '../components/skills/SkillsInfo.vue';

export default {
	name: 'Mobile Application Development',
	components: {
		ProjectHeader,
		ProjectInfo,
	},
	data: () => {
		return {
			singleProjectHeader: {
				singleProjectTitle: 'Mobile Application Development',
				singleProjectTag: 'Hard Skills',
			},
			projectInfo: {
				companyInfos: [
					{
						title: 'Mata Kuliah Terkait',
						details: [
							'Pemrograman Mobile',
						],
					},
				],
				objectivesHeading: 'Kursus Terkait',
				objectivesDetails:
					'Dicoding Indonesia - Belajar Membuat Aplikasi Flutter untuk Pemula (Terbit Agustus 2022)',
				technologies: [
					{
						title: 'Tools & Technologies',
						techs: [
							'Flutter',
							'Firebase',
							'Java',
						],
					},
				],
				projectDetailsHeading: 'Details Information',
				projectDetails: [
					{
						id: 1,
						details:
							'Seiring perkembangan terhadap dunia digital, mobile app development merupakan salah satu inovasi teknologi yang berkembang pesat hari ini dan banyak menjangkau aspek kehidupan sehari-hari. Mulai dari bisnis, hiburan, media komunikasi, kesehatan, bahkan transportasi. Hal tersebut tidak terlepas dari penggunaan perangkat ponsel pintar yang meningkat di masyarakat dan berjalannya fungsi pemanfaatan aplikasi seluler yang berguna untuk mempermudah kegiatan manusia.',
					},
					{
						id: 2,
						details:
							'Berkaitan dengan studi yang pernah saya ambil di bidang studi Software Engineering, pengembangan aplikasi mobile ini diimplementasikan dalam tugas besar gabungan beberapa mata kuliah, salah satunya di mata kuliah Pemrograman Mobile (2 SKS).',
					},
					{
						id: 3,
						details:
							'Dalam perkuliahan, saya diajarkan bagaimana membangun sebuah aplikasi mobile berbasis framework Flutter. Meskipun begitu, saya juga menguasai dasar pengembangan aplikasi Android menggunakan bahasa pemrograman Java dan Kotlin.',
					},
					{
						id: 4,
						details:
							'Portfolio yang pernah saya kerjakan terkait dengan Mobile Application Development tercantum di halaman ini, dan terhubung ke akses repositori Github.',
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
				First Project: Social-Media Based Covid Tracker
			</p>
			<iframe class="w-full aspect-video"
				src="https://github.com/iqbalarauf/SocmedCovidTracker"
				allowfullscreen="true" mozallowfullscreen="true"
				webkitallowfullscreen="true"></iframe>
		</div>
		<div class="flex justify-center gap-5">
				<a
					href="https://github.com/iqbalarauf/SocmedCovidTracker" target="_blank"
					class="flex justify-center items-center w-96 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
				>
					<i
						data-feather="github"
						class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100"
					></i>
					<span
						class="text-sm sm:text-lg font-general-medium duration-100"
						>Akses Repositori Github</span
					></a
				>
		</div>

		<div class="w-full items-center mt-10 mb-10 sm:mt-0">
			<p class="font-general-medium text-primary-dark dark:text-primary-light text-2xl font-bold mb-2 mt-7">
				Second Project: E-Government Report App (Presentation Only)
			</p>
			<span
					class="font-general-medium ml-2 mb-10 leading-none text-primary-dark dark:text-primary-light text-center"
					>Related to Programmer Intern at Dinas Komunikasi dan Informatika Kabupaten Jepara</span
				>
			<iframe class="w-full aspect-video"
				src="https://docs.google.com/presentation/d/e/2PACX-1vRsNN09gCIQ_RAqGLBxNaWT127Z-zuMPmVq-Fy_i2no9SfetECy8TnNZzzgV7DONkXukED52-Exm28C/embed?start=false&loop=false&delayms=3000"
				allowfullscreen="true" mozallowfullscreen="true"
				webkitallowfullscreen="true"></iframe>
		</div>
	</div>
</template>

<style scoped></style>
