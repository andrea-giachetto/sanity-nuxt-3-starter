<template>
  <div>
    <div class="container">
      <SectionUltimeNotizie />
    </div>
  </div>
</template>

<script setup lang="ts">
import { homeQuery } from "@/queries/contentQueries";
const data = await useSanityData({
  query: homeQuery,
});
</script>