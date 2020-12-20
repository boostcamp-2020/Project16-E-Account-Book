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
    test: '#FFB421',
  },
  calendar: {
    border: '#dadada',
    main: '#efefef',
  },
};

export const incomeColor = ['#FFA500', '#FFC31E', '#FFE13C', '#FADCA5', '#FAFAB4', '#F7F4ED'];

export const expenditureColor = [
  '#2E2F78',
  '#4648B8',
  '#5457DE',
  '#5F61F8',
  '#4A74E0',
  '#53AFFC',
  '#40C7E6',
  '#47DFEF',
  '#91E9F2',
  '#BBF2F4',
  '#97A6A8',
  '#656F70',
  '#454C4D',
];

export default myColor;
