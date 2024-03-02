<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'Saya merupakan lulusan S1 Rekayasa Perangkat Lunak Telkom University yang tertarik mendalami mobile development, software quality assurance, dan UI/UX Design. Saya juga pernah mengerjakan penelitian untuk tugas akhir dan proyek mengenai desain UI/UX.',
				},
				{
					id: 2,
					bio:
						'Saya juga terlibat beberapa project untuk pembuatan website company profile untuk perusahaan, meliputi pengerjaan desain, pembangunan website, hingga penyusunan konten dan penyuntingan foto produk.',
				},
				{
					id: 3,
					bio:
						'Selama menjadi mahasiswa, saya pernah menjadi asisten dosen dan asisten di laboratorium untuk Object-Oriented Programming dan SE Implementation and Testing. Beberapa project di portfolio ini merupakan pengembangan dari tugas perkuliahan yang pernah saya kerjakan. Saya juga pernah menulis untuk pers mahasiswa, saya telah menulis 15 artikel selama 2 tahun sebagai staf dan pimpinan redaksi.',
				},
			],
			socialSharingsHeading: 'Media Sosial saya',
				socialSharings: [
					{
						id: 1,
						name: 'Twitter',
						icon: 'twitter',
						url: 'https://twitter.com/iqbalarauf',
					},
					{
						id: 2,
						name: 'Instagram',
						icon: 'instagram',
						url: 'https://instagram.com/iqbalarauf',
					},
					{
						id: 3,
						name: 'Github',
						icon: 'github',
						url: 'https://github.com/iqbalarauf',
					},
					{
						id: 4,
						name: 'LinkedIn',
						icon: 'linkedin',
						url: 'https://linkedin.com/in/iqbalarauf',
					},
					{
						id: 5,
						name: 'Youtube',
						icon: 'youtube',
						url: 'https://www.youtube.com/@ArgumentasiRealiti',
					},
				],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-5 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0 sm:items-center">
			<img
				src="@/assets/images/profile-removebg.png"
				class="rounded-xl w-96"
				alt=""
			/>
				<p
					class="text-left font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2 mt-5"
				>
					{{ socialSharingsHeading }}
				</p>
				<div class="flex items-center gap-5 mt-5">
					<a
						v-for="social in socialSharings"
						:key="social.id"
						:href="social.url"
						target="__blank"
						aria-label="Share Project"
						class="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"
						><i
							:data-feather="social.icon"
							class="w-4 lg:w-5 h-4 lg:h-5"
						></i
					></a>
				</div>
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-justify align-center">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
