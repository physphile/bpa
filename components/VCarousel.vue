<script setup lang="ts">
import { showDialog } from "./index";

export interface Picture {
  src: string;
  alt: string;
  caption: string;
  title: string;
}
const props = withDefaults(
  defineProps<{
    images: Picture[];
    showCaption?: boolean;
  }>(),
  {
    showCaption: false,
  }
);

const emit = defineEmits<{
  (e: "change", value: number): void;
}>();

const cur = ref(0);

const next = () => {
  const slide = Math.min(props.images.length - 1, cur.value + 1);
  cur.value = slide;
  emit("change", slide);
};

const prev = () => {
  const slide = Math.max(0, cur.value - 1);
  cur.value = slide;
  emit("change", slide);
};
</script>

<template>
  <div class="col wrapper">
    <img :src="images[cur].src" :alt="images[cur].alt" class="image" />

    <p class="c6 mb30" v-if="showCaption">
      {{ images[cur].caption }}
    </p>

    <div class="flex buttons">
      <div class="flex controls">
        <button
          type="button"
          class="button"
          @click="prev"
          :disabled="cur === 0"
          aria-label="Предыдущий слайд"
        >
          <svg width="24" height="24" class="left">
            <use href="/simple.svg#arrow"></use>
          </svg>
        </button>
        <button
          type="button"
          class="button"
          @click="next"
          :disabled="cur === images.length - 1"
          aria-label="Следующий слайд"
        >
          <svg width="24" height="24">
            <use href="/simple.svg#arrow"></use>
          </svg>
        </button>
      </div>

      <button
        type="button"
        class="button"
        v-if="!showCaption"
        @click="showDialog('carousel-dialog')"
        aria-label="Посмотреть в модальном окне"
      >
        <svg width="24" height="24">
          <use href="/simple.svg#loop"></use>
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped>
.left {
  transform: rotate(180deg);
}

.button {
  background: var(--color-light-blue);
  border-radius: 12px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  transition: all 0.3s ease-in;
}

.button:hover {
  fill: var(--color-blue);
}

.button:disabled {
  fill: var(--color-blue-normal);
}

.image {
  border: 2px solid #0f2534;
  box-shadow: 0px 5px 15px rgba(15, 37, 52, 0.15);
  border-radius: 16px;
  width: 100%;
  aspect-ratio: 575 / 300;
  margin-bottom: 20px;
  overflow: hidden;
  object-fit: cover;
}

.buttons {
  justify-content: space-between;
}

.controls {
  gap: 30px;
}

.wrapper {
  height: 100%;
  justify-content: space-between;
}
</style>
