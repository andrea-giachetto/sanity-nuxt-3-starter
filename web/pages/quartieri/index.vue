<template>
  <div>
    <div class="container">
      <div
        class="flex flex-col gap-6 items-center justify-center text-center py-16"
      >
        <span>ESPLORA TUTTI I QUARTIERI</span>
        <h1>Quartieri</h1>
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
import { quartersPageQuery } from "@/queries/contentQueries";
const data = await useSanityData({
  query: quartersPageQuery,
  params: {},
});
</script>
