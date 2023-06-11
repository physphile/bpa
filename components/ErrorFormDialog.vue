<script setup lang="ts">
import { showDialog } from "./index";
</script>

<template>
  <VDialog title="Ошибка" id="error-dialog">
    <div class="flex exclamation mb40">
      <svg width="12" height="60" fill="none">
        <path
          fill="#0987EE"
          d="M10.29 4.29a4.28 4.28 0 1 0-8.58 0v34.28a4.28 4.28 0 1 0 8.58 0V4.3ZM6 60a5.36 5.36 0 1 0 0-10.71A5.36 5.36 0 0 0 6 60Z"
        />
      </svg>
    </div>
    <p class="c1 mb40">
      Что-то пошло не так! Попробуйте позже или напишите нам bpa@gmail.com
    </p>
    <VButton type="button" blue @click="showDialog('success-dialog', false)">
      Окей
    </VButton>
  </VDialog>
</template>

<style scoped>
.exclamation {
  border: 5px solid black;
  width: fit-content;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  border-radius: 999px;
}
</style>
