<script setup lang="ts">
import { showDialog } from ".";
import { Application, formSubmitHandler } from ".";

const application = ref<Application>({
  email: "",
  name: "",
  phone: "",
});

const submitHandler = () => {
  showDialog("form-dialog", false);
  formSubmitHandler(application.value)
    .then(() => showDialog("success-dialog"))
    .catch((err) => showDialog("error-dialog"));
};
</script>

<template>
  <VDialog
    title="Поговорим с вами о вашем проекте. Мы ответим в течение 24 часов."
    id="form-dialog"
  >
    <form class="col form" @submit.prevent="submitHandler">
      <Vinput
        type="text"
        placeholder="Ваше имя*"
        autocomplete="name"
        v-model="application.name"
        required
      />
      <Vinput
        type="email"
        placeholder="Ваш email*"
        autocomplete="email"
        v-model="application.email"
        required
      />
      <Vinput
        type="tel"
        placeholder="Ваш телефон"
        autocomplete="tel"
        v-model="application.phone"
      />

      <PolicyCheckbox required />

      <VButton blue type="submit" class="button"> Отправить </VButton>
    </form>
  </VDialog>
</template>

<style scoped>
.form {
  gap: 30px;
}

.button {
  align-self: flex-start;
}
</style>
