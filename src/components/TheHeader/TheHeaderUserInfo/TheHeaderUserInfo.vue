<template>
  <div class="header-user-icons">
    <TheHeaderUserIcon
      icon-name="heart"
      counter="7"
    />
    <TheHeaderUserIcon
      icon-name="compare"
      counter="4"
    />
    <TheHeaderUserIcon
      icon-name="cart"
      counter="24"
    />
  </div>
</template>

<script setup lang="ts">
import TheHeaderUserIcon from "@components/TheHeader/TheHeaderUserIcon";
</script>

<style scoped lang="scss">
.header-user-icons {
  display: flex;
  gap: 40px;
  justify-content: flex-end;
  align-items: center;
}
</style>
