import {
  Container,
  ContainerTitle,
  Title,
  ContainerImage,
  BoxImage,
  Image,
  ContainerCards,
  ContainerLogo
} from '../../GlobalStyles'
import { Card } from '../../components/card/Card'
import { useEffect, useState, useContext } from 'react'
import { ServiceContext } from '../../services/context/ServicesContext'

import Loud from '../../assets/times/loud/loud.png'
import Pain from '../../assets/times/pain/pain.png'
import Furia from '../../assets/times/furia/furia.png'
import Red from '../../assets/times/red/red.png'
import Vivo from '../../assets/times/vivo/vivo.png'
import Liberty from '../../assets/times/liberty/liberty.png'
import Losgrandes from '../../assets/times/losgrandes/losgrandes.png'
import Intz from '../../assets/times/intz/intz.png'
import Fluxo from '../../assets/times/fluxo/fluxo.png'
import Kabum from '../../assets/times/kabum/kabum.png'
import logoBagre from '../../assets/times/bagre.png'
import logoIlha from '../../assets/times/logoilha.png'

export function Home() {
  const { carregaDadosTimes, arrayTime } = useContext(ServiceContext)
  const [timeSelect, setTimeSelected] = useState('Loud')

  useEffect(() => {
    const url = sessionStorage.getItem('@keyTime') || 'Loud'
    alterTime(url)
    setTimeSelected(url)
  }, [])

  async function alterTime(time: string) {
    setTimeSelected(time)
    await carregaDadosTimes(time)
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
            onClick={() => alterTime('Loud')}
            className={timeSelect === 'Loud' ? 'borderSelected' : ''}
          >
            <Image src={Loud} alt="Loud" />
          </BoxImage>
          <BoxImage
            onClick={() => alterTime('Pain')}
            className={timeSelect === 'Pain' ? 'borderSelected' : ''}
          >
            <Image src={Pain} alt="Pain" />
          </BoxImage>
          <BoxImage
            onClick={() => alterTime('Furia')}
            className={timeSelect === 'Furia' ? 'borderSelected' : ''}
          >
            <Image src={Furia} alt="Furia" />
          </BoxImage>
          <BoxImage
            onClick={() => alterTime('Red Canids')}
            className={timeSelect === 'Red Canids' ? 'borderSelected' : ''}
          >
            <Image src={Red} alt="Red Canids" />
          </BoxImage>
          <BoxImage
            onClick={() => alterTime('Vivo Keyd')}
            className={timeSelect === 'Vivo Keyd' ? 'borderSelected' : ''}
          >
            <Image src={Vivo} alt="Vivo Keyd" />
          </BoxImage>
          <BoxImage
            onClick={() => alterTime('Liberty')}
            className={timeSelect === 'Liberty' ? 'borderSelected' : ''}
          >
            <Image src={Liberty} alt="Liberty" />
          </BoxImage>
          <BoxImage
            onClick={() => alterTime('Los Grandes')}
            className={timeSelect === 'Los Grandes' ? 'borderSelected' : ''}
          >
            <Image src={Losgrandes} alt="Los Grandes" />
          </BoxImage>
          <BoxImage
            onClick={() => alterTime('Intz')}
            className={timeSelect === 'Intz' ? 'borderSelected' : ''}
          >
            <Image src={Intz} alt="Intz" />
          </BoxImage>
          <BoxImage
            onClick={() => alterTime('Fluxo')}
            className={timeSelect === 'Fluxo' ? 'borderSelected' : ''}
          >
            <Image src={Fluxo} alt="Fluxo" />
          </BoxImage>
          <BoxImage
            onClick={() => alterTime('Kabum')}
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
