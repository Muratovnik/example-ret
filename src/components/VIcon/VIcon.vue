<template>
  <svg class="v-icon">
    <use :xlink:href="iconPath" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from "vue";

export type GroupNamesUser =
  | "heart"
  | "compare"
  | "cart"
  | "cart-plus"
  | "cart-added";
export type GroupNamesArrows = "up";

export interface Icons {
  user: GroupNamesUser;
  arrows: GroupNamesArrows;
}

export type GroupNames = keyof Icons;
export type IconNames = Icons[keyof Icons];

// Интерфейс для данных с непостоянными полями группы и имени
export interface IconProp {
  name: IconNames;
  group: GroupNames;
}

export interface Props {
  iconName: IconNames;
  groupName: GroupNames;
  path?: string;
}

const props = defineProps<Props>();

const iconPath = computed<string>(
  () =>
    props.path ||
    `./images/icons/sprites/${props.groupName}.svg#${props.iconName}`,
);
</script>

<style lang="scss" scoped>
.v-icon {
  display: block;

  width: 24px;
  height: 24px;
}
</style>
