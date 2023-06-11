<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <div class="container wrapper">
      <LogoHorizontal class="logo" />
      <p class="c8">Business process audit</p>
      <p>
        <a href="tel:+79999999999" class="c8 darkgrey">+7 (999) 999-99-99</a>
      </p>
      <p>
        <a href="mailto:bpa_info@gmail.com" class="c8 darkgrey"
          >bpa_info@gmail.com</a
        >
      </p>
      <p>
        <a
          href="https://yandex.ru/maps/geo/moskva/53166393/?ll=37.646930%2C55.725146&z=10.99"
          class="c8 darkgrey"
          >г. Москва, ул. 3 Вольная, д. 4, с 9:00 до 18:00</a
        >
      </p>

      <div class="icons">
        <a href="" aria-label="Линкедин">
          <svg width="24" height="24">
            <use href="/social.svg#linkedin"></use>
          </svg>
        </a>

        <a href="" aria-label="Гитхаб">
          <svg width="24" height="24">
            <use href="/social.svg#github"></use>
          </svg>
        </a>

        <a href="" aria-label="Инстаграм">
          <svg width="24" height="24">
            <use href="/social.svg#instagram"></use>
          </svg>
        </a>

        <a href="" aria-label="Вконтакте">
          <svg width="24" height="24">
            <use href="/social.svg#vk"></use>
          </svg>
        </a>

        <a href="" aria-label="Телеграм">
          <svg width="24" height="24">
            <use href="/social.svg#telegram"></use>
          </svg>
        </a>

        <a href="" aria-label="Гугл">
          <svg width="24" height="24">
            <use href="/social.svg#google"></use>
          </svg>
        </a>
      </div>
    </div>

    <div class="bar">
      <div class="container">
        <p class="white">Copyrights © bpa.com Все права защищены.</p>
        <nuxt-link href="/privacy" class="white"
          >Политика конфиденциальности</nuxt-link
        >
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: no-repeat calc(50% + 400px) 0 url("/patterns/Pattern8.svg");
}
.wrapper {
  padding: 100px 16px;
}

.bar {
  background: var(--color-dark-blue);
  padding: 22px 0;
}

.bar > .container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.wrapper p {
  margin-bottom: 15px;
}

.wrapper p:last-of-type {
  margin-bottom: 50px;
}

.logo {
  margin-bottom: 50px;
}

.icons {
  display: flex;
  column-gap: 50px;
}

.icons svg {
  fill: var(--color-blue-grey);
  transition: all 0.3s ease-in;
}

.icons svg:hover {
  fill: var(--color-blue);
}

.wrapper a {
  transition: all 0.3s ease-in;
}
.wrapper a:hover {
  color: var(--color-blue);
}

@media screen and (max-width: 767px) {
  .bar > .container {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media screen and (max-width: 575px) {
  .icons {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: start;
    width: fit-content;
    row-gap: 25px;
  }
}

@media screen and (max-width: 991px) {
  .footer {
    background: none;
  }
}
</style>
