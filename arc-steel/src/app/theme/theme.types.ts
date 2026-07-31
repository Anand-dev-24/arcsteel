/**
 * Available theme modes.
 */
export type ThemeMode = 'light' | 'dark' | 'system';

/**
 * Color palette configuration.
 */
export interface ThemePalette {
  primary: string;
  secondary: string;
  tertiary: string;
  error: string;
  background: string;
  surface: string;
}

/**
 * Typography configuration.
 */
export interface TypographyConfig {
  fontFamily: string;
}

/**
 * Shape configuration.
 */
export interface ShapeConfig {
  borderRadius: string;
}

/**
 * Complete theme configuration.
 */
export interface ThemeConfig {
  mode: ThemeMode;
  palette: ThemePalette;
  typography: TypographyConfig;
  shape: ShapeConfig;
}