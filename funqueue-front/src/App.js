import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AuthProvider } from './contexts/AuthContext';
import Layout from './components/Layout';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <Layout>
          <div className="App">
            <header className="App-header">
              <h1>Welcome to FunQueue</h1>
              <p>Your queue management application</p>
            </header>
          </div>
        </Layout>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
