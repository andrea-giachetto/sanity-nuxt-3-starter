<template>
  <nuxt-link
    class="block relative"
    :to="`/articolo/${data?.slug.current}`"
  >
    <SanityImage
      :asset-id="data?.image.asset._ref"
      class="h-96 object-cover w-full"
    />
    <div
      class="bg-brand-gray-300 dark:bg-brand-gray-500 p-4 flex flex-col gap-4 items-start justify-start rounded-b-lg lg:h-48"
    >
      <Label
        :text="getThemeById(data?.tema._ref).title"
        :color="
          getThemeById(data?.tema._ref).backgroundColor
            .value
        "
      />
      <h4
        class="font-brand-secondary text-lg lg:text-2xl font-semibold"
      >
        {{ data?.title }}
      </h4>
      <span
        class="block mt-4 uppercase text-brand-gray-400 text-xs lg:absolute lg:bottom-4"
        >{{
          timeAgo(data?._updatedAt ?? data?._createdAt)
        }}
        - TEMPO DI LETTURA {{ data?.readingTime }}'</span
      >
    </div>
  </nuxt-link>
</template>

<script setup lang="ts">
const props = defineProps({
  data: Object,
});

const { getThemeById } = useMainStore();
const { timeAgo } = useEditorialUtils();
</script>
