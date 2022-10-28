const convertToLowerOrUpperCase = (str) => {
  if (str === str.toUpperCase()) return str.toLowerCase();

  return str.toUpperCase();
};

export default convertToLowerOrUpperCase;
