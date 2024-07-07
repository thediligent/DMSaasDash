// material-ui
import { createTheme } from '@mui/material/styles';

// third-party
import { presetPalettes } from '@ant-design/colors';

// project import
import ThemeOption from './theme/index';

// ==============================|| DEFAULT THEME - PALETTE ||============================== //

export default function Palette(mode, presetColor) {
  const colors = presetPalettes;

  let greyPrimary = [
    '#131022',
    '#1E204C',
    '#15132a',
    '#F3F6FF11',
    '#8c8c8c',
    '#bfbfbf',
    '#a5b4fc17',
    '#696A88',
    '#33378c',
    '#1E204C',
    '#F3F6FF'
];

let greyAscent = ['#131022', '#434343', '#a5b4fc17', '#F3F6FF'];

let greyConstant = ['#e6ebf1', '#F3F6FF'];

  colors.grey = [...greyPrimary, ...greyAscent, ...greyConstant];

  const paletteColor = ThemeOption(colors, presetColor, mode);

  return createTheme({
    palette: {
      mode,
      common: {
        black: '#000',
        white: '#F3F6FF',
        primary: paletteColor.primary.main
      },
      ...paletteColor,
      text: {
        primary: '#99a0a9',
        secondary: paletteColor.secondary.A200,
        disabled: '#7d7b88'
      },
      action: {
        primary: paletteColor.primary.main,
        disabled: paletteColor.grey[300]
      },
      divider: paletteColor.grey[200],
      background: {
        paper: paletteColor.grey[100],
        default: paletteColor.grey[0]
      }
    }
  });
}
