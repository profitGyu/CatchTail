import { ICity } from 'types'

// interface ICity {
//   orgCd: string
//   orgdownNm: string
// }

const CITY: ICity[] = [
  {
    orgCd: '',
    orgdownNm: '전체',
  },
  {
    orgCd: '6110000',
    orgdownNm: '서울특별시',
  },
  {
    orgCd: '6260000',
    orgdownNm: '부산광역시',
  },
  {
    orgCd: '6270000',
    orgdownNm: '대구광역시',
  },
  {
    orgCd: '6280000',
    orgdownNm: '인천광역시',
  },
  {
    orgCd: '6290000',
    orgdownNm: '광주광역시',
  },
  {
    orgCd: '5690000',
    orgdownNm: '세종특별자치시',
  },
  {
    orgCd: '6300000',
    orgdownNm: '대전광역시',
  },
  {
    orgCd: '6310000',
    orgdownNm: '울산광역시',
  },
  {
    orgCd: '6410000',
    orgdownNm: '경기도',
  },
  {
    orgCd: '6420000',
    orgdownNm: '강원도',
  },
  {
    orgCd: '6430000',
    orgdownNm: '충청북도',
  },
  {
    orgCd: '6440000',
    orgdownNm: '충청남도',
  },
  {
    orgCd: '6450000',
    orgdownNm: '전라북도',
  },
  {
    orgCd: '6460000',
    orgdownNm: '전라남도',
  },
  {
    orgCd: '6470000',
    orgdownNm: '경상북도',
  },
  {
    orgCd: '6480000',
    orgdownNm: '경상남도',
  },
  {
    orgCd: '6500000',
    orgdownNm: '제주특별자치도',
  },
]

interface IAnimal {
  text: string
  value: string
}

const ANIMAL_KIND: IAnimal[] = [
  {
    text: '🐕',
    value: '417000',
  },
  {
    text: '🐈',
    value: '422400',
  },
  {
    text: '🐾',
    value: '429900',
  },
]

export { ANIMAL_KIND, CITY }
