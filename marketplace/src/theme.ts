import { extendTheme, ThemeConfig } from "@chakra-ui/react";

// Configuration object
const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
};

// Extend the theme.
const theme = extendTheme({ config });

export default theme;