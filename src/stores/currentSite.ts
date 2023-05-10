import { defineStore } from "pinia";
import { computed, ref } from "vue";

import type { Sites } from "@types";

const sites = {
  asko: {
    accentColor: "344deg 100% 39%",
    name: "asko",
  },
  bosh: {
    accentColor: "201deg 100% 30%",
    name: "bosh",
  },
  falmec: {
    accentColor: "188deg 100% 31%",
    name: "falmec",
  },
  elica: {
    accentColor: "192deg 91% 37%",
    name: "elica",
  },
};

export const useCurrentSiteStore = defineStore("currentSite", () => {
  const site = ref<Sites>("asko");

  const setSite = (siteName: Sites) => {
    site.value = siteName;
  };

  const siteInfo = computed(() => sites[site.value]);

  return { site, setSite, siteInfo };
});
