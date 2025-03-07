<template>
  <div>
    <div class="container">
      <component
        v-for="(component, i) in data?.content.components"
        :is="`Section${component._type}`"
        :data="component"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { homeQuery } from "@/queries/contentQueries";
const data = await useSanityData({
  query: homeQuery,
  params: {},
});
</script>
