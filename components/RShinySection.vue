<script setup lang="ts">
import { showDialog } from "./index";
</script>

<template>
  <VSection class="section">
    <div>
      <FuroreH1 class="mb20"
        >НЕМНОГО ПРО <span class="blue">R SHINY</span></FuroreH1
      >
      <p class="c2 mb40">Lorem ipsum dolor sit ammet dolor ipsum.</p>
      <p class="c6 darkgrey mb20">
        Lorem ipsum dolor sit ammet, lorem ipsum dolor sit ammet, lorem ipsum
        dolor sit ammet, lorem ipsum dolor sit ammet, lorem ipsum dolor sit
        ammet, ipsum dolor sit ammet, lorem ipsum dolor sit ammet lorem ipsum
        lorem.
      </p>
      <ul class="c6 list mb40">
        <li>Lorem ipsum dolor sit ammet, lorem</li>
        <li>Lorem ipsum dolor sit ammet</li>
        <li>Lorem ipsum dolor sit ammet, lorem</li>
      </ul>

      <VButton type="button" @click="showDialog('form-dialog')" blue>
        Консультация онлайн
      </VButton>
    </div>
    <div>
      <img src="/display.svg" alt="" class="display" />
    </div>
  </VSection>
</template>

<style scoped>
.list li {
  color: var(--color-dark-grey);
  list-style-position: inside;
  line-height: 194%;
}

.list li::marker {
  color: var(--color-blue);
}

.section {
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);
}

.display {
  width: 100%;
  aspect-ratio: 508 / 400;
}

@media screen and (max-width:  767px) {
  .display {
    display: none;
  }

  .section {
    grid-template-columns: 1fr;
  }
}
</style>
