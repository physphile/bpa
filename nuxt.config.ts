// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/variables.css", "@/assets/index.css"],
  ssr: true,
  app: {
    head: {
      title: "BPA | Business process audit",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Мы занимаемся консалтингом для компаний, которые хотят следовать духу нового времени. Мы автоматизируем услуги, меняем бизнес-процессы и сокращаем затраты. Мы внедряем самые передовые технологии в бизнес и меняем кадровую политику согласно трендам мирового менеджмента.",
        },
      ],
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.png" },
        {
          rel: "apple-touch-icon",
          type: "image/png",
          href: "/icons/180x180.png",
        },
      ],
      htmlAttrs: {
        lang: "ru",
      },
    },
  },
});
