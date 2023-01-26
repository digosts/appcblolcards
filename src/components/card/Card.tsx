import {
  CardContainer,
  CardHeader,
  CardTitle,
  CardImage,
  Line,
  CardBody,
  CardNote,
  CardButtom,
  CardInput,
  CardModal
} from './Styles'

//Loud
import imgRobo from '../../assets/times/loud/robo.png'
import imgCroc from '../../assets/times/loud/croc.png'
import imgTin from '../../assets/times/loud/tin.png'
import imgCeos from '../../assets/times/loud/ceos.png'
import imgRoute from '../../assets/times/loud/route.png'

//Pain
import imgWizer from '../../assets/times/pain/wizer.png'
import imgCarioka from '../../assets/times/pain/carioka.png'
import imgDynkedo from '../../assets/times/pain/dynkedo.png'
import imgDamage from '../../assets/times/pain/damage.png'
import imgBvoy from '../../assets/times/pain/bvoy.png'

//Red
import imgBoal from '../../assets/times/red/boal.png'
import imgAegis from '../../assets/times/red/aegis.png'
import imgAvenger from '../../assets/times/red/avenger.png'
import imgKuri from '../../assets/times/red/kuri.png'
import imgTitan from '../../assets/times/red/titan.png'

//Furia
import imgFnb from '../../assets/times/furia/fnb.png'
import imgGoot from '../../assets/times/furia/goot.png'
import imgEnvy from '../../assets/times/furia/envy.png'
import imgRedbert from '../../assets/times/furia/redbert.png'
import imgTrigo from '../../assets/times/furia/trigo.png'

//Liberty
import imgKiari from '../../assets/times/liberty/kiari.png'
import imgAccez from '../../assets/times/liberty/accez.png'
import imgPiloto from '../../assets/times/liberty/piloto.png'
import imgCavalo from '../../assets/times/liberty/cavalo.png'
import imgJuliera from '../../assets/times/liberty/juliera.png'

//Vivo Keyd
import imgGuigo from '../../assets/times/vivo/guigo.png'
import imgHugato from '../../assets/times/vivo/hugato.png'
import imgGrevthar from '../../assets/times/vivo/grevthar.png'
import imgBount from '../../assets/times/vivo/bount.png'
import imgMicao from '../../assets/times/vivo/micao.png'

//Los Grandes
import imgHirit from '../../assets/times/losgrandes/hirit.png'
import imgRanger from '../../assets/times/losgrandes/ranger.png'
import imgLava from '../../assets/times/losgrandes/lava.png'
import imgZay from '../../assets/times/losgrandes/zay.png'
import imgNetuno from '../../assets/times/losgrandes/netuno.png'

//Intz
import imgZzk from '../../assets/times/intz/zzk.png'
import imgYampi from '../../assets/times/intz/yampi.png'
import imgNosferus from '../../assets/times/intz/nosferus.png'
import imgNia from '../../assets/times/intz/nia.png'
import imgNinjaKiwi from '../../assets/times/intz/ninjakiwi.png'

//Fluxo
import imgTay from '../../assets/times/fluxo/tay.png'
import imgDisamis from '../../assets/times/fluxo/disamis.png'
import imgHauz from '../../assets/times/fluxo/hauz.png'
import imgJojo from '../../assets/times/fluxo/jojo.png'
import imgBrance from '../../assets/times/fluxo/brance.png'

//Kabum
import imgLonely from '../../assets/times/kabum/lonely.png'
import imgScary from '../../assets/times/kabum/scary.png'
import imgYuri from '../../assets/times/kabum/yuri.png'
import imgScuro from '../../assets/times/kabum/scuro.png'
import imgDuds from '../../assets/times/kabum/duds.png'

import { useContext, useEffect, useState } from 'react'
import { ServiceContext } from '../../services/context/ServicesContext'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

type propscard = {
  id: string
  user_id: string
  name: string
  image: string
  note: number
  time: string
}

