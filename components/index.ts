export const showDialog = (id: string, show = true) => {
  const dialog = document.querySelector(`#${id}`) as HTMLDialogElement;
  const blackout = document.querySelector("#blackout") as HTMLDivElement;
  dialog.setAttribute("data-open", show.toString());
  blackout.style.display = show ? "initial" : "none";
};

export interface Application {
  email: string;
  name: string;
  phone?: string;
  message?: string;
}

export const formSubmitHandler = (application: Application) => {
  return fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    body: JSON.stringify({
      service_id: "service_xaebo9d",
      template_id: "template_ijldsjj",
      user_id: "HnDwN4LDZdroeluHe",
      template_params: application,
    }),
    headers: {
      "Content-type": "application/json",
    },
  });
};

interface Link {
  id: string;
  text: string;
}

export const links: Link[] = [
  {
    id: "hero",
    text: "Главная",
  },
  {
    id: "cases",
    text: "Кейсы",
  },
  {
    id: "shiny",
    text: "R shiny",
  },
  {
    id: "techs",
    text: "Технологии",
  },
  {
    id: "contacts",
    text: "Контакты",
  },
];
