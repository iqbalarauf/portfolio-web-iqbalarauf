<script>
import AppBanner from '@/components/shared/AppBanner';
import ProjectsGrid from '../components/projects/ProjectsGrid.vue';
import Button from '../components/reusable/Button.vue';

export default {
	name: 'Home',
	components: {
		AppBanner,
		ProjectsGrid,
		Button,
	},
};
</script>

<template>
	<div class="container mx-auto">
		<!-- Banner -->
		<AppBanner class="mb-5 sm:mb-8" />

		<!-- Card Container Start -->
		<div class="text-center">
			<p
				class="font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light">
				Skills
			</p>
		</div>
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 sm:gap-10">
			<div
				class="md:mt-10 h-84 border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-secondary-light dark:bg-ternary-dark text-gray-500 dark:text-white">
				<div class="flex flex-row justify-center">
					<svg class="w-12 ml-8 items-center dark:fill-white" xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24" id="mobile">
						<path
							d="M16,2H8A3,3,0,0,0,5,5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V5A3,3,0,0,0,16,2Zm1,17a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V18H17Zm0-3H7V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z">
						</path>
					</svg>
					<h3 class="font-general-semibold text-xl font-semibold mt-2 mb-3 px-4">Mobile Application
						Development</h3>
				</div>
				<p class="mt-2 text-md p-5">Kemampuan dalam pengembangan aplikasi mobile khususnya Flutter dan dapat
					memahami Java. Memiliki keahlian dalam desain UI/UX dan integrasi API</p>
				<div>
					<router-link to="/skills/mobile-dev" custom v-slot="{ navigate }">
						<button class="border border-indigo-200 dark:border-ternary-dark shadow-lg rounded-lg bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white duration-100 m-5 p-3" @click="navigate" role="link">
							Read More
						</button>
					</router-link>
				</div>
			</div>
			<div
				class="md:mt-10 block border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-secondary-light dark:bg-ternary-dark text-gray-500 dark:text-white">
				<div class="flex flex-row justify-center">
					<svg class="w-12 ml-8 items-center dark:fill-white" xmlns="http://www.w3.org/2000/svg"
						enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="task-list">
						<path
							d="M16.71 9.29c-.39-.39-1.02-.39-1.41 0L14 10.59l-.29-.29c-.39-.39-1.02-.39-1.41 0s-.39 1.02 0 1.41l1 1C13.49 12.9 13.74 13 14 13s.51-.1.71-.29l2-2C17.1 10.32 17.1 9.68 16.71 9.29zM16 3v4c0 .55-.45 1-1 1H9C8.45 8 8 7.55 8 7V3c0-.55.45-1 1-1h6C15.55 2 16 2.45 16 3zM8 12c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1V12zM8 17c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1V17zM15.71 14.29c-.39-.39-1.02-.39-1.41 0L14 14.59l-.29-.29c-.39-.39-1.02-.39-1.41 0s-.39 1.02 0 1.41L12.59 16l-.29.29c-.39.39-.39 1.02 0 1.41C12.49 17.9 12.74 18 13 18s.51-.1.71-.29L14 17.41l.29.29C14.49 17.9 14.74 18 15 18s.51-.1.71-.29c.39-.39.39-1.02 0-1.41L15.41 16l.29-.29C16.1 15.32 16.1 14.68 15.71 14.29z">
						</path>
						<path
							d="M20,5v16c0,0.55-0.45,1-1,1H5c-0.55,0-1-0.45-1-1V5c0-0.55,0.45-1,1-1h2v2H6v14h12V6h-1V4h2C19.55,4,20,4.45,20,5z">
						</path>
					</svg>
					<h3 class="font-general-semibold text-xl font-semibold mt-2 mb-3 px-4">Software Quality Assurance
					</h3>
				</div>
				<p class="mt-2 text-md p-5">Memahami pengujian dan aspek quality assurance perangkat lunak, dengan
					kemampuan menguji, mengidentifikasi bug, dan memastikan kualitas aplikasi.</p>
					<div>
					<router-link to="/skills/software-qa" custom v-slot="{ navigate }">
						<button class="border border-indigo-200 dark:border-ternary-dark shadow-lg rounded-lg bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white duration-100 m-5 p-3" @click="navigate" role="link">
							Read More
						</button>
					</router-link>
				</div>
			</div>
			<div
				class="md:mt-10 block border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-secondary-light dark:bg-ternary-dark text-gray-500 dark:text-white">
				<div class="flex flex-row justify-center">
					<svg class="w-12 ml-8 items-center dark:fill-white" xmlns="http://www.w3.org/2000/svg"
						data-name="User Interface" viewBox="0 0 48 48" id="user-interface">
						<path
							d="M43 0H5a5 5 0 0 0-5 5v38a5 5 0 0 0 5 5h38a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5ZM5 2h38a3 3 0 0 1 3 3v3H2V5a3 3 0 0 1 3-3Zm38 44H5a3 3 0 0 1-3-3V10h44v33a3 3 0 0 1-3 3Z">
						</path>
						<path
							d="M42.44 5.83a1 1 0 1 0 .94-1.75 1 1 0 0 0-.94 1.75zM40 5a1 1 0 0 0-2 0 1 1 0 0 0 2 0zm-5.38.92a1 1 0 0 0 1.09-1.63c-1.33-1.07-2.47 1.1-1.09 1.63zM5 6h18a1 1 0 0 0 0-2H5a1 1 0 0 0 0 2zm8 25a9 9 0 1 0-9-9 9 9 0 0 0 9 9zm-3.9-3.19c2.56-3.72 5.24-3.72 7.8 0a7 7 0 0 1-7.8 0zM11 21a2 2 0 1 1 2 2 2 2 0 0 1-2-2zm2-6a7 7 0 0 1 5.39 11.46 9.93 9.93 0 0 0-2.62-2.59 4 4 0 1 0-5.54 0 9.93 9.93 0 0 0-2.62 2.59A7 7 0 0 1 13 15zm9 23h-8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2zm0-4H5a1 1 0 0 0 0 2h17a1 1 0 0 0 0-2zm0 8H5a1 1 0 0 0 0 2h17a1 1 0 0 0 0-2zm21-4H26a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zm-1 4H27v-2h15zm1-16h-6a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1zm-1 8h-4v-6h4zm-16 2h7a1 1 0 0 0 0-2h-7a1 1 0 0 0 0 2zm0-4h7a1 1 0 0 0 0-2h-7a1 1 0 0 0 0 2zm0-4h7a1 1 0 0 0 0-2h-7a1 1 0 0 0 0 2zm17-6H26a1 1 0 0 0 0 2h17a1 1 0 0 0 0-2zm0-10H26a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6H27v-4h15zM5 40h5a1 1 0 0 0 0-2H5a1 1 0 0 0 0 2z">
						</path>
					</svg>
					<h3 class="font-general-semibold text-xl font-semibold mt-2 mb-3 px-4">User Experience Design</h3>
				</div>
				<p class="mt-2 text-md p-5">Menguasai prinsip desain UI/UX untuk menciptakan antarmuka yang menarik dan
					mudah digunakan, meningkatkan pengalaman pengguna secara efektif.</p>
					<div>
					<router-link to="/skills/ui-ux" custom v-slot="{ navigate }">
						<button class="border border-indigo-200 dark:border-ternary-dark shadow-lg rounded-lg bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white duration-100 m-5 p-3" @click="navigate" role="link">
							Read More
						</button>
					</router-link>
				</div>
			</div>
		</div>

		<!-- Projects -->
		<ProjectsGrid />

		<!-- Load more projects button -->
		<div class="mt-10 sm:mt-20 flex justify-center">
			<router-link to="/projects"
				class="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
				aria-label="More Projects">
				<Button title="Tampilkan Lebih Banyak" />
			</router-link>
		</div>
	</div>
</template>

<style scoped></style>
