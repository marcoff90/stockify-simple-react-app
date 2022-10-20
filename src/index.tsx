import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {theme} from "./styles/mui-theme";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {SnackbarProvider} from "notistack";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <SnackbarProvider
            autoHideDuration={3000}
            anchorOrigin={{vertical: 'top', horizontal: 'center'}}
            maxSnack={3}
        >
        <App/>
        <CssBaseline/>
        </SnackbarProvider>
      </ThemeProvider>
    </React.StrictMode>
);
