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
					description: 'Bertanggung jawab mendampingi dan mengawasi mahasiswa praktikan di kelas praktikum serta melakukan penilaian dan rekap terhadap hasil pengerjaan praktikan di kelas praktikum sebanyak 40 orang di 5 kelas dan 2 program studi (Informatika dan Teknologi Informasi)'
				},
				{
					img: require('@/assets/images/experience/telkomuniv.jpg'),
					company: 'Telkom University',
					position: 'Asisten Dosen - Pemrograman Berorientasi Objek',
					startDate: 'September 2023',
					endDate: 'January 2024',
					description: 'Mengadakan responsi perkuliahan dan mengontrol progres pengerjaan tugas besar 34 mahasiswa kelas mata kuliah Pemrograman Berorientasi Obyek sebanyak 7 kali pertemuan.'
				},
				{
					img: require('@/assets/images/experience/telkomuniv.jpg'),
					company: 'Telkom University',
					position: 'Asisten Dosen - RPL Implementasi dan Pengujian',
					startDate: 'September 2023',
					endDate: 'January 2024',
					description: 'Mengadakan kelas responsi dan mengontrol progres pengerjaan tugas besar 26 mahasiswa kelas mata kuliah RPL Implementasi Pengujian sebanyak 4 kali pertemuan.'
				},
				{
					img: require('@/assets/images/experience/diskominfojpr.jpg'),
					company: 'Diskominfo Kabupaten Jepara',
					position: 'Intern Programmer',
					startDate: 'August 2022',
					endDate: 'June 2022',
					description: 'Membangun terlibat dalam sebuah proyek pengembangan aplikasi e-government dengan tanggung jawab meliputi analisis dan pembuatan dokumentasi aplikasi yang telah dibuat serta membangun desain aplikasi Android.'
				},
			],
			education: [
				{
					img: require('@/assets/images/experience/telkomuniv.jpg'),
					school: 'Telkom University',
					major: 'Sarjana Rekayasa Perangkat Lunak (S.Si.Kom.)',
					generation: '2019-2024',
				},
				{
					img: require('@/assets/images/experience/m2k.jpg'),
					school: 'MA Negeri 2 Kudus',
					major: 'Program Peminatan Matematika dan IPA',
					generation: '2016-2019',
				},
			]
		}
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-1 mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
		<!-- Experience -->
			<div class="container w-full mx-auto py-10">
				<p class="text-left w-1/2 font-general-bold text-3xl text-secondary-dark dark:text-secondary-light mb-5">
				Experience
			</p>
			<section v-for="(job, index) in experience" :key="index">
				<div class="flex flex-row mb-2">
					<div><img
							:src="job.img"
							class="w-12 rounded-xl"
					/></div>	
					<div>
						<h2 class="text-start font-general-bold text-2xl text-secondary-dark dark:text-secondary-light mb-2 pt-2 pl-4">
							{{ job.company }}</h2>
					</div>
				</div>	
				<div class="w-full mb-7 sm:mb-0">
					<div class="w-full mb-7 sm:mb-0">
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
			<div class="container w-full mx-auto py-10">
				<p class="text-left w-1/2 font-general-bold text-3xl text-secondary-dark dark:text-secondary-light mb-5">
				Education
			</p>
			<section v-for="(edu, index) in education" :key="index">
				<div class="flex flex-row mb-2">
					<div><img
							:src="edu.img"
							class="inline w-12 rounded-xl"
					/></div>	
					<div>
						<h2 class="text-left font-general-bold text-2xl text-secondary-dark dark:text-secondary-light mb-2 pt-0 pl-4">
							{{ edu.school }}</h2>
							
					</div>
				</div>		
				<div class="w-full mb-7 sm:mb-0">
					<div class="w-full mb-7 sm:mb-0">
						<p class="text-left font-general-medium text-lg text-ternary-dark dark:text-ternary-light mb-2 pt-0">
								{{ edu.major }}
							</p>
						<div class="mb-7">
							<p class="text-left font-general-regular text-md text-primary-dark dark:text-ternary-light">
								Year active: {{ edu.generation }}
							</p>
						</div>
					</div>
				</div>
			</section>
			</div>
		</div>
</template>
