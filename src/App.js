import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, Suspense } from 'react';

import { UserContext } from './context/UserContext';
import { theme } from './constant/theme';

import AccountPage from './routes/account';
import Layout from './components/layout';
import List from './routes/list';

import { ThemeProvider } from 'styled-components';

const App = () => {
  const [user, setUser] = useState({
    fullName: '',
    email: '',
    password: '',
    locale: 'tr'
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
                <Route path="/" element={<List />} />
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
