<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'Di bawah teduhnya pohon Elm Membalik lembar puisi Rilke Bibirmu sedang bergumam sendiri Apa yang ada di hatimu kini Sehingga membuatmu gelisah Akankah semua kan tertiup angin? Tanpa kau sadar Dari kejauhan Ku ingin melindungi dirimu Pandangan mata ini kan berikanmu kehangatan Sang mentari Diriku tak pantas jadi seorang pujangga cinta Daripada menghias kata Lebih baik diam di sini Diriku tak pantas jadi seorang pujangga cinta Biarkan hati ini terus berdebar Cukuplah menjadi bunga yang mekar Memakai seragam warna biru Lalu membetulkan ikatan pita Kamu tersenyum dan mulai berlari Yang kamu temukan di tempat itu Pasti bukanlah sebuah jawaban Jalanan yang disebut masa muda Saat kau lewat Di sebelahku Tercium wangi aroma tubuhmu Saat menoleh Ku melihat punggungmu yang disinari Sang mentari Hanya dengan kata, segalanya seakan menghilang Sesuatu yang lebih berharga Dari ungkapan perasaan Hanya dengan kata, segalanya seakan menghilang Biarlah perih terus terasa perih Cukuplah jadi bunga yang ku suka Diriku tak pantas jadi seorang pujangga cinta Daripada menghias kata Lebih baik diam di sini Diriku tak pantas jadi seorang pujangga cinta Biarkan hati ini terus berdebar Cukuplah menjadi bunga yang mekar',
				},
				{
					id: 2,
					bio:
						'Drama yang ditayangkan di acara Berita televisi yang sudah diatur Adalah makanan sehari-hari yang Seperti emoticon saja Orang dewasa dengan muka sok tahu Berlagak serius membahas masalahnya Analisisnya yang tak tepat sasaran Seperti lawakan yang tak lucu Penggolongan hanya berdasarkan nilai Yang menentukan masa depan Sudah Usaha keras pun tak bisa mengubah apapun Kan ketidakadilan Sudah kita sadari Sejak dahulu Rasa sayang yang dulu aku remehkan Sekarang ku sangat menginginkannya Ku tidak ingin terus hidup kesepian Rasanya ingin dipeluk oleh seseorang Gadis yang ingin menjadi burung itu Dengan tegapnya berdiri diatas atap Apa sebenarnya dia ingin dipuji? Ataukah ini suatu pertanda Angket tentang ada tidaknya penindasan pun Sudah terlambat kalau baru sekarang Suara hati yang ingin didengarkan itu Tak kan sampai ke pusat badai Proses pergantian kepeminpinan Membuat petinggi menangis Tapi Masih banyak lagi hal-hal konyol yang belum terungkap Tak berbuat apapun Tetapi menunjuk orang Itulah aku Rasa sayang yang dulu aku remehkan Sebenarnya ku haus kasih sayang Rasa khawatir pun tidak aku hiraukan Kucari yang memperhatikanku Setiap saat Rasa sayang yang dulu aku remehkan Sekarang ku sangat menginginkannya Ku tidak ingin terus hidup kesepian Rasanya ingin dipeluk oleh seseorang Setiap saat',
				},
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/profile.png"
				class="rounded-xl w-96"
				alt=""
			/>
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
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
