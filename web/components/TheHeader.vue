<template>
  <div class="z-40 fixed top-0 left-0 w-full">
    <div class="dark:bg-brand-gray-600 py-3">
      <div
        class="grid grid-cols-2 lg:grid-cols-3 container"
      >
        <div class="flex items-center">
          <span class="text-sm dark:text-brand-gray-300"
            >Roma, {{ todayDate }}</span
          >
        </div>
        <ColorModeToggle class="hidden lg:flex" />

        <div class="flex gap-6 justify-end items-center">
          <span class="hidden lg:block text-xs"
            >SEGUICI SU:</span
          >
          <a href="/" target="_blank">
            <svgo-IG
              :fontControlled="false"
              class="w-5 dark:text-brand-gray-50"
            />
          </a>
          <a href="/" target="_blank">
            <svgo-FB
              :fontControlled="false"
              class="w-5 dark:text-brand-gray-50"
            />
          </a>
          <a href="/" target="_blank">
            <svgo-X
              :fontControlled="false"
              class="w-4 dark:text-brand-gray-50"
            />
          </a>
          <a href="/" target="_blank">
            <svgo-YT
              :fontControlled="false"
              class="w-6 dark:text-brand-gray-50"
            />
          </a>
        </div>
      </div>
    </div>

    <div class="dark:bg-brand-gray-700 py-5">
      <div class="container grid grid-cols-3">
        <nav class="hidden lg:flex items-center gap-6">
          <nuxt-link class="font-bold" to="/"
            >News</nuxt-link
          >
          <nuxt-link class="font-bold" to="/"
            >Quartieri di Roma</nuxt-link
          >
          <nuxt-link class="font-bold" to="/"
            >Temi</nuxt-link
          >
          <nuxt-link class="font-bold" to="/"
            >Segnalazioni</nuxt-link
          >
        </nav>
        <div class="lg:hidden flex items-center">
          <svgo-hamburger
            :fontControlled="false"
            class="w-5 !stroke-brand-gray-700 dark:!stroke-brand-gray-300"
            @click="toggleMenu"
          />
        </div>

        <div class="flex justify-center items-center">
          <nuxt-link to="/">
            <svgo-logo
              :fontControlled="false"
              class="w-44"
            />
          </nuxt-link>
        </div>

        <div
          class="hidden lg:flex justify-end items-center"
        >
          <div class="relative">
            <input
              type="search"
              placeholder="DIGITA PER CERCARE"
              class="placeholder:text-brand-gray-700 text-brand-gray-700 w-64"
              v-model="search"
            />
            <svgo-search
              :fontControlled="false"
              class="absolute top-1/2 right-2 transform -translate-y-1/2 w-4 text-brand-gray-700"
              :class="{ hidden: search.length }"
            />
          </div>
        </div>
        <div
          class="flex justify-end items-center lg:hidden"
        >
          <svgo-search
            :fontControlled="false"
            class="w-6 text-brand-gray-700 dark:text-brand-gray-50"
          />
        </div>
      </div>
    </div>
  </div>

  <transition name="fade">
    <div
      v-if="isMenuOpen"
      class="fixed lg:hidden inset-0 bg-black/30 z-40"
      @click="closeMenu"
    ></div>
  </transition>

  <!-- PANNELLO MENU LATERALE: compare con animazione SLIDE -->
  <transition name="slide-fade">
    <aside
      v-if="isMenuOpen"
      class="fixed lg:hidden top-0 left-0 z-50 w-full sm:w-2/3 md:w-1/2 lg:w-2/5 xl:w-2/6 h-full bg-brand-gray-50 dark:bg-brand-gray-700 bg-opacity-50 backdrop-blur-lg flex flex-col justify-start px-6 py-4 overflow-y-auto"
    >
      <!-- Voci di menu (verticali) -->
      <nav class="flex flex-col items-center gap-8 mt-4">
        <div
          class="w-full flex justify-between items-center"
        >
          <div></div>
          <svgo-close
            :fontControlled="false"
            class="w-6 h-6 cursor-pointer !stroke-brand-gray-700 dark:!stroke-brand-gray-50"
            @click="toggleMenu"
          />
        </div>
        <nuxt-link class="font-bold" to="/">News</nuxt-link>
        <nuxt-link class="font-bold" to="/"
          >Quartieri di Roma</nuxt-link
        >
        <nuxt-link class="font-bold" to="/">Temi</nuxt-link>
        <nuxt-link class="font-bold" to="/"
          >Segnalazioni</nuxt-link
        >
      </nav>

      <ColorModeToggle class="mt-8 flex" />
    </aside>
  </transition>
</template>

<script setup lang="ts">
const search = ref("");
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const todayDate = computed(() => {
  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const today = new Date();
  const formattedDate = new Intl.DateTimeFormat(
    "it-IT",
    options
  ).format(today);

  // Rimuove la virgola che potrebbe essere presente in alcuni formati locali
  return formattedDate.replace(",", "");
});
</script>

<style lang="postcss" scoped>
/* SLIDE + FADE per il pannello */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.slide-fade-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}
.slide-fade-enter-to {
  transform: translateX(0);
  opacity: 1;
}
.slide-fade-leave-from {
  transform: translateX(0);
  opacity: 1;
}
.slide-fade-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

/* FADE per l'overlay */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
