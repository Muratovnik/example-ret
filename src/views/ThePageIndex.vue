<template>
  <div class="the-page-index">
    <VContainer>
      <div class="the-page-index__info">
        <div
          v-for="(item, i) in showedSiteInformation"
          :key="i"
          class="the-page-index__info-row"
        >
          <span class="the-page-index__info-item">{{ item.text }}</span>
          <span
            class="the-page-index__info-item the-page-index__info-item--highliht"
            >{{ item.value }}</span
          >
        </div>
      </div>
    </VContainer>
  </div>
</template>

<script setup lang="ts">
import { useCurrentSiteStore } from "@stores/currentSite";
import { computed } from "vue";

import VContainer from "@components/VContainer";

const currentSiteStore = useCurrentSiteStore();

const showedSiteInformation = computed(() => {
  const showedSiteInfoContainer = {
    name: {
      text: "Выбран сайт:",
      value: "",
    },
    accentColor: {
      text: "Акцентный цвет (hsl):",
      value: "",
    },
  };

  Object.keys(currentSiteStore.siteInfo).map((infoBlockKey) => {
    showedSiteInfoContainer[
      infoBlockKey as keyof typeof showedSiteInfoContainer
    ].value =
      currentSiteStore.siteInfo[
        infoBlockKey as keyof typeof currentSiteStore.siteInfo
      ];
  });

  return showedSiteInfoContainer;
});
</script>

<style scoped lang="scss">
.the-page-index {
  flex-direction: column;
  gap: 8px;

  &__info-row {
    display: flex;
    gap: 4px;
  }

  &__info-item {
    &--highliht {
      color: var(--global-color-accent);
    }
  }
}
</style>
