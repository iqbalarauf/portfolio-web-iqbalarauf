<script>
export default {
	setup() {
		return {
			experience: [
				{
					img: require('@/assets/images/experience/iflab.jpg'),
					company: 'Informatics Lab Telkom University',
					position: 'Asisten Praktikum - Pemrograman Berorientasi Objek',
					startDate: 'September 2023',
					endDate: 'January 2024',
					description: 'Menjadi asisten Praktikum untuk mata kuliah Pemrograman Berorientasi Objek (OOP) yang bertugas untuk: \n Menyiapkan ruangan dan peralatan di ruangan kelas praktikum \n Mendampingi dan mengawasi mahasiswa praktikan di kelas praktikum \n Melakukan penilaian dan rekap terhadap hasil pengerjaan praktikan di kelas praktikum'
				},
				{
					img: require('@/assets/images/experience/telkomuniv.jpg'),
					company: 'Telkom University',
					position: 'Asisten Dosen - Pemrograman Berorientasi Objek',
					startDate: 'September 2023',
					endDate: 'January 2024',
					description: 'Membantu tugas dosen dalam menilai dan merekap progres tugas besar mahasiswa \nMengadakan responsi mahasiswa terkait dengan materi kelas dan tugas besar'
				},
				{
					img: require('@/assets/images/experience/telkomuniv.jpg'),
					company: 'Telkom University',
					position: 'Asisten Dosen - RPL Implementasi dan Pengujian',
					startDate: 'September 2023',
					endDate: 'January 2024',
					description: 'Membantu tugas dosen dalam menilai dan merekap progres tugas besar mahasiswa \nMengadakan responsi mahasiswa terkait dengan materi kelas dan tugas besar'
				},
				{
					img: require('@/assets/images/experience/diskominfojpr.jpg'),
					company: 'Dinas Komunikasi dan Informatika Kabupaten Jepara',
					position: 'Programmer',
					startDate: 'August 2022',
					endDate: 'June 2022',
					description: 'Terlibat dalam sebuah proyek pengembangan aplikasi e-government milik pemerintah kabupaten Jepara. \n Tanggung jawab saya meliputi penulisan teknikal (membuat dokumentasi aplikasi UML dan DFD) dan programmer mobile (Flutter-based Apps)'
				},
			],
			education: [
				{
					img: require('@/assets/images/experience/telkomuniv.jpg'),
					school: 'Telkom University',
					major: 'Sarjana Rekayasa Perangkat Lunak',
					generation: '2019-now',
				},
				{
					img: require('@/assets/images/experience/m2k.jpg'),
					school: 'MAN 2 Kudus',
					major: 'IPA',
					generation: '2016-2019',
				},
			]
		}
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-5 mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
		<!-- Experience -->
			<div class="container w-5/6 mx-auto py-10">
				<p class="text-left w-1/2 font-general-bold text-3xl text-secondary-dark dark:text-secondary-light mb-5">
				Experience
			</p>
			<section v-for="(job, index) in experience" :key="index">
				<div class="w-full mb-7 sm:mb-0">
						<img
							:src="job.img"
							class="w-12 rounded-xl"
						/>
					</div>	
				<div class="w-full mb-7 sm:mb-0">
					<div class="w-full mb-7 sm:mb-0">
						<h2 class="text-left font-general-bold text-2xl text-secondary-dark dark:text-secondary-light mb-2">
							{{
								job.company }}</h2>
						<div class="mb-7">
							<p class="text-left font-general-medium text-xl text-ternary-dark dark:text-ternary-light mb-2">
								{{ job.position }}
							</p>
							<p class="text-left font-general-regular text-md text-primary-dark dark:text-ternary-light">
								{{ job.startDate }} - {{ job.endDate }}
							</p>
							<p
								class="text-left font-general-regular text-md text-primary-dark dark:text-ternary-light mt-2">
								{{ job.description }}
							</p>
						</div>
					</div>
				</div>
			</section>
			</div>
			<div class="container w-5/6 mx-auto py-10">
				<p class="text-left w-1/2 font-general-bold text-3xl text-secondary-dark dark:text-secondary-light mb-5">
				Education
			</p>
			<section v-for="(edu, index) in education" :key="index">
				<div class="mb-7 sm:mb-0">
						<img
							:src="edu.img"
							class="w-12 rounded-xl"
						/>
					</div>	
				<div class="w-full mb-7 sm:mb-0">
					<div class="w-full mb-7 sm:mb-0">
						<h2 class="text-left font-general-bold text-2xl text-secondary-dark dark:text-secondary-light mb-2">
							{{ edu.school }}</h2>
						<div class="mb-7">
							<p class="text-left font-general-medium text-xl text-ternary-dark dark:text-ternary-light mb-2">
								{{ edu.major }}
							</p>
							<p class="text-left font-general-regular text-md text-primary-dark dark:text-ternary-light">
								{{ edu.generation }}
							</p>
						</div>
					</div>
				</div>
			</section>
			</div>
		</div>
</template>
