<template>
  <div class="container">
    <main>
      <p class="text-lg">
        <span class=""
          >Error {{ props.error.statusCode }}:</span
        >
        {{ props.error.message }}
      </p>
      <button @click="handleError" class="">
        Back to Main
      </button>
    </main>
  </div>
</template>

<script setup>
const props = defineProps({
  error: {
    type: Object,
    default: () => {},
  },
});

const handleError = () => clearError({ redirect: "/" });
</script>

<style scoped>
main {
  position: relative;
}

button {
  margin-top: 2rem;
}
</style>
