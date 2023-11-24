import * as React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import theme from './theme';
import { ThemeProvider, Container, Box, CssBaseline } from '@mui/material';
import Navigation from './components/Navigation';
import './styles.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Navigation />
      <Container component="main" maxWidth="xl" style={{ minHeight: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <CssBaseline />
        <Box component="main" sx={{ flexGrow: 1, padding: 5 }}>
          <App />
        </Box>
      </Container>
    </ThemeProvider>
  </BrowserRouter>
);
