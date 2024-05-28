export const getLanguage = () =>
  navigator.language || (navigator.languages || ["en"])[0];
