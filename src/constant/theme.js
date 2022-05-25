const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
};

const colors = {
  lotion: '#fafafa',
  chineseBlack: '#121212',
  slateGray: '#64738C',
  lavenderGray: '#BBC3CF',
  lust: '#E82223',
  platinum: '#e6e6e6',
  white: '#fff',
  tiffanyBlue: '#0DAFC0'
};

export const theme = {
  color: {
    color1: colors.lotion,
    color2: colors.chineseBlack,
    color3: colors.platinum,
    color4: colors.white,
    color5: colors.tiffanyBlue,
    color6: colors.lavenderGray,
    gray: colors.slateGray,
    red: colors.lust
  },
  device: {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
  }
};
