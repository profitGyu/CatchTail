import { atom } from 'recoil'
import { ICity } from 'types'

const SearchcityState = atom<ICity>({
  key: '#SearchcityState',
  default: { orgCd: '', orgdownNm: '전체' },
})

const SearchAnimalState = atom<string>({
  key: '#SearchAnimalState',
  default: '',
})

export { SearchcityState, SearchAnimalState }
