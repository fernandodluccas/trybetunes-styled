import { SWITCH_THEME } from '../actions/theme';

/* eslint-disable default-param-last */
const INITIAL_STATE = {
  theme: 'light',
};

function themeReducer(state = INITIAL_STATE, { type }) {
  switch (type) {
    case SWITCH_THEME:
      return state.theme === 'light' ? { theme: 'dark' } : { theme: 'light' };
    default:
      return state;
  }
}

export default themeReducer;
