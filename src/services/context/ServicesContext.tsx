import { ReactNode, createContext, useState, useContext } from 'react'
import { updateNotePlayer, carregaDadosFirebase } from '../../firebase'

type propsReturn = {
  id: string
  image: string
  note: number
  player: string
  position: number
  time: string
  user_id: string
}

interface IServiceContext {
  children: ReactNode
}

interface IServiceContextData {
  updateUser: (id: string, note: number) => Promise<any>
  carregaDadosTimes: (time: string) => Promise<propsReturn[]>
  arrayTime?: propsReturn[]
}

export const ServiceContext = createContext({} as IServiceContextData)

export function ServicesProvider({ children }: IServiceContext) {
  const [arrayTime, setArrayTime] = useState<propsReturn[]>([])

  async function updateUser(id: string, note: number) {
    await updateNotePlayer(id, note)
  }

  async function carregaDadosTimes(time: string) {
    const returnDados: propsReturn[] = await carregaDadosFirebase(time)

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
    return timesOrder
  }

  return (
    <ServiceContext.Provider
      value={{ updateUser, carregaDadosTimes, arrayTime }}
    >
      {children}
    </ServiceContext.Provider>
  )
}
