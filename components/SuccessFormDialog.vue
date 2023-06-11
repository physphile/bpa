<script setup lang="ts">
import { showDialog } from "./index";
</script>

<template>
  <VDialog title="Успех" id="success-dialog">
    <div class="flex exclamation mb40">
      <svg width="56" height="40" fill="none">
        <path
          fill="#0987EE"
          d="M54.35 1.5a3.93 3.93 0 0 1 0 5.57L22.92 38.49a3.93 3.93 0 0 1-5.56 0L1.66 22.78a3.93 3.93 0 0 1 5.55-5.56l12.94 12.93L48.8 1.5a3.93 3.93 0 0 1 5.56 0h-.01Z"
        />
      </svg>
    </div>
    <p class="c1 mb40">
        Спасибо вам за вашу заявку. Мы свяжемся с вами в ближайшее время!
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
