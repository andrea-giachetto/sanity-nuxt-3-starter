<template>
  <div class="py-12" v-if="data?.layout === 'home'">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <nuxt-link
        :to="`/articolo/${mainNews?.slug.current}`"
        class="lg:col-span-9 block"
      >
        <div class="flex gap-2">
          <Label text="ultime notizie" />
          <Label
            :text="getThemeById(mainNews?.tema._ref).title"
            :color="
              getThemeById(mainNews?.tema._ref)
                .backgroundColor.value
            "
          />
        </div>
        <h2
          class="mt-2 font-brand-secondary text-5xl lg:text-7xl font-normal"
        >
          {{ mainNews?.title }}
        </h2>
        <SanityImage
          :asset-id="mainNews?.image.asset._ref"
          class="mt-12 w-full"
        />
      </nuxt-link>
      <div class="lg:col-span-3 place-content-end">
        <span class="text-xl font-light py-2 block"
          >ULTIME NOTIZIE</span
        >
        <nuxt-link
          :to="`/articolo/${el.news.slug.current}`"
          class="border-t border-brand-gray-400 py-4 last:pb-0 block"
          v-for="(el, i) in data?.list.slice(1, 4)"
          :key="i"
        >
          <div class="flex gap-2 py-4 items-start">
            <Label text="ultime notizie" />
            <Label
              :text="getThemeById(el.news.tema._ref).title"
              :color="
                getThemeById(el.news.tema._ref)
                  .backgroundColor.value
              "
            />
          </div>
          <h6
            class="font-brand-secondary text-lg lg:text-2xl font-normal"
          >
            {{ el.news.title }}
          </h6>
          <span
            class="block mt-4 uppercase text-brand-gray-400 text-xs"
            >{{ timeAgo(el.news._updatedAt) }} - TEMPO DI
            LETTURA {{ el.news.readingTime }}'</span
          >
        </nuxt-link>
      </div>
    </div>
  </div>

  <div class="py-12" v-else>
    <h3 class="text-3xl lg:text-5xl font-semibold">
      Notizie in Evidenza
    </h3>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
      <nuxt-link
        :to="`/articolo/${mainNews?.slug.current}`"
        class="block"
      >
        <SanityImage
          :asset-id="mainNews?.image.asset._ref"
          class="w-full"
        />
        <div class="flex gap-2 mt-8">
          <Label text="ultime notizie" />
          <Label
            :text="getThemeById(mainNews?.tema._ref).title"
            :color="
              getThemeById(mainNews?.tema._ref)
                .backgroundColor.value
            "
          />
        </div>
        <h3 class="mt-2 font-semibold">
          {{ mainNews?.title }}
        </h3>
        <span
          class="block mt-4 uppercase text-brand-gray-400 text-xs"
          >{{ timeAgo(mainNews._updatedAt) }} - TEMPO DI
          LETTURA {{ mainNews.readingTime }}'</span
        >
      </nuxt-link>
      <div
        class="lg:border-l lg:pl-6 border-brand-gray-400"
      >
        <nuxt-link
          :to="`/articolo/${el.news.slug.current}`"
          class="border-t border-brand-gray-400 py-4 last:pb-0 first:border-none grid grid-cols-1 lg:grid-cols-2 gap-2 block"
          v-for="(el, i) in data?.list.slice(1, 4)"
          :key="i"
        >
          <div>
            <div class="flex gap-2 py-4 items-start">
              <Label text="ultime notizie" />
              <Label
                :text="
                  getThemeById(el.news.tema._ref).title
                "
                :color="
                  getThemeById(el.news.tema._ref)
                    .backgroundColor.value
                "
              />
            </div>
            <h5
              class="font-brand-secondary text-lg lg:text-2xl font-normal"
            >
              {{ el.news.title }}
            </h5>
          </div>
          <SanityImage
            :asset-id="mainNews?.image.asset._ref"
            class="w-full"
          />
          <span
            class="block mt-4 uppercase text-brand-gray-400 text-xs"
            >{{ timeAgo(el.news._updatedAt) }} - TEMPO DI
            LETTURA {{ el.news.readingTime }}'</span
          >
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  data: Object,
});

const mainNews = computed(() => {
  return props.data?.list[0].news;
});

const { getThemeById } = useMainStore();

const { timeAgo } = useEditorialUtils();
</script>
