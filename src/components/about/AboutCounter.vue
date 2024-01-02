<script>
export default {
	setup() {
		return {
			experience: [
				{
					img: require('@/assets/images/experience/iflab.jpg'),
					company: 'Informatics Lab Telkom University',
					position: 'Laboratory Assistant - Object-oriented Programming',
					startDate: 'September 2023',
					endDate: 'January 2024',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget elit sit amet libero vestibulum fermentum.'
				},
				{
					img: require('@/assets/images/experience/telkomuniv.jpg'),
					company: 'Telkom University',
					position: 'Lecturer Assistant - Object-oriented Programming',
					startDate: 'September 2023',
					endDate: 'January 2024',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget elit sit amet libero vestibulum fermentum.'
				},
				{
					img: require('@/assets/images/experience/telkomuniv.jpg'),
					company: 'Telkom University',
					position: 'Lecturer Assistant - SE Implementation and Testing',
					startDate: 'September 2023',
					endDate: 'January 2024',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget elit sit amet libero vestibulum fermentum.'
				},
				{
					img: require('@/assets/images/experience/diskominfojpr.jpg'),
					company: 'Informatics and Communication Regency of Jepara',
					position: 'Programmer',
					startDate: 'August 2022',
					endDate: 'June 2022',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget elit sit amet libero vestibulum fermentum.'
				},
			],
			education: [
				{
					img: require('@/assets/images/experience/telkomuniv.jpg'),
					school: 'Telkom University',
					major: 'Bachelor of Software Engineering',
					generation: '2019-now',
					activity: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget elit sit amet libero vestibulum fermentum.'
				},
				{
					img: require('@/assets/images/experience/m2k.jpg'),
					school: 'MAN 2 Kudus',
					major: 'Science',
					generation: '2016-2019',
					activity: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget elit sit amet libero vestibulum fermentum.'
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
							<p
								class="text-left font-general-regular text-md text-primary-dark dark:text-ternary-light mt-2">
								{{ edu.activity }}
							</p>
						</div>
					</div>
				</div>
			</section>
			</div>
		</div>
</template>
