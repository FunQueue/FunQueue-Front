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
  // 모바일 최적화 설정
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          // 모바일에서 버튼 터치 영역 확대
          minHeight: '44px',
          '@media (max-width: 600px)': {
            minHeight: '48px',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          // 모바일에서 입력 필드 최적화
          '& .MuiInputBase-root': {
            '@media (max-width: 600px)': {
              fontSize: '16px', // iOS에서 줌 방지
            },
          },
        },
      },
    },
  },
  // 반응형 브레이크포인트 설정
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
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
