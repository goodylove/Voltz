'use client';
import { createTheme } from '@mui/material/styles';

declare module "@mui/material/styles" {
  interface Theme {
    custom: {
      customShadow1: string;
      customShadow2: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    custom?: {
      customShadow1?: string;
      customShadow2?: string;
    };
  }
}

const theme = createTheme({
  // cssVariables: true,
  custom: {
    customShadow1:
      "drop-shadow(0px 0px 10px #FF4AA9) drop-shadow(0px 0px 16px #FF4AA9) drop-shadow(0px 0px 40px rgba(255, 74, 169, 0.8))",
    customShadow2:
      "drop-shadow(0px 8px 28px rgba(255, 74, 169, 0.2)) drop-shadow(0px 18px 88px rgba(255, 74, 169, 0.3))",
  },
  palette: {
    mode: 'dark',
    primary: {
     main:'#b85488',
     light: "#FF4AA9",
     contrastText:"#2667ff",
    },
    secondary: {
      main:'#00556d',
      light: "#4de5ff",
      dark:'#1c1927'

    },
    text:{
    primary:"#E5E1F9",
    secondary:"rgba(229,225,249,.75)"

    },
    background:{
        default:"#0f0c1d",
        paper:"rgba(32,27,53,.6)"
    }
  },
  typography: {
    fontFamily:['Pixel Operator Mono','sans-serif'].join(','),
    body2:{
      fontSize:16,
      letterSpacing:"1px"
    },
    body1:{
      fontSize:14,
      letterSpacing:"1.1px"
    },
    h4:{
      fontSize:28,
      fontWeight:"bold",
      letterSpacing:"1.5px"
    },
    h5:{
      fontSize:32,
      fontWeight:"bold",
      letterSpacing:"1.5px"
    }
   
  },
//   components: {
//     MuiAlert: {
//       styleOverrides: {
//         root: {
//           variants: [
//             {
//               props: { severity: 'info' },
//               style: {
//                 backgroundColor: '#60a5fa',
//               },
//             },
//           ],
//         },
//       },
//     },
//   },
});
// PixelOperator.ttf
// PixelOperator-Bold.ttf

export default theme;