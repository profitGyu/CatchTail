import axios from 'axios'

const BASIC_URL = '/1543061/abandonmentPublicSrvc/'

const findSidoAPI = axios.get(`${BASIC_URL}sido`, {
  params: {
    serviceKey: process.env.REACT_APP_OPEN_DATA_API_KEY,
    numOfRows: '10',
    pageNo: '1',
    _type: 'json',
  },
})

const findAbandonmentAPI = axios.get(`${BASIC_URL}abandonmentPublic`, {
  params: {
    serviceKey: process.env.REACT_APP_OPEN_DATA_API_KEY,
    numOfRows: '40',
    pageNo: '1',
    _type: 'json',
  },
})

export { findSidoAPI, findAbandonmentAPI }
