<template>
  <div class="py-12" v-if="props.data?.layout === 'home'">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div class="lg:col-span-9">
        <div class="flex gap-2">
          <Label text="ultime notizie" />
          <Label text="politica" color="#8D0942" />
        </div>
        <h2
          class="mt-2 font-brand-secondary text-5xl lg:text-7xl font-normal"
        >
          Lorem ipsum dolor sit amet consectetur. Commodo
          sollicitudin pellentesque a enim.
        </h2>
        <img
          src="/images/media_post.png"
          class="mt-12 w-full"
        />
      </div>
      <div class="lg:col-span-3 place-content-end">
        <span class="text-xl font-light py-2 block"
          >ULTIME NOTIZIE</span
        >
        <div
          class="border-t border-brand-gray-400 py-4 last:pb-0"
          v-for="i in 3"
        >
          <div class="flex gap-2 py-4 items-start">
            <Label text="ultime notizie" />
            <Label text="politica" color="#8D0942" />
          </div>
          <h6
            class="font-brand-secondary text-lg lg:text-2xl font-normal"
          >
            Lorem ipsum dolor sit amet consectetur. Commodo
            sollicitudin pellentesque a enim.
          </h6>
        </div>
      </div>
    </div>
  </div>

  <div class="py-12" v-else>
    <h3 class="text-3xl lg:text-5xl font-semibold">
      Notizie in Evidenza
    </h3>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
      <div>
        <img src="/images/media_post.png" class="w-full" />
        <div class="flex gap-2 mt-8">
          <Label text="ultime notizie" />
          <Label text="politica" color="#8D0942" />
        </div>
        <h3 class="mt-2 font-semibold">
          Lorem ipsum dolor sit amet consectetur. Commodo
          sollicitudin pellentesque a enim.
        </h3>
        <span
          class="block mt-4 uppercase text-brand-gray-400 text-xs"
          >2 ORE FA - TEMPO DI LETTURA 1'</span
        >
      </div>
      <div
        class="lg:border-l lg:pl-6 border-brand-gray-400"
      >
        <div
          class="border-t border-brand-gray-400 py-4 last:pb-0 first:border-none grid grid-cols-1 lg:grid-cols-2 gap-2"
          v-for="i in 3"
        >
          <div>
            <div class="flex gap-2 py-4 items-start">
              <Label text="ultime notizie" />
              <Label text="politica" color="#8D0942" />
            </div>
            <h5
              class="font-brand-secondary text-lg lg:text-2xl font-normal"
            >
              Lorem ipsum dolor sit amet consectetur.
              Commodo sollicitudin pellentesque a enim.
            </h5>
          </div>
          <img
            src="/images/media_post.png"
            class="w-full"
          />
          <span
            class="block mt-4 uppercase text-brand-gray-400 text-xs"
            >2 ORE FA - TEMPO DI LETTURA 1'</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  data: Object,
});
</script>
