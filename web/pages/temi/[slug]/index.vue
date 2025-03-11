<template>
  <div>
    <div class="container">
      <h1 class="mt-12">Articoli per: {{data?.title}}</h1>
      <component
        v-for="(component, i) in data?.content.components"
        :is="`Section${component._type}`"
        :data="component"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { themeQuery } from "@/queries/contentQueries";
const route = useRoute();
const data = await useSanityData({
  query: themeQuery,
  params: {
    slug: route.params.slug,
  },
});
</script>
