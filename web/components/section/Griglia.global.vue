<template>
  <div>
    <div class="py-12">
      <div
        class="grid grid-cols-1 lg:grid-cols-6 gap-6"
        v-if="data.selectBy == 'tema'"
      >
        <nuxt-link
          :to="`/temi/${theme.slug.current}`"
          v-for="(theme, i) in allThemes"
          :key="i"
          class="auto-col w-full h-96 relative rounded-lg overflow-hidden flex justify-center items-center lg:col-span-2"
        >
          <SanityImage
            v-if="theme.image"
            :asset-id="theme.image.asset._ref"
            class="z-10 absolute top-0 left-0 w-full h-full object-cover"
          />
          <img
            v-else
            class="z-10 absolute top-0 left-0 w-full h-full object-cover"
            src="/images/media_post.png"
            alt=""
          />
          <span
            class="z-20 relative text-white text-3xl font-bold"
            >{{ theme.title ?? "Tema" }}</span
          >
        </nuxt-link>
      </div>

      <div
        class="grid grid-cols-1 lg:grid-cols-6 gap-6"
        v-if="data.selectBy == 'quartiere'"
      >
        <nuxt-link
          :to="`/quartieri/${quarter.slug.current}`"
          v-for="(quarter, i) in allQuarters"
          :key="i"
          class="auto-col w-full h-96 relative rounded-lg overflow-hidden flex justify-center items-center lg:col-span-2"
        >
          <SanityImage
            v-if="quarter.image"
            :asset-id="quarter.image.asset._ref"
            class="z-10 absolute top-0 left-0 w-full h-full object-cover"
          />
          <img
            v-else
            class="z-10 absolute top-0 left-0 w-full h-full object-cover"
            src="/images/media_post.png"
            alt=""
          />
          <span
            class="z-20 relative text-white text-3xl font-bold"
            >{{ quarter.title ?? "Tema" }}</span
          >
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  data: any;
}>();

const { allQuarters, allThemes } = useMainStore();
</script>

<style lang="postcss" scoped>
.auto-col:nth-child(5n + 1),
.auto-col:nth-child(5n + 2) {
  @apply lg:!col-span-3;
}
</style>
