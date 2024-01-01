<script>
export default {
	setup() {
		return {
			experience: [
				{
					company: 'Informatics Lab Telkom University',
					position: 'Laboratory Assistant - Object-oriented Programming',
					startDate: 'September 2023',
					endDate: 'January 2024',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget elit sit amet libero vestibulum fermentum.'
				},
				{
					company: 'Telkom University',
					position: 'Teaching Assistant - Object-oriented Programming',
					startDate: 'September 2023',
					endDate: 'January 2024',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget elit sit amet libero vestibulum fermentum.'
				},
				{
					company: 'Telkom University',
					position: 'Teaching Assistant - SE Implementation and Testing',
					startDate: 'September 2023',
					endDate: 'January 2024',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget elit sit amet libero vestibulum fermentum.'
				},
				{
					company: 'Informatics and Communication Regency of Jepara',
					position: 'Programmer',
					startDate: 'August 2022',
					endDate: 'June 2022',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget elit sit amet libero vestibulum fermentum.'
				},
			]
		}
	},
};
</script>

<template>
	<div class="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm divide-y">
		<!-- Portfolio -->
		<div class="container mx-auto py-10">
			<p class="font-general-bold text-3xl text-secondary-dark dark:text-secondary-light mb-5">
				Experience
			</p>

			<section v-for="(job, index) in experience" :key="index">
				<h2 class="text-left font-general-bold text-2xl text-secondary-dark dark:text-secondary-light mb-2">{{
					job.company }}</h2>
				<div class="mb-7">
					<p class="text-left font-general-medium text-xl text-ternary-dark dark:text-ternary-light mb-2">
						{{ job.position }}
					</p>
					<p class="text-left font-general-regular text-md text-primary-dark dark:text-ternary-light">
						{{ job.startDate }} - {{ job.endDate }}
					</p>
					<p class="text-left font-general-regular text-md text-primary-dark dark:text-ternary-light mt-2">
					{{ job.description }}
				</p>
				</div>
			</section>
		</div>
	</div>
</template>
