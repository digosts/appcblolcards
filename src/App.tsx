import { ServicesProvider } from './services/context/ServicesContext'
import { Home } from './screens/home/Home'
import { Login } from './screens/login/Login'

export function App() {
  const token = sessionStorage.getItem('@tokenBaiTv')

  return <ServicesProvider>{token ? <Home /> : <Login />}</ServicesProvider>
}
