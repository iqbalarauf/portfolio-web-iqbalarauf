<script>
export default {
	props: ['projectImages'],
};
</script>

<template>
	<div class="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
		<div
			class="mb-10 sm:mb-0"
			v-for="projectImage in projectImages"
			:key="projectImage.id"
		>
			<img
				:src=projectImage.img
				class="w-96 h-96 object-cover rounded-xl cursor-pointer shadow-lg sm:shadow-none"

			/>
		</div>
	</div>
</template>
