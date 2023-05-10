<template>
  <div class="the-header-top-menu">
    <ul class="the-header-top-menu__list">
      <li class="the-header-top-menu__item">
        <span
          title="Акции и скидки"
          class="the-header-top-menu__link the-header-top-menu__link--highlight"
          >Акции и скидки</span
        >
      </li>
      <li class="the-header-top-menu__item">
        <VDropdown> Информация покупателям </VDropdown>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import VDropdown from "@components/VDropdown";
</script>

<style scoped lang="scss">
.the-header-top-menu {
  &__list {
    display: flex;
    gap: 24px;
  }

  &__link {
    &--highlight {
      color: var(--global-color-accent);
      font-weight: 700;
    }
  }
}
</style>
