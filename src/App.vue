<template>
  <div class="app">
    <TheHeader />
    <RouterView />
    <VSelect
      v-model="currentSite"
      :items="possibleSites"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";

import { useCurrentSiteStore } from "@stores/currentSite";
import type { Sites } from "@types";

import TheHeader from "@components/TheHeader";
import { RouterView } from "vue-router";
import { VSelect } from "vuetify/components";

const possibleSites = ref<Sites[]>(["asko", "bosh", "falmec", "elica"]);
const currentSite = ref<Sites>("asko");

const currentSiteStore = useCurrentSiteStore();

const accentColor = computed<string>(
  () => currentSiteStore.siteInfo.accentColor,
);

watch(currentSite, (val) => {
  currentSiteStore.setSite(val);
});
</script>

<!-- eslint-disable-next-line vue-scoped-css/enforce-style-type -->
<style lang="scss">
@use "@style/variables" as vars;
/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */
.app {
  --global-color-accent: hsl(v-bind(accentColor));
  --global-color-accent-01: hsl(v-bind(accentColor) / 0.1);
  --global-color-accent-03: hsla(v-bind(accentColor) / 0.3);
  --global-color-accent-07: hsla(v-bind(accentColor) / 0.7);
  --global-color-b-hsl: 0, 0%, 100%;
  --global-color-b: hsl(var(--global-color-b-hsl));
  --global-color-b-07: hsla(var(--global-color-b-hsl) / 0.7);
  --global-color-b-03: hsla(var(--global-color-b-hsl) / 0.3);
  --global-color-bc-hsl: 0, 0%, 0%;
  --global-color-bc: hsl(var(--global-color-bc-hsl));
  --global-color-bc-03: hsla(var(--global-color-bc-hsl) / 0.3);
  --global-color-bc-05: hsla(var(--global-color-bc-hsl) / 0.5);
  --global-color-bc-07: hsla(var(--global-color-bc-hsl) / 0.7);
  --global-color-s-hsl: 0, 0%, 95%; // secondary
  --global-color-s: hsl(var(--global-color-s-hsl)); // secondary
  --global-color-s-03: hsla(var(--global-color-s-hsl) / 0.3);
  --global-color-s-07: hsla(var(--global-color-s-hsl) / 0.7);
  --global-color-sc-hsl: 225, 2%, 49%; // secondary-contrast. Контрастный вторичному цвету
  --global-color-sc: hsl(var(--global-color-sc-hsl));
  --global-color-sc-03: hsla(var(--global-color-sc-hsl) / 0.3);
  --global-color-sc-07: hsla(var(--global-color-sc-hsl) / 0.7);
}
</style>

<style lang="scss" scoped></style>
