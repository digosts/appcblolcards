import {
  Container,
  ContainerLogo,
  ContainerInput,
  CardButtom,
  CardInput
} from './Styles'
import { useEffect, useState, useContext } from 'react'
import logoIlha from '../../assets/times/logoilha.png'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export function Login() {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  function login() {
    if (user === 'baiapao' && password === '26012023ilha') {
      sessionStorage.setItem('@tokenBaiTv', '26012023ilha')
      window.location.reload()
    } else {
      toast('Usuário ou senha incorretos!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        type: 'warning'
      })
    }
  }

  return (
    <Container>
      <ToastContainer />
      <ContainerLogo>
        <img src={logoIlha} />
      </ContainerLogo>
      <ContainerInput>
        <CardInput
          placeholder="Usuário"
          onChange={e => setUser(e.target.value)}
        ></CardInput>
        <CardInput
          placeholder="Senha"
          type={'password'}
          onChange={e => setPassword(e.target.value)}
        ></CardInput>
        <CardButtom onClick={login}>Entrar</CardButtom>
      </ContainerInput>
    </Container>
  )
}
