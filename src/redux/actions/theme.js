export const SWITCH_THEME = 'SWITCH_THEME';

const switchTheme = (theme) => ({
  type: SWITCH_THEME,
  theme,
});

export default switchTheme;
