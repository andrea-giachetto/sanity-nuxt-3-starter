export default defineNuxtPlugin(async (nuxtApp) => {
  const { fetchAll } = useMainStore();
  await fetchAll();
});
