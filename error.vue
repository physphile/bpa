<script setup lang="ts"></script>

<template>
  <nuxt-layout name="default">
    <div class="error">
      <div class="col container">
        <h1 class="h1">404 ERROR</h1>
        <img src="/404.svg" aria-hidden="true" width="565" height="300" />

        <p class="c1 darkgrey">
          Кажется что-то пошло не так! Страница, которую вы запрашиваете, не
          существует.<br />Возможно она устарела, была удалена, или был введен
          неверный адрес в адресной строке.
        </p>

        <VButton class="button">Перейти на главную</VButton>
      </div>
    </div>
  </nuxt-layout>
</template>

<style scoped>
.error {
  background: var(--color-light-blue);
  padding: 100px 0;
}

.col {
  gap: 50px;
  align-items: center;
}

.error p {
  text-align: center;
}

.h1 {
  font-weight: 600;
}
</style>
