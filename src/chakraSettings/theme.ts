import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    text: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
    html: `'Inter', sans-serif`,
    heading: `'Inter', sans-serif`,
  },

  colors: {
    navbar: {
      text: "#2d3748",
    },
    graySpecial: {
      50: "#FDFDFD",
      100: "#FCFCFD",
      200: "#F9FAFB",
      150: "#717981",
      300: "#F2F4F7",
      400: "#E4E7EC",
      500: "#D0D5DD",
      600: "#98A2B3",
      700: "#667085",
      800: "#475467",
      900: "#344054",
    },
    metamaxYellow: {
      100: "#FEF7D7",
      200: "#FEF2C2",
      300: "#FEEEAE",
      400: "#FEEA9A",
      500: "#FDE686",
      600: "#FDE272",
      700: "#FDDD5D",
      800: "#FCD949",
      900: "#FCD535",
    },
    yellowCheckbox: {
      100: "#FCD535",
      200: "#FCD535",
      500: "#FCD535",
      600: "#FCD535",
    },
    bodyColor: {
      dark: "#1A202C",
    },
    primary: {
      100: "#E8E9EA",
      700: "#444D55",
      500: "#737980",
      800: "#2C3640",
      900: "#141414",
    },

    discord: "rgb(88, 101, 242)",
    telegram: "rgb(63, 174, 232)",
    whatsapp: "#41C351",
    twitter: "rgb(29, 161, 242)",
    youtube: "rgb(255, 0, 0)",
    linkedin: "rgb(40, 103, 178)",
  },

  styles: {
    global: (props: any) => ({
      body: {
        bg: props.colorMode === "dark" ? "#1A202C" : "white",
      },
    }),
  },
});

export default theme;
