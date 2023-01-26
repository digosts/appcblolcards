import { initializeApp } from 'firebase/app'

import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
  setDoc,
  doc
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCL0GS40UkBVcY6XWtFJ6pHQ_jodcE7moU',
  authDomain: 'craquebagrelol.firebaseapp.com',
  projectId: 'craquebagrelol',
  storageBucket: 'craquebagrelol.appspot.com',
  messagingSenderId: '394946381245',
  appId: '1:394946381245:web:406527edea0decff8cbed4',
  measurementId: 'G-ZVQJMFKZPN'
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

type propsReturn = {
  id: string
  image: string
  note: number
  player: string
  position: number
  time: string
  user_id: string
}

const cadastroTimes = async () => {
  /* try {
    const array = [
    ]

    array.map(async a => {
      await addDoc(collection(db, 'usernotesplayers'), {
        note: a.note,
        player: a.player,
        image: a.image,
        user_id: a.user_id,
        time: a.time,
        position: a.position
      })
    })
  } catch (e) {} */
}

const carregaDadosFirebase = async (time: string) => {
  try {
    const q = query(
      collection(db, 'usernotesplayers'),
      where('time', '==', time)
    )

    const docs = await getDocs(q)

    let arrayReturn: propsReturn[] = []

    docs.forEach(doc => {
      const id = doc.id
      const data = doc.data()
      arrayReturn.push({
        id: id,
        image: data.image,
        note: data.note,
        player: data.player,
        position: data.position,
        time: data.time,
        user_id: data.user_id
      })
    })
    return arrayReturn
  } catch (err) {
    let arrayReturn: propsReturn[] = []
    console.error(err)
    return arrayReturn
  }
}

const updateNotePlayer = async (player: string, noteUpd: number) => {
  const docRef = doc(db, 'usernotesplayers', player)

  const data = {
    note: noteUpd
  }

  await setDoc(docRef, data, { merge: true })
    .then(docRef => {})
    .catch(error => {
      alert('erro')
    })
}

const logout = () => {}

export { carregaDadosFirebase, logout, cadastroTimes, updateNotePlayer }
