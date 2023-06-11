<script setup lang="ts">
import { formSubmitHandler, showDialog } from "./index";
const name = ref("");
const phone = ref("");
const email = ref("");
const message = ref("");

const submitHandler = () => {
  formSubmitHandler({
    name: name.value.trim(),
    phone: phone.value.trim() || "Не указано",
    email: email.value.trim(),
    message: message.value.trim() || "Не указано",
  })
    .then(() => showDialog("success-dialog"))
    .catch((err) => showDialog("error-dialog"));
};
</script>

<template>
  <form @submit.prevent="submitHandler" class="form">
    <Vinput
      type="text"
      placeholder="Ваше имя*"
      style="grid-area: name"
      autocomplete="name"
      v-model="name"
      required
    />
    <Vinput
      type="tel"
      placeholder="Ваш телефон"
      style="grid-area: tel"
      v-model="phone"
      autocomplete="tel"
    />
    <Vinput
      type="email"
      placeholder="Ваш email*"
      style="grid-area: mail"
      autocomplete="email"
      v-model="email"
      required
    />
    <VTextarea
      placeholder="Сообщение"
      style="grid-area: mess"
      class="c8"
      rows="10"
      autocomplete="off"
      v-model="message"
    ></VTextarea>

    <PolicyCheckbox style="grid-area: check" required />

    <div>
      <VButton type="submit">Отправить</VButton>
    </div>
  </form>
</template>

<style scoped>
.form {
  display: grid;
  grid-template-areas:
    "name tel"
    "mail mail"
    "mess mess"
    "check check";
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 30px;
}
</style>
