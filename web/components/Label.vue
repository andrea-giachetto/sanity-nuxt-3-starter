<template>
  <div
    class="py-1 px-2 uppercase text-xs font-medium bg-brand-gray-700 text-brand-gray-50"
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
