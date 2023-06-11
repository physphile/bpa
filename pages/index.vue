<script setup lang="ts"></script>

<template>
  <div class="container">
    <nuxt-layout name="form">
      <div class="anchor" id="hero"></div>
      <HeroSection />
      <div class="anchor" id="cases"></div>
      <CasesSection />
      <div class="anchor" id="shiny"></div>
      <RShinySection />
      <div class="anchor" id="techs"></div>
      <TechnologiesSection />
    </nuxt-layout>
  </div>
</template>

<style scoped>
.anchor {
  position: relative;
  top: -70px;
}
</style>
