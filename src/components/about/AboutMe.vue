<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'I am a Software Engineering student. Currently I am studying mobile programming, especially in Flutter. I am also interested in Web Development, especially about Frontend Developer, Wordpress-based, and PHP Laravel. I have also done research for theses and projects regarding UI/UX design.',
				},
				{
					id: 2,
					bio:
						'I have been involved in several projects to create websites for companies, including design work, building WordPress-based websites, to preparing content and editing product photos.',
				},
				{
					id: 3,
					bio:
						'During my time as a student, I was a teaching assistant and laboratory assistant for Object-Oriented Programming and SE Implementation and Testing. Some of the projects in this portfolio are developments of lecture assignments that I have worked on. I have also written for the student press, I have written 15 articles during 2 years as staff and editor-in-chief. After this, I will continue to develop content creators for everyday technology use for society.',
				},
			],
			socialSharingsHeading: 'My Social Media',
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
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/profile.png"
				class="rounded-xl w-96"
				alt=""
			/>
				<p
					class="text-left font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2 mt-5"
				>
					{{ socialSharingsHeading }}
				</p>
				<div class="flex items-center gap-3 mt-5">
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
		<div class="w-full sm:w-3/4 text-left align-center">
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
