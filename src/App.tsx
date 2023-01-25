import {
  Container,
  ContainerTitle,
  Title,
  ContainerImage,
  BoxImage,
  Image,
  ContainerCards,
  ContainerLogo
} from './GlobalStyles'
import { Card } from './components/card/Card'
import { useEffect, useState } from 'react'
import { signInWithGoogle, logout } from './firebase'

import Loud from './assets/times/loud/loud.png'
import Pain from './assets/times/pain/pain.png'
import Furia from './assets/times/furia/furia.png'
import Red from './assets/times/red/red.png'
import Vivo from './assets/times/vivo/vivo.png'
import Liberty from './assets/times/liberty/liberty.png'
import Losgrandes from './assets/times/losgrandes/losgrandes.png'
import Intz from './assets/times/intz/intz.png'
import Fluxo from './assets/times/fluxo/fluxo.png'
import Kabum from './assets/times/kabum/kabum.png'
import logoBagre from './assets/times/bagre.png'
import logoIlha from './assets/times/logoilha.png'

type propsReturn = {
  id: string
  image: string
  note: number
  player: string
  position: number
  time: string
  user_id: string
}

export function App() {
  const [timeSelect, setTimeSelect] = useState('Loud')
  const [arrayTime, setArrayTime] = useState<propsReturn[]>([])

  useEffect(() => {
    getDados()
  }, [timeSelect])

  async function getDados() {
    const returnDados = await signInWithGoogle(timeSelect)

    var filtered = returnDados.filter(function (el) {
      return el.position == 1
    })
    var filtered2 = returnDados.filter(function (el) {
      return el.position == 2
    })
    var filtered3 = returnDados.filter(function (el) {
      return el.position == 3
    })
    var filtered4 = returnDados.filter(function (el) {
      return el.position == 4
    })
    var filtered5 = returnDados.filter(function (el) {
      return el.position == 5
    })

    var timesOrder = [
      filtered[0],
      filtered2[0],
      filtered3[0],
      filtered4[0],
      filtered5[0]
    ]

    setArrayTime(timesOrder)
  }

  return (
    <Container>
      <ContainerTitle>
        <img src={logoBagre} />
        <Title>Craque Bagre - LOL</Title>
      </ContainerTitle>
      {timeSelect && (
        <ContainerImage>
          <BoxImage
            onClick={() => setTimeSelect('Loud')}
            className={timeSelect === 'Loud' ? 'borderSelected' : ''}
          >
            <Image src={Loud} alt="Loud" />
          </BoxImage>
          <BoxImage
            onClick={() => setTimeSelect('Pain')}
            className={timeSelect === 'Pain' ? 'borderSelected' : ''}
          >
            <Image src={Pain} alt="Pain" />
          </BoxImage>
          <BoxImage
            onClick={() => setTimeSelect('Furia')}
            className={timeSelect === 'Furia' ? 'borderSelected' : ''}
          >
            <Image src={Furia} alt="Furia" />
          </BoxImage>
          <BoxImage
            onClick={() => setTimeSelect('Red Canids')}
            className={timeSelect === 'Red Canids' ? 'borderSelected' : ''}
          >
            <Image src={Red} alt="Red Canids" />
          </BoxImage>
          <BoxImage
            onClick={() => setTimeSelect('Vivo Keyd')}
            className={timeSelect === 'Vivo Keyd' ? 'borderSelected' : ''}
          >
            <Image src={Vivo} alt="Vivo Keyd" />
          </BoxImage>
          <BoxImage
            onClick={() => setTimeSelect('Liberty')}
            className={timeSelect === 'Liberty' ? 'borderSelected' : ''}
          >
            <Image src={Liberty} alt="Liberty" />
          </BoxImage>
          <BoxImage
            onClick={() => setTimeSelect('Los Grandes')}
            className={timeSelect === 'Los Grandes' ? 'borderSelected' : ''}
          >
            <Image src={Losgrandes} alt="Los Grandes" />
          </BoxImage>
          <BoxImage
            onClick={() => setTimeSelect('Intz')}
            className={timeSelect === 'Intz' ? 'borderSelected' : ''}
          >
            <Image src={Intz} alt="Intz" />
          </BoxImage>
          <BoxImage
            onClick={() => setTimeSelect('Fluxo')}
            className={timeSelect === 'Fluxo' ? 'borderSelected' : ''}
          >
            <Image src={Fluxo} alt="Fluxo" />
          </BoxImage>
          <BoxImage
            onClick={() => setTimeSelect('Kabum')}
            className={timeSelect === 'Kabum' ? 'borderSelected' : ''}
          >
            <Image src={Kabum} alt="Kabum" />
          </BoxImage>
        </ContainerImage>
      )}
      <ContainerCards>
        {arrayTime &&
          arrayTime.map(a => {
            return (
              <Card
                key={a.player}
                id={a.id}
                user_id={a.user_id}
                name={a.player}
                image={a.image}
                note={a.note}
                time={a.time}
              />
            )
          })}
      </ContainerCards>
      <ContainerLogo>
        <img src={logoIlha} />
      </ContainerLogo>
    </Container>
  )
}
