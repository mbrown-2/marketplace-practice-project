import { extendTheme, ThemeConfig } from "@chakra-ui/react";

// Configuration object
const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
};

// Extend the theme.
const theme = extendTheme({ config,
    colors: {
        gray: {
            50: "#f9f9f9",
            100: "#ededed",
            200: "#d3d3d3",
            300: "#b3b3b3",
            400: "#a0a0a0",
            500: "#898989",
            600: "#6c6c6c",
            700: "#3b111c",
            800: "#1b0108",
            900: "#111"
        }
    }
 });

export default theme;