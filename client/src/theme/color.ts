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
    purple: '#6F70B9',
    green: '#008C16',
    skyblue: '#D6DFFF',
    mildGray: '#F0F0F0',
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
  calendar: {
    border: '#dadada',
    main: '#efefef',
  },
  statistic: {
    expenditureOne: '#324F7E',
    expenditureTwo: '#5A75A1',
    expenditureThree: '#859BBF',
    expenditureFour: '#A7BBDB',
    incomeOne: '#D4D424',
    incomeTwo: '#E2E24E',
    incomeThree: '#EFEF8C',
    incomeFour: '#F7F788',
  },
};

export default myColor;
