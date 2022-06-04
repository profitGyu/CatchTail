import dayjs from 'dayjs'
import { atom } from 'recoil'
import { ISearchProps } from 'types'

const DateRangeState = atom<string[]>({
  key: '#DateRangeState',
  default: [dayjs().subtract(1, 'day').format('YYYYMMDD'), dayjs().format('YYYYMMDD')],
})

const SearchState = atom<ISearchProps>({
  key: '#SearchState',
  default: {
    upkind: '',
    upr_cd: '',
    bgnde: dayjs().subtract(7, 'day').format('YYYYMMDD'),
    endde: dayjs().format('YYYYMMDD'),
  },
})

export { DateRangeState, SearchState }
