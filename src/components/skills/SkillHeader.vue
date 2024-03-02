<script>
export default {
	props: ['singleProjectHeader'],
};
</script>

<template>
	<div>
		<!-- Project heading and meta info -->
		<div class="flex place-content-center mb-2">
				<i
					data-feather="tag"
					class="w-4 h-4 text-ternary-dark dark:text-ternary-light"
				></i>
				<span
					class="font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light text-center"
					>{{ singleProjectHeader.singleProjectTag }}</span
				>
			</div>
		<p
			class="font-general-medium text-center text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light"
		>
			{{ singleProjectHeader.singleProjectTitle }}
		</p>
	</div>
</template>
