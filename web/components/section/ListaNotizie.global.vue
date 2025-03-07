<template>
  <div class="py-12">
    <h3 class="text-3xl lg:text-5xl font-semibold">
      {{ props.data?.title }}
    </h3>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  data: Object,
});
</script>
