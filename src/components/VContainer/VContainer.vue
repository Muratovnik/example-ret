<template>
  <div class="v-container">
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.v-container {
  box-sizing: content-box;
  width: var(--global-main-container-width);
  padding-inline: var(--global-main-container-padding);
  margin-inline: auto;
}
</style>
