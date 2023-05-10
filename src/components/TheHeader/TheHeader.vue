<template>
  <header class="the-header">
    <div class="the-header__top">
      <VContainer class="the-header__container">
        <div class="the-header__left">
          <CityChooser />
          <ContactInfo />
        </div>
        <VLogo
          :logo-name="currentSiteStore.site"
          class="the-header__logo"
        />
        <div class="the-header__right">
          <TheHeaderTopMenu class="the-header__top-menu" />
          <TheHeaderUserInfo />
        </div>
      </VContainer>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useCurrentSiteStore } from "@stores/currentSite";

import CityChooser from "@components/CityChooser";
import ContactInfo from "@components/ContactInfo";
import TheHeaderTopMenu from "@components/TheHeader/TheHeaderTopMenu";
import TheHeaderUserInfo from "@components/TheHeader/TheHeaderUserInfo";
import VContainer from "@components/VContainer";
import VLogo from "@components/VLogo";

const currentSiteStore = useCurrentSiteStore();
</script>

<style scoped lang="scss">
.the-header {
  position: relative;

  min-width: var(--width-container-desktop);

  font-size: 13px;
  line-height: 16px;
  font-weight: 500;

  &__container {
    display: flex;
    align-items: center;

    padding-block: var(--v-rhythm-2);
  }

  &__left {
    display: flex;
    flex-direction: column;
    gap: var(--v-rhythm-1);
    justify-content: space-between;

    margin-right: 50px;
  }

  &__right {
    margin-left: auto;
  }

  &__logo {
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translateX(-50%) translateY(-50%);
  }

  &__top-menu {
    width: max-content;
    margin: {
      bottom: 12px;
      left: auto;
    }
  }
}
</style>
