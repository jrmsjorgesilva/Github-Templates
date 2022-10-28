// 'for your information' -> 'FYI'
const getInitials = (name) => {
  return name.split(" ").map((word) => {
    word.charAt(0).toUpperCase().join("");
  });
};

export default getInitials;
