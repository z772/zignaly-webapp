import PlexSansBoldttf from '../styles/fonts/Sans/IBMPlexSans-Bold.ttf';
import PlexSansLightttf from '../styles/fonts/Sans/IBMPlexSans-Light.ttf';
import PlexSansRegularttf from '../styles/fonts/Sans/IBMPlexSans-Regular.ttf';
import PlexSansMediumttf from '../styles/fonts/Sans/IBMPlexSans-Medium.ttf';
import PlexSansSemiBoldttf from '../styles/fonts/Sans/IBMPlexSans-SemiBold.ttf';

const PlexSansBold = {
    fontFamily: 'PlexSans-Bold',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
      local('PlexSans'),
      local('PlesSans-Bold'),
      url(${PlexSansBoldttf}) format('woff2')
    `,
};

const PlexSansSemiBold = {
    fontFamily: 'PlexSans-SemiBold',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
      local('PlexSans'),
      local('PlesSans-SemiBold'),
      url(${PlexSansSemiBoldttf}) format('woff2')
    `,
};

const PlexSansMedium = {
    fontFamily: 'PlexSans-Medium',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
      local('PlexSans'),
      local('PlesSans-Medium'),
      url(${PlexSansMediumttf}) format('woff2')
    `,
};

const PlexSansRegular = {
    fontFamily: 'PlexSans-Regular',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
      local('PlexSans'),
      local('PlesSans-Regular'),
      url(${PlexSansRegularttf}) format('woff2')
    `,
};

const PlexSansLight = {
    fontFamily: 'PlexSans-Light',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
      local('PlexSans'),
      local('PlesSans-Bold'),
      url(${PlexSansLightttf}) format('woff2')
    `,
};

const black = "#191927";
const black2 = "#1b1b2c";
const purple = "#770fc8";
const purpleLight = "#a946f6";
const white = "#ffffff";
const lightBlack = "#27273f"
const offWhite = "#fbfafc";

const theme = (darkStyle) => {
    return {
        palette: {
            background: {
                default: darkStyle ? black : offWhite,
                paper: darkStyle ? black2 : white,
            },
            grid: {
                main: darkStyle ? lightBlack : white,
                content: darkStyle ? black2 : white,
            },
            primary: {
                main: purple,
            },
            secondary: {
                main: purple,
            },
            text: {
                primary: darkStyle ? white : black,
            },
            action: {
                hover: purple,
                active: purple,
                hoverOpacity: 0,
            },
        },
        typography:{
            h1: {
                fontSize: "33px",
                fontFamily: 'PlexSans-Bold'
            },
            h3: {
                fontSize: "21px",
                fontFamily: 'PlexSans-Bold',
            },
            h4: {
                fontSize: "16px",
                fontFamily: 'PlexSans-SemiBold',
                wordSpacing: "5px"
            },
            h5: {
                fontSize: "14px",
                fontFamily: 'PlexSans-Medium',
                wordSpacing: "5px"
            },
            subtitle2: {
                fontSize: "12px",
                fontFamily: 'PlexSans-Light',
                wordSpacing: "5px"
            },
        },
        overrides: {
            MuiCssBaseline: {
              '@global': {
                '@font-face': [PlexSansMedium, PlexSansRegular, PlexSansSemiBold, PlexSansBold, PlexSansLight],
              },
            },
        },
    }
}

export default theme;