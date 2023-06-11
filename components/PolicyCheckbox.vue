<script setup lang="ts"></script>

<template>
  <VCheckbox>
    Нажимая на кнопку, вы даете согласие на обработку своих персональных данных
    и соглашаетесь с
    <nuxt-link href="/privacy" class="link">
      политикой конфиденциальности
    </nuxt-link>
  </VCheckbox>
</template>

<style scoped>
.link:hover {
  color: var(--color-dark-blue);
}
</style>
