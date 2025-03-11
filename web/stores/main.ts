import { defineStore } from "pinia";
import { siteQuery } from "@/queries/contentQueries";

export const useMainStore = defineStore("mainStore", () => {
  const previewIsActive: Ref<Boolean> = ref(false);
  const allThemes: Ref = ref(null);
  const allTags: Ref = ref(null);
  const allQuarters: Ref = ref(null);

  const fetchAll = async () => {
    const { data } = await useSanityQuery(siteQuery);
    allThemes.value = data.value?.temi;
    allTags.value = data.value?.tags;
    allQuarters.value = data.value?.quartieri;
  };

  const getThemeById = (id: string) => {
    return allThemes.value.find(
      (theme: any) => theme._id === id
    );
  };

  const getTagById = (id: string) => {
    return allTags.value.find(
      (tag: any) => tag._id === id
    );
  };

  const getQuarterById = (id: string) => {
    return allQuarters.value.find(
      (quarter: any) => quarter._id === id
    );
  }

  return {
    previewIsActive,
    allThemes,
    allTags,
    allQuarters,
    fetchAll,
    getThemeById,
    getTagById,
    getQuarterById
  };
});
