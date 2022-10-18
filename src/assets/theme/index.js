import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: "#0d6efd",
    },
    secondary: {
      main: "#6c757d",
    },
    success:{
        main: "#198754",
    },
    info:{
        main:"#0dcaf0",
    },
    warning:{
        main:"#ffc107",
    },
    error:{
        main:"#dc3545"
    }
  },
});

