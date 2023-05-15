<template>
  <a class="v-logo">
    <svg class="v-logo__image">
      <use :xlink:href="logoPath" />
    </svg>
  </a>
</template>

<script setup lang="ts">
import { computed } from "vue";

import type { Sites } from "@types";

interface Props {
  logoName: Sites;
}

const props = defineProps<Props>();

const logoPath = computed<string>(
  () => `./images/icons/sprites/logos.svg#${props.logoName}`,
);
</script>

<style scoped lang="scss">
.v-logo {
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 261px;
  height: 64px;
  margin: 0 auto;

  &__image {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>
