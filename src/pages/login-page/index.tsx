import { FC, useContext } from 'react'
import { useFetching } from '../../custom-hooks/use-fetching'
import { AuthContext } from '../../context/auth-context'
import LoginForm from './components/login-form'
import { IInitialValues as ILoginData } from './components/login-form/types'

const LoginPage: FC = () => {
  const { setIsAuth } = useContext(AuthContext)
  const [fetchLogin, isLoading, error] = useFetching(async ({ login, password }: ILoginData) => {
    // Иммитация запроса авторизации на бэкенд
    const isSuccessAuthorization = await new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        if (login && password) {
          resolve(true)
        }

        resolve(false)
  
        // reject(new Error('Иммитация ошибки с бэкенда!'))
      }, 2000)
    })

    localStorage.setItem('isAuth', 'true')
    setIsAuth(isSuccessAuthorization)
  })

  const handleSubmit = (loginData: ILoginData) => {
    fetchLogin(loginData)
  }

  return (
    <LoginForm
      error={error}
      isLoading={isLoading}
      whenSubmit={handleSubmit}
    />
  )
}

export default LoginPage