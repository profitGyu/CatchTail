import axios from 'axios'
import { IFindAbandonmentRep, ISearchProps } from 'types'

const PROXY = window.location.hostname === 'localhost' ? '/api' : '/proxy'
const BASE_URL = `/1543061/abandonmentPublicSrvc/`

const findSidoAPI = axios.get(`${BASE_URL}sido`, {
  params: {
    serviceKey: process.env.REACT_APP_OPEN_DATA_API_KEY,
    numOfRows: '10',
    pageNo: '1',
    _type: 'json',
  },
})

const findAbandonmentAPI = (params: ISearchProps) =>
  axios.get<IFindAbandonmentRep>(`${BASE_URL}abandonmentPublic`, {
    params: {
      ...params,
      serviceKey: process.env.REACT_APP_OPEN_DATA_API_KEY,
      numOfRows: '40',
      pageNo: '1',
      _type: 'json',
    },
  })

export { findSidoAPI, findAbandonmentAPI }
