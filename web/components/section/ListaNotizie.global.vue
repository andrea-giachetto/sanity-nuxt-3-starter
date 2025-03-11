<template>
  <div class="py-12">
    <h3 class="text-3xl lg:text-5xl font-semibold">
      {{ props.data?.title }}
    </h3>
    <div
      class="grid grid-cols-1 gap-8 mt-6"
      :class="{
        'lg:grid-cols-2': props.data?.columns === '2-cols',
        'lg:grid-cols-3':
          props.data?.columns === '3-cols-v2',
        'lg:grid-cols-4':
          data?.columns === '4-cols' ||
          data?.columns === '3-cols-v1',
      }"
    >
      <NewsCard
        v-for="(el, i) in props.data?.newsList"
        :key="i"
        :class="{
          'lg:first:col-span-2':
            props.data?.columns === '3-cols-v1',
        }"
        :data="el"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  data: Object,
});
</script>
