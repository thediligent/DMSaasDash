// ==============================|| PRESET THEME - THEME SELECTOR ||============================== //

export default function Theme(colors) {
  const { purple, red, gold, cyan, green, grey } = colors;
  const greyColors = {
    0: grey[0],
    50: grey[1],
    100: grey[2],
    200: grey[3],
    300: grey[4],
    400: grey[5],
    500: grey[6],
    600: grey[7],
    700: grey[8],
    800: grey[9],
    900: grey[10],
    A50: grey[15],
    A100: '#F3F6FFAA',
    A200: '#F3F6FF66',
    A400: grey[13],
    A700: grey[14],
    A800: '#FDFDFF'
  };
  const contrastText = '#FFF';

  return {
    primary: {
      lighter: '#A5B4FC12', // Very light purple
      100: '#E0E7FF',     // Light purple
      200: '#C7D2FE',     // Slightly lighter purple
      light: '#A5B4FC',   // Light purple, slightly darker
      300: '#A5B4FC',     // Same as light
      400: '#818CF8',     // Medium light purple
      main: '#6366F1',    // Your primary purple
      dark: '#4F46E5',    // Darker purple
      700: '#4338CA',     // Even darker purple
      darker: '#3730A3',  // Very dark purple
      900: '#312E81',
      contrastText
    },
    secondary: {
      lighter: '#8e90c9', // Very light shade of the secondary color
      100: '#6e70ab',     // Light shade
      200: '#6163a0',     // Slightly darker light shade
      light: '#6e70ab',   // Light-medium shade
      400: '#303269',     // Medium shade
      main: '#1E204C',    // Your secondary color
      600: '#0c0e38',     // Slightly darker than main
      dark: '#04052d',    // Dark shade
      800: '#04052d',     // Very dark shade
      darker: '#050621',  // Almost black
      900: '#06071c',
      A100: '#F3F6FFAA',
      A200: '#F3F6FF66',
      A300: '#FDFDFF',
      contrastText: greyColors[0]
    },
    tertiary: {
      main: '#6C55D3',    // Your secondary color
      contrastText: greyColors[0]
    },
    error: {
      lighter: '#ff4d4f57',
      light: red[2],
      main: red[4],
      dark: red[7],
      darker: red[9],
      contrastText
    },
    warning: {
      lighter: '#ffbe0d33',
      light: gold[3],
      main: gold[5],
      dark: gold[7],
      darker: gold[9],
      contrastText: greyColors[100]
    },
    info: {
      lighter: cyan[0],
      light: cyan[3],
      main: cyan[5],
      dark: cyan[7],
      darker: cyan[9],
      contrastText
    },
    success: {
      lighter: '#49c40c5c',
      light: green[3],
      main: green[5],
      dark: green[7],
      darker: green[9],
      contrastText
    },
    grey: greyColors
  };
}
