<template>
	<main class="Home">
		<section v-if="data" class="Home_Projects">
			<ul>
				<li v-for="project in data.projects" :key="project._id" class="Home_Item">
					<ElementsTextLink v-if="project?._id" link-type="internalLink" route="projects-slug"
						:slug="project.slug.current">
						<ElementsMediaBaseFigure :image="project.titleImage" class="Home_Image imagelink" use-hotspot />
						<span class="Home_Head text-lg">
							{{ project.title }}
						</span>
						<span class="text-base text_bold">
							{{ project.subtitle }}
						</span>
					</ElementsTextLink>
				</li>
			</ul>
		</section>
	</main>
</template>

<script setup>
import { homeQuery } from '@/queries/contentQueries'

// get data
const mainStore = useMainStore()
console.log('homeQuery', homeQuery)
const data = await useSanityData({
	query: homeQuery,
})

// meta
usePageHead({
	title: '',
})
</script>
