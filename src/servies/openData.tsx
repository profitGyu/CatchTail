import axios from 'axios'
import { IFindAbandonmentRep, ISearchProps } from 'types'

const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy'
const BASE_URL = `${PROXY}/1543061/abandonmentPublicSrvc/`

const findAbandonmentAPI = (params: ISearchProps, page?: string) => {
  return axios.get<IFindAbandonmentRep>(`${BASE_URL}abandonmentPublic`, {
    params: {
      ...params,
      serviceKey: process.env.REACT_APP_OPEN_DATA_API_KEY,
      numOfRows: '30',
      _type: 'json',
      pageNo: page,
    },
  })
}

export { findAbandonmentAPI }
