<template>
  <div class="py-12">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div class="lg:col-span-9">
        <div class="flex gap-2">
          <Label text="ultime notizie" />
          <Label text="politica" color="#8D0942" />
        </div>
        <h2 class="mt-2 font-brand-secondary text-5xl lg:text-7xl font-normal">
          Lorem ipsum dolor sit amet consectetur. Commodo
          sollicitudin pellentesque a enim.
        </h2>
        <img src="/images/media_post.png" class="mt-12 w-full" />
      </div>
      <div class="lg:col-span-3 place-content-end">
        <span class="text-xl font-light py-2 block"
          >ULTIME NOTIZIE</span
        >
        <div class="border-t border-brand-gray-400 py-4 last:pb-0" v-for="i in 3">
          <div class="flex gap-2 py-4">
            <Label text="ultime notizie" />
            <Label text="politica" color="#8D0942" />
          </div>
          <h6 class="font-brand-secondary text-lg lg:text-2xl font-normal">
            Lorem ipsum dolor sit amet consectetur. Commodo
            sollicitudin pellentesque a enim.
          </h6>
        </div>
      </div>
    </div>
  </div>
</template>
