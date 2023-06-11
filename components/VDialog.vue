<script setup lang="ts">
defineProps<{ title: string; id: string }>();

const dialog = ref<HTMLDivElement | null>(null);

const close = () => {
  const blackout = document.querySelector("#blackout") as HTMLDivElement;
  if (dialog.value) {
    dialog.value.setAttribute("data-open", "false");
    blackout.style.display = "none";
  }
};
</script>

<template>
  <div class="flex wrapper">
    <div class="dialog" :id="id" ref="dialog">
      <div class="flex title mb30">
        <p class="c1">{{ title }}</p>

        <button type="button" class="cross" @click="close">
          <svg width="30" height="30">
            <use href="/simple.svg#cross"></use>
          </svg>
        </button>
      </div>
      <slot />
    </div>
  </div>
</template>

<style scoped>
.dialog {
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background: white;
  box-shadow: 0px 5px 15px rgba(15, 37, 52, 0.15);
  border-radius: 16px;
  padding: 50px;
  border: none;
  width: 730px;
  display: none;
  height: fit-content;
}

.dialog[data-open="true"] {
  display: initial;
}

.cross {
  padding: 0;
  background: none;
  border: none;
  position: relative;
  display: flex;
}

.cross::after {
  content: "";
  transition: all 0.3s ease-in;
  position: absolute;
  left: -15px;
  top: -15px;
  border-radius: 999px;
  width: 60px;
  height: 60px;
}

.cross svg {
  z-index: 2;
}
.cross:hover::after {
  content: "";
  background: var(--color-light-blue);
}

.title {
  justify-content: space-between;
  gap: 100px;
  align-items: flex-start;
}

@media screen and (max-width:  767px) {
  .dialog {
    width: unset;
    margin: auto 8px;
    padding: 50px 28px;
  }

  .title {
    gap: 8px;
  }
}
</style>
