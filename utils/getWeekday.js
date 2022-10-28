const weekday = [
  "Domingo",
  "Segunda-Feira",
  "Terça-Feira",
  "Quarta-Feira",
  "Quinta-Feira",
  "Sexta-Feira",
  "Sábado",
];

const getWeekday = (dayNumber) => {
  if (dayNumber > 7)
    return "Day Number must be a number that represents a day of the week";

  return weekday[dayNumber + 1];
};
