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
    kakaoBlack: '#2F2E2D',
    brown: '#7A5A00',
    blue: '#647FFD',
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
    lightGray: '#EEEEEE',
  },
};

export default myColor;
