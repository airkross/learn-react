import React, { useEffect, useState } from 'react';

import DefaultLayout from './layouts/default';
import { AuthContext } from './context/auth-context'

function App() {
  const [isAuth, setIsAuth] = useState<boolean>(false)
  /**
   * @todo доработать лодинг проекта до проевки авторизации
   */
  const [isAppLoading, setIsAppLoading] = useState<boolean>(true)

  useEffect(() => {
    if(localStorage.getItem('isAuth')) {
      setIsAuth(true)
    }
    setIsAppLoading(false)
  }, [])

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      isAppLoading,
    }}>
      <React.StrictMode>
        <DefaultLayout />
      </React.StrictMode>
    </AuthContext.Provider>
  );
}

export default App;
