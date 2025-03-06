<template>
  <div
    class="py-1 px-2 uppercase text-xs font-medium dark:bg-brand-gray-700 dark:text-brand-gray-50 bg-brand-gray-50 text-brand-gray-700"
    :style="{ color: props.color }"
  >
    {{ props.text }}
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  text: String,
  color: {
    type: String,
    default: "",
  },
});
</script>
