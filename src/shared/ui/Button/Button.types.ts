export const ThemeButton = {
  CLEAR: 'clear',
  BLACK: 'black'
} as const;

export type ThemeButton = (typeof ThemeButton)[keyof typeof ThemeButton];