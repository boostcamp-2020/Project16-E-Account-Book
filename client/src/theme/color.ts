interface Color {
  [key: string]: string;
}

interface Colors {
  [key: string]: Color;
}

const myColor: Colors = {
  primary: {
    dark: '#FFB421',
    main: '#F4C239',
    light: '#FFE6A0',
    accent: '#7392FF',
    reject: '#FF7373',
    cancel: '#C4C4C4',
    lightGray: '#EEEEEE',
    gray: '#666666',
    darkGray: '#757575',
    black: '#2F2E2D',
    brown: '#7A5A00',
    white: '#FFFFFF',
  },
  money: {
    expenditure: '#7392FF',
    income: '#F4C239',
  },
  header: {
    dark: '#7A5A00',
    light: '#FFFFFF',
  },
  background: {
    translucentBlack: '#00000050',
    lightGray: '#EEEEEE',
  },
  oauth: {
    lightBlack: '#444444',
    green: '#4FA42B',
  },
};

export default myColor;
