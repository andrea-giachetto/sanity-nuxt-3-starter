<template>
  <div>
    <div class="container">
      <div
        class="flex flex-col gap-6 items-center justify-center text-center py-16"
      >
        <span>ESPLORA TUTTI I TEMI</span>
        <h1>Temi</h1>
      </div>
      <component
        v-for="(component, i) in data?.content.components"
        :is="`Section${component._type}`"
        :data="component"
        :key="i"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { themesPageQuery } from "@/queries/contentQueries";
const data = await useSanityData({
  query: themesPageQuery,
  params: {},
});
</script>
