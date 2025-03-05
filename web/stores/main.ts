import { defineStore } from "pinia";
export const useMainStore = defineStore("mainStore", () => {
  const previewIsActive: Ref<Boolean> = ref(false);
  return {
    previewIsActive,
  };
});
