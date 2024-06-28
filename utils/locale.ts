export const getLanguage = () =>
  navigator ? navigator?.language || (navigator?.languages || ["en"])[0] : "en";
