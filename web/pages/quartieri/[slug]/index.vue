<template>
  <div>
    <div class="container">
      <h1 class="mt-12">Articoli per: {{ data?.title }}</h1>
      <component
        v-if="data?.content"
        v-for="(component, i) in data?.content.components"
        :is="`Section${component._type}`"
        :data="component"
      />
      <p v-else class="text-center py-12">
        Nessun contenuto da mostrare
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { quartersQuery } from "@/queries/contentQueries";
const route = useRoute();
const data = await useSanityData({
  query: quartersQuery,
  params: {
    slug: route.params.slug,
  },
});
</script>
