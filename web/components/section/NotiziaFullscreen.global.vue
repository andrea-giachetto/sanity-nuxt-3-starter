<template>
  <nuxt-link class="relative block py-12" :to="data?.news.slug.current">
    <SanityImage
      :asset-id="data?.news.image.asset._ref"
      class="w-full h-96 lg:h-auto object-cover"
    />
    <div
      class="absolute top-0 left-0 w-full h-full px-4 py-16 lg:px-12 lg:py-24"
    >
      <div class="flex">
        <Label
          :text="getThemeById(data?.news.tema._ref).title"
          :color="
            getThemeById(data?.news.tema._ref)
              .backgroundColor.value ?? 'white'
          "
        />
      </div>
      <h1 class="mt-4 text-3xl lg:text-7xl">{{ data?.news.title }}</h1>
    </div>
  </nuxt-link>
</template>

<script lang="ts" setup>
defineProps({
  data: Object,
});

const { getThemeById } = useMainStore();
</script>
