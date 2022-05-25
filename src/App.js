import { useState, Suspense } from 'react';
import { UserContext } from './context/UserContext';
import AccountPage from './routes/account';
import { ThemeProvider } from 'styled-components';
import { theme } from './constant/theme';
import Layout from './components/layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import List from './routes/list';

const App = () => {
  const [user, setUser] = useState({
    fullName: '',
    email: '',
    password: '',
    locale: 'TR'
  });

  const data = {
    user,
    setUser
  };

  return (
    <UserContext.Provider value={data}>
      <Suspense fallback={null}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <Layout>
              <Routes>
                <Route path="/" element={<App />} />
                <Route path="account" element={<AccountPage />} />
                <Route path="list" element={<List />} />
              </Routes>
            </Layout>
          </ThemeProvider>
        </BrowserRouter>
      </Suspense>
    </UserContext.Provider>
  );
};

export default App;
