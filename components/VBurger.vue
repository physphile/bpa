<script setup lang="ts">
import { links } from "./index";
const open = ref(false);
</script>

<template>
  <button
    class="btn"
    :aria-expanded="open"
    aria-controls="burger"
    @click="open = !open"
  >
    <div class="col">
      <div class="left" :class="{ open }"></div>
      <div class="right" :class="{ open }"></div>
      <div class="add" :class="{ open }"></div>
    </div>
  </button>
  <nav id="burger" v-show="open">
    <ul class="col">
      <li v-for="{ id, text } of links" class="flex">
        <nuxt-link :href="`/#${id}`" @click="open = false">{{
          text
        }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.left,
.right,
.add {
  background: var(--color-blue);
  height: 4px;
  width: 32px;
  transition: all 0.3s ease;
  border-radius: 999px;
}

.left,
.right {
  margin-bottom: 4px;
}

.add.open {
  display: none;
}

.left.open {
  transform: translateY(4px) rotateZ(45deg);
}

.right.open {
  transform: translateY(-4px) rotateZ(-45deg);
}

.btn {
  height: 40px;
  width: 40px;
  background: none;
  border: none;
  display: none;
}

.btn > div {
  justify-content: center;
  align-items: center;
}

#burger {
  position: absolute;
  top: 70px;
  left: 0;
  right: 0;
  background: white;
  box-shadow: 0px 15px 15px rgba(15, 37, 52, 0.1);
  display: none;
}

#burger a {
  text-align: center;
  width: 100%;
  padding: 24px;
  text-decoration: none;
  color: var(--color-dark-grey);
  font-size: 17px;
}

@media screen and (max-width: 991px) {
  .btn,
  #burger {
    display: initial;
  }
}
</style>
