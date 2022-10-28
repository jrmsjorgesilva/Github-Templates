const monthsAbbreviated = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];

const getAbbreviatedMonthName = (monthNumber) => {
  if (monthNumber > 12) return "The month number must represent a valid month";

  return monthsAbbreviated[monthNumber - 1];
};

export default getAbbreviatedMonthName;
