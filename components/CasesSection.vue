<script setup lang="ts">
import { carouselImages } from "~/constants";
</script>

<template>
  <VSection class="section">
    <VCarousel :images="carouselImages" class="carousel" />
    <div class="col text">
      <FuroreH1 class="h1"><span class="blue">Кейсы</span> компании</FuroreH1>

      <div>
        <VDropdown> Country Dashboard </VDropdown>
        <VDropdown> Covid-19 Tracker </VDropdown>
        <VDropdown> Health analytics </VDropdown>
      </div>
    </div>
    <CarouselDialog id="carousel-dialog" />
  </VSection>
</template>

<style scoped>
.section {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 71px;
}

.h1 {
  margin-bottom: 30px;
}

.text {
  justify-content: space-between;
  height: 100%;
}

@media screen and (max-width: 767px) {
  .section {
    grid-template-columns: 1fr;
  }

  .carousel {
    grid-row-start: 2;
  }
}
</style>
