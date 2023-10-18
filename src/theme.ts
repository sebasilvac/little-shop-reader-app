import { Platform } from "react-native";

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    white: '#ffffff',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
    small: 12,
  },
  fonts: {
    main: Platform.select({
      ios: 'System',
      android: 'Roboto',
      default: 'System',
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
  appBar: {
    primary: '#24292e',
    textSecondary: '#999',
    textPrimary: '#ffffff',
  },
};

export default theme;