const nameDayOfWeek = [
  { pt_br: "Domingo", en: "Sunday" },
  { pt_br: "Segunda", en: "Monday" },
  { pt_br: "Terça", en: "Tuesday" },
  { pt_br: "Quarta", en: "Wednesday" },
  { pt_br: "Quinta", en: "Thursday" },
  { pt_br: "Sexta", en: "Friday" },
  { pt_br: "Sábado", en: "Saturday" },
];

const months = [
  { pt_br: "Janeiro", en: "January" },
  { pt_br: "Fevereiro", en: "February" },
  { pt_br: "Março", en: "March" },
  { pt_br: "Abril", en: "April" },
  { pt_br: "Maio", en: "May" },
  { pt_br: "Junho", en: "June" },
  { pt_br: "Julho", en: "July" },
  { pt_br: "Agosto", en: "August" },
  { pt_br: "Setembro", en: "September" },
  { pt_br: "Outubro", en: "October" },
  { pt_br: "Novembro", en: "November" },
  { pt_br: "Dezembro", en: "December" },
];

export const isToday = (timestamp) => {
  const today = new Date();
  const date = new Date(timestamp * 1000);

  if (
    today.getDate() === date.getDate() &&
    today.getMonth() === date.getMonth() &&
    today.getFullYear() === date.getFullYear()
  ) {
    return true;
  } else return false;
};

export const getCustomDate = (timestamp, language) => {
  const date = new Date(timestamp * 1000);
  const today = new Date();

  if (date.getDate() === today.getDate()) {
    return language === "pt_br" ? "Hoje" : "today";
  } else if (date.getDate() === today.getDate() + 1) {
    return language === "pt_br" ? "Amanhã" : "tomorrow";
  } else return `${nameDayOfWeek[date.getDay()][language]}`;
};
