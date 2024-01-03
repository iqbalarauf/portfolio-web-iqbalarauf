<script>
import feather from 'feather-icons';
import ProjectHeader from '../components/projects/ProjectHeader.vue';
import ProjectGallery from '../components/projects/ProjectGallery.vue';
import ProjectInfo from '../components/projects/ProjectInfo.vue';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects.vue';

export default {
	name: 'Laroyba',
	components: {
		ProjectHeader,
		ProjectGallery,
		ProjectInfo,
		ProjectRelatedProjects,
	},
	data: () => {
		return {
			singleProjectHeader: {
				singleProjectTitle: 'AksaraPers.com News',
				singleProjectDate: 'January 2020 - December 2022',
				singleProjectTag: 'Content Writing',
			},
			projectImages: [
				{
					id: 1,
					title: 'Laroyba Classic Furniture Website',
					img: require('@/assets/images/aksarapers.png'),
				},
				{
					id: 2,
					title: 'Laroyba Classic Furniture Website',
					img: require('@/assets/images/aksarapers2.png'),
				},
				{
					id: 3,
					title: 'Laroyba Classic Furniture Website',
					img: require('@/assets/images/aksarapers3.png'),
				},
			],
			projectInfo: {
				clientHeading: 'Experience',
				companyInfos: [
					{
						id: 1,
						title: '2022',
						details: 'President',
					},
					{
						id: 2,
						title: '2021',
						details: 'Head of Departement Redactional',
					},
					{
						id: 3,
						title: '2020',
						details: 'Intern Journalist',
					},
					{
						id: 4,
						title: 'Website',
						details: 'http://aksarapers.com',
					},
				],
				objectivesHeading: 'About AksaraPers',
				objectivesDetails:
					'Aksara merupakan salah satu Unit Kegiatan Mahasiswa (UKM) penalaran di Telkom University yang menggeluti bidang jurnalistik dan sastra.',
				technologies: [
					{
						title: '',
						techs: [
							'',
						],
					},
				],
				projectDetailsHeading: 'Challenge',
				projectDetails: [
					{
						id: 1,
						details:
							'Saya telah menulis 15 berita/artikel selama 2 tahun kepengurusan sebagai staf intern (disebut sebagai jurnalis muda) dan pimpinan redaksi/kepala departemen redaksi. Berita yang saya tulis beragam, mulai dari berita dan isu kampus dan artikel featured dengan berbagai topik.',
					},
					{
						id: 2,
						details:
							'Saya bertanggung jawab sebagai pimpinan redaksi untuk buletin Daypost 12 dan majalah Podium 12 sebagai koordinator redaksi. Di edisi Podium & Daypost 11 berperan sebagai anggota redaksi',
					},
				],
			},
			relatedProject: {
				relatedProjectsHeading: 'Related Projects',
				relatedProjects: [
				{
						id: 1,
						title: 'Laroyba Classic',
						img: require('@/assets/images/laroyba-classic/first.jpg'),
						link: '/projects/lrb-project',
					},
					{
						id: 2,
						title: 'E-Government Report App',
						img: require('@/assets/images/report/satu.jpg'),
						link: '/projects/egov-report',
					},
					{
						id: 3,
						title: 'Social-Media Based Covid Tracker',
						img: require('@/assets/images/smct/first.jpg'),
						link: '/projects/socmed-covid-tracker',
					},
					{
						id: 4,
						title: 'AksaraPers News',
						img: require('@/assets/images/aksarapers.png'),
						link: '/projects/aksarapers-news',
					},
				],
			},
		};
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
	<div class="container mx-auto mt-10 sm:mt-20">
		<!-- Project header -->
		<ProjectHeader :singleProjectHeader="singleProjectHeader" />

		<!-- Project gallery -->
		<ProjectGallery :projectImages="projectImages" />

		<!-- Project information -->
		<ProjectInfo :projectInfo="projectInfo" />

		<!-- Project related projects -->
		<ProjectRelatedProjects :relatedProject="relatedProject" />
	</div>
</template>

<style scoped></style>
