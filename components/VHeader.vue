<script setup lang="ts">
import { showDialog, links } from "./index";
</script>

<template>
  <header class="header">
    <div class="bar"><slot name="bar"></slot></div>

    <div class="container wrapper">
      <nuxt-link href="/" class="flex">
        <LogoHorizontal />
      </nuxt-link>
      
      <div class="flex">
        <nav>
          <ul>
            <li v-for="{ id, text } of links">
              <nuxt-link :href="`/#${id}`">{{ text }}</nuxt-link>
            </li>
          </ul>
        </nav>
        <VButton outlined @click="showDialog('form-dialog')" type="button" slim class="btn">
          Стать клиентом
        </VButton>
        <VBurger />
      </div>
    </div>
  </header>
</template>

<style scoped>
.bar {
  background: var(--color-blue);
  color: white;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}

.bar:empty {
  display: none;
}
.wrapper {
  padding: 15px 16px;
  height: 70px;
  display: flex;
  justify-content: space-between;
}

.wrapper nav {
  margin-right: 50px;
}

.wrapper nav ul {
  display: flex;
  gap: 50px;
  height: 100%;
}

.wrapper nav li {
  list-style-type: none;
  display: flex;
  align-items: center;
}

.wrapper nav a {
  text-decoration: none;
  color: var(--color-dark-grey);
  font-size: 17px;
  transition: all 0.3s ease-in;
}

.wrapper nav a:hover {
  color: var(--color-dark-blue);
}

.header {
  box-shadow: 0px 2px 15px rgba(15, 37, 52, 0.15);
  background: #ffffff;
  position: sticky;
  top: 0;
}

@media screen and (max-width: 991px) {
  .wrapper nav {
    display: none;
  }

  .btn {
    display: none;
  }
}
</style>
