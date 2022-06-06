import { createContext, useContext, useEffect, useReducer } from 'react';
import { setUserThemeAction } from './actions/userPreferencesActions';
import { usePreferencesReducer } from './reducers/userPreferencesReducer';
import { THEME } from '../constants/themes';

const initialState = {
  theme: THEME.LIGHT,
};

const userPreferencesStorageKeyPrefix = 'USER-PREFERENCES';
const getUserStorageKey = () => `${userPreferencesStorageKeyPrefix}`;

const UserPreferencesContext = createContext({
  ...initialState
});

export const UserPreferencesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(usePreferencesReducer, {
    ...initialState,
    ...(localStorage.getItem(getUserStorageKey())
    ? JSON.parse(localStorage.getItem(getUserStorageKey()) || "")
    : {})
  });

  const value = {
    ...state,
    setUserTheme: setUserThemeAction(dispatch),
  };

  useEffect(() => {
    localStorage.setItem(getUserStorageKey(), JSON.stringify({
      theme: state.theme
    }));

  }, [state.theme]);

  return (
    <UserPreferencesContext.Provider value={value}>
      {children}
    </UserPreferencesContext.Provider>
  )
}

export default function useUserPreferencesContext() {
  return useContext(UserPreferencesContext);
}