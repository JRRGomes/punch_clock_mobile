import { CHANGE_LANGUAGE } from "./user-preferences-types";

export const changeLanguage = (language) => ({
  type: CHANGE_LANGUAGE,
  payload: {
    language,
  },
});
