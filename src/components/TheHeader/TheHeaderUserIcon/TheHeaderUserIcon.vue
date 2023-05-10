<template>
  <component
    :is="tag"
    class="the-header-user-icon"
  >
    <VIcon
      class="the-header-user-icon__icon"
      group-name="user"
      :icon-name="iconName"
    />
    <span
      v-if="counter"
      class="the-header-user-icon__counter"
      >{{ counter }}</span
    >
  </component>
</template>

<script setup lang="ts">
import VIcon, { type VIconGroupNamesUser } from "@components/VIcon";

export type PossibleTags = "a" | "span" | "div";

export interface Props {
  iconName: VIconGroupNamesUser;
  counter?: string | number;
  tag?: PossibleTags;
}

withDefaults(defineProps<Props>(), {
  tag: "a",
});
</script>

<style scoped lang="scss">
.the-header-user-icon {
  position: relative;

  display: grid;
  place-items: center;

  width: 40px;
  height: 40px;

  background-color: var(--global-color-s);
  border-radius: 50%;

  cursor: pointer;

  &__icon {
    fill: var(--global-color-sc);
    stroke: var(--global-color-sc);
  }

  &__counter {
    position: absolute;
    top: -1px;
    left: 23px;
    z-index: 2;

    display: grid;
    place-items: center;

    min-width: 18px;
    height: 18px;
    padding: 1px 2px;
    border: 2px solid var(--global-color-b);

    color: var(--global-color-b);
    font-size: 11px;
    line-height: 1.1;

    background-color: var(--global-color-accent);
    border-radius: 50%;
  }
}
</style>
