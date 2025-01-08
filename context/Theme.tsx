import {
  ThemeProvider as NextThemesProvider,
  ThemeProviderProps,
} from "next-themes";

import React from "react";

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <div>
      <NextThemesProvider {...props}>{children}</NextThemesProvider>
    </div>
  );
};

export default ThemeProvider;
