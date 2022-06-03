import { atom } from 'recoil'
import { Item } from 'types'

const bookMarkListState = atom<Item[]>({
  key: '#bookMarkListState',
  default: [],
})

export { bookMarkListState }
