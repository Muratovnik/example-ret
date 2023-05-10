<template>
  <div
    ref="rootRef"
    class="v-dropdown"
  >
    <button
      type="button"
      class="v-dropdown__toggler"
      @click="toggle"
    >
      <slot
        :toggle="toggle"
        :close="close"
        :open="open"
        :is-open="isListOpened"
      ></slot>
      <VIcon
        class="v-dropdown__toggler-icon"
        :class="{
          'v-dropdown__toggler-icon--active': isListOpened,
        }"
        group-name="arrows"
        icon-name="up"
      />
    </button>

    <ul
      v-show="isListOpened"
      class="v-dropdown__list"
    >
      <li
        v-for="(item, i) in items"
        :key="i"
        class="v-dropdown__list-item"
      >
        <span
          class="v-dropdown__inner-link"
          href=""
        >
          <span>{{ item.text }}</span>
        </span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

import { onClickOutside } from "@vueuse/core";

import VIcon from "@components/VIcon";

export interface Item {
  text: string;
}

export interface Props {
  items?: Item[];
}

defineProps<Props>();

const isListOpened = ref<boolean>(false);
const rootRef = ref<HTMLDivElement>();

const close = () => {
  isListOpened.value = false;
};

const open = () => {
  isListOpened.value = true;
};

const toggle = () => {
  isListOpened.value ? close() : open();
};

onClickOutside(rootRef, close);
</script>

<style lang="scss" scoped>
.v-dropdown {
  position: relative;

  font-size: 13px;
  line-height: 16px;
  font-weight: 600;

  &__list {
    position: absolute;
    top: calc(100% + 5px);
    right: -17px;

    display: none;
    display: flex;
    flex-direction: column;

    width: max-content;
    max-height: max-content;
    padding: 12px 0;

    color: var(--global-color-sc);
    font-size: 14px;
    line-height: 16px;
    font-weight: 400;

    background-color: var(--global-color-b);
    border-radius: 4px;
    box-shadow: 0 2px 16px rgb(0 0 0 / 0.15);
  }

  &__inner-link {
    position: relative;

    display: block;

    padding: 12px 24px;

    overflow: hidden;

    transition: {
      duration: 0.3s;
      property: all;
    }
  }

  &__toggler-icon {
    position: absolute;
    top: 50%;
    right: 0;

    width: 11px;
    height: 5px;

    fill: var(--global-color-accent);

    transform: translateY(-50%) rotate(180deg);

    &--active {
      transform: translateY(-50%);
    }
  }

  &__toggler {
    position: relative;

    padding-right: calc(6px + 8px);
  }
}
</style>
