import { extendTheme } from 'native-base';

export const theme = extendTheme({
  colors: {
    // Add new color
    primary: {
      50: '#E3F2F9',
      100: '#C5E4F3',
      200: '#A2D4EC',
      300: '#7AC1E4',
      400: '#47A9DA',
      500: '#0088CC',
      600: '#007AB8',
      700: '#006BA1',
      800: '#005885',
      900: '#003F5E',
    },
    // Redefinig only one shade, rest of the color will remain same.
    amber: {
      400: '#d97706',
    },
  },
  fontConfig: {
    OpenSans: {
      // 100: {
      //   normal: 'OpenSans_300Light',
      //   italic: 'OpenSans_300Light_Italic',
      // },
      // 200: {
      //   normal: 'OpenSans_300Light',
      //   italic: 'OpenSans_300Light_Italic',
      // },
      300: {
        normal: 'OpenSans_300Light',
        italic: 'OpenSans_300Light_Italic',
      },
      400: {
        normal: 'OpenSans_400Regular',
        italic: 'OpenSans_400Regular_Italic',
      },
      // 500: {
      //   normal: 'OpenSans_600SemiBold',
      // },
      600: {
        normal: 'OpenSans_600SemiBold',
        italic: 'OpenSans_600SemiBold_Italic',
      },
      700: {
        normal: 'OpenSans_700Bold',
        italic: 'OpenSans_700Bold_Italic',
      },
      800: {
        normal: 'OpenSans_800ExtraBold',
        italic: 'OpenSans_800ExtraBold_Italic',
      },
    },
    WorkSans: {
      100: {
        normal: 'WorkSans_100Thin',
        italic: 'WorkSans_100Thin_Italic',
      },
      200: {
        normal: 'WorkSans_200ExtraLight',
        italic: 'WorkSans_200ExtraLight_Italic',
      },
      300: {
        normal: 'WorkSans_300Light',
        italic: 'WorkSans_300Light_Italic',
      },
      400: {
        normal: 'WorkSans_400Regular',
        italic: 'WorkSans_400Regular_Italic',
      },
      500: {
        normal: 'WorkSans_500Medium',
        italic: 'WorkSans_500Medium_Italic',
      },
      600: {
        normal: 'WorkSans_600SemiBold',
        italic: 'WorkSans_600SemiBold_Italic',
      },
      700: {
        normal: 'WorkSans_700Bold',
        italic: 'WorkSans_700Bold_Italic',
      },
      800: {
        normal: 'WorkSans_800ExtraBold',
        italic: 'WorkSans_800ExtraBold_Italic',
      },
      900: {
        normal: 'WorkSans_900Black',
        italic: 'WorkSans_900Black_Italic',
      },
    },
  },

  // Make sure values below matches any of the keys in `fontConfig`
  fonts: {
    heading: 'OpenSans',
    body: 'WorkSans',
    mono: 'WorkSans',
  },
});
