<script>
import feather from 'feather-icons';
import ProjectHeader from '../components/skills/SkillHeader.vue';
import ProjectInfo from '../components/projects/ProjectInfo.vue';

export default {
	name: 'News and Content Writing',
	components: {
		ProjectHeader,
		ProjectInfo,
	},
	data: () => {
		return {
			singleProjectHeader: {
				singleProjectTitle: 'News and Content Writing',
				singleProjectTag: 'Hard Skills',
			},
			projectInfo: {
				clientHeading: 'Pengalaman Terkait',
				companyInfos: [
					{
						id: 1,
						title: '2022',
						details: 'Pimpinan Umum UKM Aksara Jurnalistik Telkom University',
					},
					{
						id: 2,
						title: '2021',
						details: 'Kepala Departemen Redaksi UKM Aksara Jurnalistik Telkom University',
					},
					{
						id: 3,
						title: '2020',
						details: 'Jurnalis Muda Departemen Redaksi UKM Aksara Jurnalistik Telkom University',
					},
					{
						id: 4,
						title: '2017-2018',
						details: 'Koordinator Divisi Sinematografi Journalistic Fun Club MAN 2 Kudus',
					},
				],
				objectivesHeading: '',
				objectivesDetails:
					'',
				technologies: [
					{
						title: '',
						techs: [
							'',
						],
					},
				],
				projectDetailsHeading: 'Details Information',
				projectDetails: [
					{
						id: 1,
						details:
							'Jurnalistik adalah disiplin yang mencakup penelitian, penulisan, dan penyampaian berita dan informasi kepada khalayak. Ruang lingkupnya meliputi liputan berita, investigasi, feature, opini, dan masih banyak lagi. Melalui praktik jurnalistik, kita dapat menginformasikan masyarakat tentang peristiwa penting, isu-isu terkini, dan tren yang memengaruhi kehidupan sehari-hari. Selain itu, jurnalistik memiliki peran penting dalam memeriksa kekuasaan, mendukung transparansi, dan mempromosikan akuntabilitas di semua tingkatan pemerintahan dan masyarakat. Dengan memberikan platform untuk berbagai suara dan sudut pandang, jurnalistik juga dapat memperkuat demokrasi dan membantu masyarakat memahami kompleksitas dunia yang terus berubah.',
					},
					{
						id: 2,
						details:
							'Dalam bidang jurnalistik, saya telah berkecimpung dalam ekstrakurikuler di sekolah dan unit lembaga pers mahasiswa di kampus. Selain itu, penulis juga menulis artikel kreatif lain melalui platform pribadi di ArgumentasiRealiti dan platform lain seperti Kompasiana. Dengan pengalaman observasi dan menulis yang cukup lama dalam membuat sebuah produk jurnalistik berbasis teks dan audiovisual, tentu saja dapat menjadi nilai tambah kemampuan dalam kepenulisan kreatif.',
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

		<div class="flex justify-center gap-5">
				<a
					href="https://argumentasirealiti.iqbalarauf.my.id" target="_blank"
					class="flex justify-center items-center w-96 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
					aria-label="Drive Dokumen"
				>
					<i
						data-feather="book"
						class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100"
					></i>
					<span
						class="text-sm sm:text-lg font-general-medium duration-100"
						>Akses Website ArgumentasiRealiti</span
					></a
				>
		</div>
		
		<div class="w-full items-center mt-10 sm:mt-0">
			<p class="font-general-medium text-primary-dark dark:text-primary-light text-2xl font-bold mb-7 mt-7">
				Majalah: Podium 12 (sebagai koordinator divisi Redaksi)
			</p>
			<iframe class="w-full aspect-video"
				src="https://drive.google.com/file/d/1exG3nguXehCfZTkDLrHQ4dv_jOIGdyk5/preview"
				allowfullscreen="true" mozallowfullscreen="true"
				webkitallowfullscreen="true"></iframe>
		</div>
		<div class="w-full items-center mt-10 sm:mt-0">
			<p class="font-general-medium text-primary-dark dark:text-primary-light text-2xl font-bold mb-7 mt-7">
				Majalah: Daypost 12 (sebagai pimpinan redaksi)
			</p>
			<iframe class="w-full aspect-video"
				src="https://drive.google.com/file/d/1oDmnEdcYd6dUIhH-hmiwpnY2xWxr6WbD/preview"
				allowfullscreen="true" mozallowfullscreen="true"
				webkitallowfullscreen="true"></iframe>
		</div>
	</div>

	<div class="container mx-auto">
        <div class="text-center border-b border-primary-light
					dark:border-secondary-dark">
					<p class="font-general-medium text-primary-dark dark:text-primary-light text-2xl font-bold mb-7 mt-7">
				Berita yang pernah ditulis
			</p>
        </div>
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
		<a
		href="https://aksarapers.com/menanti-lanjutan-evaluasi-bem-kema-telkom-university/" target="_blank"
		class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
	>
		<div>
			<img
				src="https://aksarapers.com/wp-content/uploads/2021/12/DPM_Indepth-780x470.jpg"
				alt="project.title"
				class="h-80 w-full object-cover rounded-t-xl border-none"
			/>
		</div>
		<div class="text-center px-4 py-6">
			<p
				class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"
			>
				Menanti Lanjutan Evaluasi BEM KEMA Telkom University
			</p>
			<span
				class="font-general-medium text-lg text-ternary-dark dark:text-ternary-light"
				>In-depth News</span
			>
		</div>
	</a>
	<a
		href="https://aksarapers.com/apa-kabar-bpp-kita-isu-seksi-kampus-di-setiap-semester/" target="_blank"
		class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
	>
		<div>
			<img
				src="https://aksarapers.com/wp-content/uploads/2021/09/BPP_Issue4-780x470.jpg"
				alt="project.title"
				class="h-80 w-full object-cover rounded-t-xl border-none"
			/>
		</div>
		<div class="text-center px-4 py-6">
			<p
				class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"
			>
			Apa Kabar BPP Kita? : Isu Kampus di Setiap Semester
			</p>
			<span
				class="font-general-medium text-lg text-ternary-dark dark:text-ternary-light"
				>In-depth News</span
			>
		</div>
	</a>
	<a
		href="https://aksarapers.com/pelarangan-organisasi-ekstra-kampus-menurut-kemahasiswaan-telkom-university/" target="_blank"
		class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
	>
		<div>
			<img
				src="https://aksarapers.com/wp-content/uploads/2021/04/Gd-Bangkit-780x470.jpg"
				alt="project.title"
				class="h-80 w-full object-cover rounded-t-xl border-none"
			/>
		</div>
		<div class="text-center px-4 py-6">
			<p
				class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"
			>
			PU Ormawa Menurut Kemahasiswaan Telkom University
			</p>
			<span
				class="font-general-medium text-lg text-ternary-dark dark:text-ternary-light"
				>Headline News</span
			>
		</div>
	</a>
	<a
		href="https://aksarapers.com/kronologi-tenggelamnya-mahasiswa-telkom-university-di-situ-tekno/" target="_blank"
		class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
	>
		<div>
			<img
				src="https://aksarapers.com/wp-content/uploads/2022/08/Danau_Galau_Telkom_University-780x470.jpg"
				alt="project.title"
				class="h-80 w-full object-cover rounded-t-xl border-none"
			/>
		</div>
		<div class="text-center px-4 py-6">
			<p
				class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"
			>
			Kronologi Tenggelamnya Mahasiswa Telkom University di Situ Tekno
			</p>
			<span
				class="font-general-medium text-lg text-ternary-dark dark:text-ternary-light"
				>Headline News</span
			>
		</div>
	</a>
	<a
		href="https://aksarapers.com/ulasan-toxic-relationship-pada-single-era-baru-jkt48/" target="_blank"
		class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
	>
		<div>
			<img
				src="https://aksarapers.com/wp-content/uploads/2021/03/wota-780x470.jpg"
				alt="project.title"
				class="h-80 w-full object-cover rounded-t-xl border-none"
			/>
		</div>
		<div class="text-center px-4 py-6">
			<p
				class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"
			>
			Ulasan Toxic Relationship Pada Single Era Baru JKT48
			</p>
			<span
				class="font-general-medium text-lg text-ternary-dark dark:text-ternary-light"
				>Featured</span
			>
		</div>
	</a>
	<a
		href="https://aksarapers.com/kebijakan-kampus-merdeka-dalam-kurikulum-2020/" target="_blank"
		class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
	>
		<div>
			<img
				src="https://aksarapers.com/wp-content/uploads/2020/09/Gd-Tokong-Nanas-768x512.jpg"
				alt="project.title"
				class="h-80 w-full object-cover rounded-t-xl border-none"
			/>
		</div>
		<div class="text-center px-4 py-6">
			<p
				class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"
			>
			Kebijakan Kampus Merdeka dalam Kurikulum 2020
			</p>
			<span
				class="font-general-medium text-lg text-ternary-dark dark:text-ternary-light"
				>Featured</span
			>
		</div>
	</a>
	</div>

	<div class="w-full items-center mt-10 sm:mt-0">
			<p class="font-general-medium text-primary-dark dark:text-primary-light text-2xl font-bold mb-7 mt-7">
				Jurnalistik MAN 2 Kudus: Edited and Cameramen by IqbalAR
			</p>
			<iframe class="w-full aspect-video"
			src="https://www.youtube.com/embed/videoseries?si=vmWK_7x1mgTEFcD7&amp;list=PLzc5ZZVCaPdPjQMQc9gdGlCVAG-5SQhGo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
		</div>
	</div>
</template>

<style scoped></style>
