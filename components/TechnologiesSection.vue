<script setup lang="ts"></script>

<template>
  <VSection>
    <div class="heading">
      <FuroreH1 class="mb20">
        <span class="blue">Наши</span> технологии
      </FuroreH1>
      <p class="c2 mb50">Подберем для вас наилучший стэк!</p>
    </div>

    <div class="flex logos">
      <div class="flex">
        <LogoCard image="/Icon=Net.svg" />
        <LogoCard image="/Icon=C++.svg" />
        <LogoCard image="/Icon=Node.svg" />
      </div>
      <div class="flex">
        <LogoCard image="/Icon=Python.svg" />
        <LogoCard image="/Icon=Php.svg" />
        <LogoCard image="/Icon=Java.svg" />
      </div>
    </div>
  </VSection>
</template>

<style scoped>
.heading {
  align-self: flex-end;
}

.flex {
  gap: 40px;
  flex: 1;
}

.logos {
  width: 100%;
  overflow-x: auto;
}

.logos:has(div:hover) div:not(:hover) {
  filter: blur(5px);
}

@media screen and (max-width: 767px) {
  .logos {
    flex-direction: column;
  }

  .flex {
    gap: 4px;
  }
}
</style>
