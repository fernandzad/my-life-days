import { ACTIONS } from '../actions/userPreferencesActions';

export function usePreferencesReducer(state, action) {
  const { type, payload } = action;

  switch(type) {
    case ACTIONS.SET_USER_THEME:
      return {
        ...state,
        theme: payload
      };
    default:
      throw new Error(`Invalid action "${type}"`);
  }
}