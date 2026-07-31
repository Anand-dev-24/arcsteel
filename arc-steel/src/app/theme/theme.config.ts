import { ThemeConfig } from './theme.types';

export const DEFAULT_THEME: ThemeConfig = {
  mode: 'light',

  palette: {
    primary: '#1565C0',
    secondary: '#455A64',
    tertiary: '#00ACC1',
    error: '#D32F2F',

    background: '#FFFFFF',
    surface: '#F5F5F5'
  },

  typography: {
    fontFamily: 'Inter, Roboto, "Helvetica Neue", sans-serif'
  },

  shape: {
    borderRadius: '12px'
  }
};