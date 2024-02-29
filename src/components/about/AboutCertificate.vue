<script>
export default {
	setup() {
		return {
			certificate: [
				{
					img: 'https://149357281.v2.pressablecdn.com/wp-content/uploads/2020/12/android-chrome-512x512-1.png',
					company: 'Coursera',
					coursename: 'Google IT Support',
					startDate: 'August 2022',
					skill:'Jaringan dan Infrastruktur, Technical Support, Maintenance, Security IT, Operating System',
				},
				{
					img: 'https://ugc.production.linktr.ee/2o7y5umLRGOM9l8PRNzI_tebVjFfDsH7h7SP5',
					company: 'MySkill',
					coursename: 'Quality Assurance',
					startDate: 'February 2024',
					skill:'Quality Assurance, Katalon Studio, API Testing, Postman, Selenium, Mobile Testing, Appium, Manual Testing, Automation Testing, Jira, Non-Functional Testing, CI/CD, Test Planning, Bug Fixing',
				},
				{
					img: 'https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/new-ui-logo.png',
					company: 'Dicoding Indonesia',
					coursename: 'Belajar Membuat Aplikasi Flutter untuk Pemula',
					startDate: 'August 2022',
					skill:'Flutter, Dart, Mobile Development',
				},
			],
		}
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-1 mt-10">
		<!-- Experience -->
			<div class="container w-full mx-auto py-10">
				<p class="text-left w-full font-general-bold text-3xl text-secondary-dark dark:text-secondary-light mb-5">
				License and Certificate
			</p>
			<section v-for="(course, index) in certificate" :key="index">
				<div class="flex flex-row mb-2">
					<div><img
							:src="course.img"
							class="w-12 rounded-xl"
					/></div>	
					<div>
						<h2 class="text-start font-general-bold text-2xl text-secondary-dark dark:text-secondary-light mb-2 pt-2 pl-4">
							{{ course.company }}</h2>
					</div>
				</div>	
				<div class="w-full mb-7 sm:mb-0">
					<div class="w-full mb-7 sm:mb-0">
						<div class="mb-7">
							<p class="text-left font-general-medium text-xl text-ternary-dark dark:text-ternary-light mb-2">
								{{ course.coursename }}
							</p>
							<p class="text-left font-general-regular text-md text-primary-dark dark:text-ternary-light">
								Terbit: {{ course.startDate }}
							</p>
							<p
								class="text-left font-general-regular text-md text-primary-dark dark:text-ternary-light mt-2">
								Skill: {{ course.skill }}
							</p>
						</div>
					</div>
				</div>
			</section>
			</div>
		</div>
</template>
