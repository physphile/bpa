<script setup lang="ts"></script>

<template>
  <VSection class="section">
    <div>
      <FuroreH1 class="mb20">напишите <span class="blue">нам</span></FuroreH1>
      <p class="c2 mb40">
        Обратитесь к специалистам BPA. Мы ответим в<br />течение 24 часов.
      </p>

      <EmployeeCard image="/Arkady.webp" job="CEO" class="arcadiy">
        Аркадий Фроймчук
      </EmployeeCard>

      <div class="flex contacts">
        <a href="" class="contact c2">
          <svg width="30" height="30">
            <use href="/contacts.svg#telegram"></use>
          </svg>
          Telegram
        </a>

        <a href="" class="contact c2">
          <svg width="30" height="30">
            <use href="/contacts.svg#vk"></use>
          </svg>
          Vkontakte
        </a>
      </div>
    </div>
    <div>
      <MailForm />
    </div>
  </VSection>
</template>

<style scoped>
.section {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 40px;
}

.contact {
  fill: var(--color-dark-blue);
  transition: all 0.3s ease-in;
  display: flex;
  align-items: center;
  gap: 20px;
  text-decoration: none;
}

.contact:hover {
  fill: var(--color-blue);
  color: var(--color-blue);
}

.arcadiy {
  margin-bottom: 80px;
}

.contacts {
  gap: 40px;
}

@media screen and (max-width:  767px) {
  .section {
    grid-template-columns: 1fr;
  }

  .arcadiy {
    margin-bottom: 20px;
  }
}
</style>
