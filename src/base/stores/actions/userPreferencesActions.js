export const ACTIONS = {
  SET_USER_THEME: 'SET_USER_THEME'
};

export const setUserThemeAction = (dispatch) => (theme) => {
  dispatch({
    type: ACTIONS.SET_USER_THEME,
    payload: theme
  });
};