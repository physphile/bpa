<script setup lang="ts">
import { showDialog } from "./index";

const button = ref<HTMLButtonElement | null>(null);

const onmouseover = () => {
  if (button.value) {
    button.value.classList.add("write-btn");
  }
};

const onmouseleave = () => {
  if (button.value) {
    button.value.classList.remove("write-btn");
  }
};
</script>

<template>
  <VSection>
    <FuroreH1 class="h1">
      Самые продвинутые<br /><span class="blue">R Shiny Dashboards</span> в
      России
    </FuroreH1>

    <div class="flex buttons">
      <button
        type="button"
        class="application-btn"
        ref="button"
        @click="showDialog('form-dialog')"
      >
        Оставить заявку
      </button>

      <button
        type="button"
        class="write-btn"
        @click="showDialog('form-dialog')"
        @mouseover="onmouseover"
        @mouseleave="onmouseleave"
      >
        Напишите нам
      </button>
    </div>

    <div class="advantages">
      <VAdvantage icon="expand">
        Масштабирование предприятия
        <template #desc>
          Инфраструктура, безопасность, Позиция Сертифицированный партнер
        </template>
      </VAdvantage>

      <VAdvantage icon="desktop">
        Пользовательские интерфейсы
        <template #desc>
          Делаем Shiny приложения красивыми, улучшая принятие
        </template>
      </VAdvantage>

      <VAdvantage icon="group">
        Расширение команды
        <template #desc> Рефакторинг, Производство </template>
      </VAdvantage>

      <VAdvantage icon="watch">
        Оптимизация производительности
        <template #desc> Консалтинг, Разработка </template>
      </VAdvantage>
    </div>
  </VSection>
</template>

<style scoped>
.h1 {
  margin-bottom: 30px;
}
.advantages {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  max-width: 930px;
}

.action {
  margin-right: 20px;
  margin-bottom: 30px;
}

.buttons {
  gap: 20px;
  margin-bottom: 30px;
  max-width: 100%;
}

.application-btn,
.write-btn {
  border-radius: 8px;
  height: 45px;
  padding: 0 24px;
  font-size: 17px;
  font-weight: 500;
  border: none;
  transition: all 0.3s ease-in;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.application-btn,
.write-btn:hover {
  background: var(--color-dark-blue);
  color: white;
  box-shadow: 0px 5px 15px rgba(15, 37, 52, 0.15);
}

.write-btn {
  color: var(--color-dark-blue);
  background: none;
  box-shadow: none;
}

@media screen and (max-width: 767px) {
  .advantages {
    grid-template-columns: 1fr;
    row-gap: 25px;
    padding: 25px 0;
  }
}

@media screen and (max-width: 991px) {
  .write-btn {
    display: none;
  }
}
</style>
