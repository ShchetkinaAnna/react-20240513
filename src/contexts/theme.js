import { createContext } from 'react';

import { THEMES } from '../constants/themes';

export const ThemeContext = createContext(THEMES.light);
