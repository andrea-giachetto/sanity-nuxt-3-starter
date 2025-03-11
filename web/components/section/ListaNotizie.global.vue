<template>
  <div class="py-12" v-if="data?.layout == 'preview'">
    <h3 class="text-3xl lg:text-5xl font-semibold">
      {{ data?.title ?? "" }}
    </h3>
    <nuxt-link
      :to="
        selectedContext
          ? `/temi/${selectedContext?.slug.current}`
          : '/'
      "
      class="flex gap-4 mt-2"
    >
      <svgo-arrow
        :fontControlled="false"
        class="w-5 text-purple-600"
      />
      <span class="block">VEDI TUTTI GLI ARTICOLI</span>
    </nuxt-link>
    <div
      class="grid grid-cols-1 gap-8 mt-6"
      :class="{
        'lg:grid-cols-2': data?.columns === '2-cols',
        'lg:grid-cols-3': data?.columns === '3-cols-v2',
        'lg:grid-cols-4':
          data?.columns === '4-cols' ||
          data?.columns === '3-cols-v1',
      }"
    >
      <NewsCard
        v-for="(el, i) in data?.newsList.slice(
          0,
          4 - sliceFactor
        )"
        :key="i"
        :class="{
          'lg:first:col-span-2':
            data?.columns === '3-cols-v1',
        }"
        :data="el"
      />
    </div>
  </div>

  <div class="py-12" v-else>
    <h3 class="text-3xl lg:text-5xl font-semibold">
      {{ data?.title }}
    </h3>
    <div
      class="grid grid-cols-1 gap-8 mt-6"
      :class="{
        'lg:grid-cols-2': data?.columns === '2-cols',
        'lg:grid-cols-3': data?.columns === '3-cols-v2',
        'lg:grid-cols-4':
          data?.columns === '4-cols' ||
          data?.columns === '3-cols-v1',
      }"
    >
      <NewsCard
        v-for="(el, i) in data?.newsList.slice(
          0,
          4 - sliceFactor
        )"
        :key="i"
        :class="{
          'lg:first:col-span-2':
            data?.columns === '3-cols-v1',
        }"
        :data="el"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const { getQuarterById, getThemeById } = useMainStore();

const props = defineProps({
  data: Object,
});

const selectedContext = ref(null);
switch (props.data?.selectBy) {
  case "tema":
    selectedContext.value = getThemeById(
      props.data?.tema._ref
    );
    break;
  case "quartiere":
    selectedContext.value = getQuarterById(
      props.data?.quartiere._ref
    );
    break;
  // case "tag":
  //   selectedContext.value = getTagById(
  //     props.data?.tag._ref
  //   );
  //   break;
}

const sliceFactor = ref(0);
if (props.data?.layout == "preview") {
  switch (props.data?.columns) {
    case "2-cols":
      sliceFactor.value = 2;
      break;
    case "3-cols-v1":
      sliceFactor.value = 1;
      break;
    case "3-cols-v2":
      sliceFactor.value = 1;
      break;
    case "4-cols":
      break;
  }
}
</script>
