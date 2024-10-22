import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

export enum Theme {
  Dark = 'dark',
  Light = 'light',
  System = 'system',
}

interface ProviderProps {
  children: ReactNode;
}

interface ThemeContext {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const initialState: ThemeContext = {
  theme: Theme.Light,
  setTheme: () => null,
};

const ThemeContext = createContext<ThemeContext>(initialState);

export function ThemeProvider({ children }: ProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => localStorage.getItem('theme') as Theme
  );

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove('light', 'dark');

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light';

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      setTheme: (theme: Theme) => {
        localStorage.setItem('theme', theme);
        setTheme(theme);
      },
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider');

  return context;
};
