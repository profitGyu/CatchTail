export interface ICity {
  orgCd: string
  orgdownNm: string
}

export interface ISearchProps {
  upkind: string
  upr_cd: string
  bgnde: string
  endde: string
}

export interface IFindAbandonmentRep {
  response: Response
}

interface Response {
  header: Header
  body: IBody
}

export interface IBody {
  items: Items
  numOfRows: number
  pageNo: number
  totalCount: number
}

interface Items {
  item: Item[]
}

export interface Item {
  desertionNo: string
  filename: string
  happenDt: string
  happenPlace: string
  kindCd: string
  colorCd: string
  age: string
  weight: string
  noticeNo: string
  noticeSdt: string
  noticeEdt: string
  popfile: string
  processState: string
  sexCd: string
  neuterYn: string
  specialMark: string
  careNm: string
  careTel: string
  careAddr: string
  orgNm: string
  chargeNm: string
  officetel: string
}

interface Header {
  reqNo: number
  resultCode: string
  resultMsg: string
}
