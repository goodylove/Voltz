'use client';
import { createTheme } from '@mui/material/styles';



const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: 'dark',
    primary: {
     main:'#b85488',
     light: "#FF4AA9",
     contrastText:"#2667ff"
    },
    secondary: {
    main:'#00556d',
     light: "#4de5ff",

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