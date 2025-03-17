<template>
  <div class="flex gap-2 items-center" v-if="route.path !== '/'">
    <!-- Cicliamo su ogni breadcrumb tranne l'ultima pagina -->
    <div
      v-for="(crumb, index) in breadcrumbs"
      :key="index"
      class="py-4 flex gap-2 items-center"
    >
      <nuxt-link :to="crumb.path" class="link">
        {{ crumb.label }}
      </nuxt-link>

      <!-- Mostriamo la freccetta solo se NON è l'ultimo breadcrumb -->
      <svgo-chevron
        v-if="index < breadcrumbs.length - 1"
        class="text-gray-500 w-4 h-4"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const breadcrumbs = computed(() => {
  // Dividiamo il path in segmenti, ignorando quelli vuoti
  const segments = route.path.split('/').filter(Boolean)

  // Rimuoviamo l’ultimo segmento (la pagina corrente)
  // così da non renderla cliccabile
  segments.pop()

  // Creiamo il nostro array di segmenti, a cui aggiungiamo HOME come primo elemento
  const breadcrumbSegments = segments.map((seg, index) => {
    return {
      label: seg.toUpperCase(), // se la vuoi tutta maiuscola
      path: '/' + segments.slice(0, index + 1).join('/')
    }
  })

  // Mettiamo HOME come primo breadcrumb
  breadcrumbSegments.unshift({
    label: 'HOME',
    path: '/'
  })

  return breadcrumbSegments
})
</script>

<style scoped lang="postcss">
.link {
  @apply font-brand-secondary dark:text-brand-gray-300 text-brand-gray-500 uppercase text-xs;
}
</style>
