<template>
  <div class="contact-info">
    <ul class="contact-info__list">
      <li class="contact-info__list-item">
        <a
          href="tel:+74954771952"
          class="contact-info__phone"
          >+7 495 477 19 52</a
        >
        <span class="contact-info__title">Время работы</span>
      </li>
      <li class="contact-info__list-item">
        <a
          href="tel:+78003331936"
          class="contact-info__phone"
          >+7 800 333 19 36</a
        >
        <span class="contact-info__title">Бесплатно по РФ</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@use "@style/variables";

.contact-info {
  display: flex;
  align-items: center;

  width: max-content;
  min-height: 52px;

  &__list-item {
    display: flex;
    gap: 16px;
    align-items: center;
  }

  &__phone {
    font-size: 19px;
    line-height: 24px;
  }

  &__worktime-wrap {
    position: relative;
  }

  &__title {
    width: max-content;

    color: var(--global-color-sc);
    font-size: 13px;
    line-height: 22px;
  }
}
</style>
