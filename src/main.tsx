import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App';
import './i18n';  // Ensure i18n is initialized
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
