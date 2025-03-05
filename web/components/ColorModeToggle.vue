<template>
  <div class="justify-center items-center">
    <button
      class="flex px-3 py-1 bg-brand-gray-50 rounded-full items-center gap-1"
      @click="colorMode.preference = 'light'"
      :class="{
        'border border-brand-gray-700 z-10':
          colorMode.preference === 'light',
        'opacity-60': colorMode.preference === 'dark',
      }"
    >
      <span class="text-brand-gray-600 text-sm">LIGHT</span>
      <svgo-solar
        :fontControlled="false"
        class="w-6 text-brand-gray-600"
      />
    </button>
    <button
      class="flex px-3 py-1 bg-brand-gray-700 rounded-full border border-brand-gray-50 items-center gap-1 -ml-4"
      @click="colorMode.preference = 'dark'"
      :class="{
        'border border-brand-gray-50 z-10':
          colorMode.preference === 'dark',
        'opacity-60': colorMode.preference === 'light',
      }"
    >
      <span class="text-brand-gray-50 text-sm">DARK</span>
      <svgo-moon
        :fontControlled="false"
        class="w-6 text-brand-gray-50"
      />
    </button>
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
</script>
