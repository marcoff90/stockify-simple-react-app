import {createTheme} from "@mui/material";
import {grey} from '@mui/material/colors';

export const theme = createTheme({
  spacing: 4,
  palette: {
    primary: {
      main: '#00adb5'
    },
    secondary: {
      main: grey[200]
    },
  },
});