export function Card(props: propscard) {
  const [imagem, setImagem] = useState('')
  const [noteInput, setNoteInput] = useState(0)
  const { updateUser, carregaDadosTimes } = useContext(ServiceContext)

  useEffect(() => {
    switch (props.image) {
      case 'robo':
        setImagem(imgRobo)
        break
      case 'croc':
        setImagem(imgCroc)
        break
      case 'tin':
        setImagem(imgTin)
        break
      case 'ceos':
        setImagem(imgCeos)
        break
      case 'route':
        setImagem(imgRoute)
        break
      //Red
      case 'boal':
        setImagem(imgBoal)
        break
      case 'aegis':
        setImagem(imgAegis)
        break
      case 'avenger':
        setImagem(imgAvenger)
        break
      case 'kuri':
        setImagem(imgKuri)
        break
      case 'titan':
        setImagem(imgTitan)
        break
      //Pain
      case 'wizer':
        setImagem(imgWizer)
        break
      case 'carioka':
        setImagem(imgCarioka)
        break
      case 'dynkedo':
        setImagem(imgDynkedo)
        break
      case 'damage':
        setImagem(imgDamage)
        break
      case 'bvoy':
        setImagem(imgBvoy)
        break
      //Furia
      case 'fnb':
        setImagem(imgFnb)
        break
      case 'goot':
        setImagem(imgGoot)
        break
      case 'envy':
        setImagem(imgEnvy)
        break
      case 'redbert':
        setImagem(imgRedbert)
        break
      case 'trigo':
        setImagem(imgTrigo)
        break
      //Liberty
      case 'kiari':
        setImagem(imgKiari)
        break
      case 'accez':
        setImagem(imgAccez)
        break
      case 'piloto':
        setImagem(imgPiloto)
        break
      case 'cavalo':
        setImagem(imgCavalo)
        break
      case 'juliera':
        setImagem(imgJuliera)
        break
      //Vivo Keyd
      case 'guigo':
        setImagem(imgGuigo)
        break
      case 'hugato':
        setImagem(imgHugato)
        break
      case 'grevthar':
        setImagem(imgGrevthar)
        break
      case 'bount':
        setImagem(imgBount)
        break
      case 'micao':
        setImagem(imgMicao)
        break
      //Los Grandes
      case 'hirit':
        setImagem(imgHirit)
        break
      case 'ranger':
        setImagem(imgRanger)
        break
      case 'lava':
        setImagem(imgLava)
        break
      case 'zay':
        setImagem(imgZay)
        break
      case 'netuno':
        setImagem(imgNetuno)
        break
      //Intz
      case 'zzk':
        setImagem(imgZzk)
        break
      case 'yampi':
        setImagem(imgYampi)
        break
      case 'nosferus':
        setImagem(imgNosferus)
        break
      case 'nia':
        setImagem(imgNia)
        break
      case 'ninjakiwi':
        setImagem(imgNinjaKiwi)
        break
      //Fluxo
      case 'tay':
        setImagem(imgTay)
        break
      case 'disamis':
        setImagem(imgDisamis)
        break
      case 'hauz':
        setImagem(imgHauz)
        break
      case 'jojo':
        setImagem(imgJojo)
        break
      case 'brance':
        setImagem(imgBrance)
        break
      //Kabum
      case 'lonely':
        setImagem(imgLonely)
        break
      case 'scary':
        setImagem(imgScary)
        break
      case 'yuri':
        setImagem(imgYuri)
        break
      case 'scuro':
        setImagem(imgScuro)
        break
      case 'duds':
        setImagem(imgDuds)
        break
      default:
        break
    }
  }, [])

  async function alterNotePlayer(props: any) {
    try {
      await updateUser(props.id, noteInput)
      await carregaDadosTimes(props.time)

      toast('Nota alterada com sucesso.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        type: 'success'
      })

      setNoteInput(0)
    } catch (e) {
      toast('Não foi possível alterar!', {
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
    <>
      <ToastContainer />
      <CardContainer>
        <CardHeader>
          <CardTitle>{props.name}</CardTitle>
          <CardImage>
            <img width={'130px'} src={imagem} alt="imagem jogador" />
          </CardImage>
        </CardHeader>
        <Line />
        <CardBody>
          <CardNote>{props.note}</CardNote>
          <CardModal>
            <CardInput
              type="number"
              min="0"
              max="100"
              value={noteInput}
              onChange={event => setNoteInput(parseInt(event.target.value, 10))}
            />
            <CardButtom onClick={() => alterNotePlayer(props)}>
              Alterar
            </CardButtom>
          </CardModal>
        </CardBody>
      </CardContainer>
    </>
  )
}
