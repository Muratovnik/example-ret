<template>
  <VDropdown :items="cityChoosers"> Санкт-Петербург </VDropdown>
</template>

<script setup lang="ts">
import { ref } from "vue";

import VDropdown from "@components/VDropdown";

const cityChoosers = ref([]);
</script>

<style scoped lang="scss"></style>
