<script>
import AboutMe from '@/components/about/AboutMe';
import AboutCounter from '@/components/about/AboutCounter';
import feather from 'feather-icons';
import AboutCertificate from '../components/about/AboutCertificate.vue';

export default {
	name: 'About',
	components: {
    AboutMe,
    AboutCounter,
    AboutCertificate
},
	data: () => {
		return {};
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
	<div>
		<!-- About me -->
		<div class="container mx-auto">
			<AboutMe />
		</div>

		<!-- About counter -->
		<AboutCounter />
		<AboutCertificate />

		<!-- Github Activities -->
		<div class="container center mx-auto py-20 block sm:flex sm:justify-center sm:items-center bg-primary-light dark:bg-ternary-dark shadow-sm">
			<p class="font-general-medium text-2xl text-secondary-dark dark:text-secondary-light mb-2">
				Github Activities
			</p>
			<img class="object-center" src="https://ghchart.rshah.org/iqbalarauf" alt="IqbalARauf's Github chart"
				width="1400" />
		</div>
	</div>
</template>

<style scoped></style>
