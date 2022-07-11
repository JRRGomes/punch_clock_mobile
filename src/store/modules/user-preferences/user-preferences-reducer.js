import { CHANGE_LANGUAGE } from "./user-preferences-types";

const DEFAULT_STATE = {
  language: "en",
};

function userPreferences(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case CHANGE_LANGUAGE: {
      return { ...state, language: action.payload.language };
    }
    default:
      return state;
  }
}

export default userPreferences;
