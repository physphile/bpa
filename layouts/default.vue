<script setup lang="ts"></script>

<template>
  <VHeader />
  <main class="main">
    <slot></slot>
  </main>
  <FormDialog />
  <SuccessFormDialog />
  <ErrorFormDialog />
  <div id="blackout"></div>
  <VFooter />
</template>

<style scoped>
.main {
  background: no-repeat calc(50% + 400px) 1% url("/patterns/Pattern1.svg"),
    no-repeat calc(50% + 600px) 10% url("/patterns/Pattern10.svg"),
    no-repeat calc(50% - 256px) 18% url("/patterns/Pattern3.svg"),
    no-repeat calc(50% + 200px) 38% url("/patterns/Pattern4.svg"),
    no-repeat calc(50% - 200px) 62% url("/patterns/Pattern5.svg"),
    no-repeat calc(50% + 50px) 76.8% url("/patterns/Pattern6.svg"),
    no-repeat calc(50% - 400px) 100% url("/patterns/Pattern7.svg"),
    linear-gradient(180deg, #eef7ff 0%, transparent 20%);
}

#blackout {
  position: fixed;
  z-index: 998;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: rgba(15, 37, 52, 0.55);
  display: none;
}

@media screen and (max-width: 991px) {
  .main {
    background: linear-gradient(180deg, #eef7ff 0%, transparent 20%);
  }
}
</style>
