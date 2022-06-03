import styles from './searchForm.module.scss'
import { ArrowIcon, Waves } from 'assets/svgs'
import { FormEvent, MouseEvent, useState } from 'react'
import { cx } from 'styles'

import { CITY, ANIMAL_KIND } from 'model'

import { ICity } from 'types'

import { useRecoilValue, useSetRecoilState } from 'recoil'
import { DateRangeState, SearchState } from 'routes/state'

import DataInput from 'routes/_shared/DateInput'
import Button from 'components/Button'

const SearchForm = () => {
  const [isActive, SetIsActive] = useState(false)
  const [city, setCity] = useState<ICity>({ orgCd: '', orgdownNm: '전체' })
  const [animal, setAniaml] = useState<string>('')
  const [aniMalIsActive, SetaniMalIsActive] = useState(false)

  const setSearchState = useSetRecoilState(SearchState)
  const DateRangevalue = useRecoilValue(DateRangeState)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSearchState({
      upkind: animal,
      upr_cd: city.orgCd,
      bgnde: DateRangevalue[0],
      endde: DateRangevalue[1],
    })
  }

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.dataset.num && e.currentTarget.dataset.name) {
      setCity({
        orgCd: e.currentTarget.dataset.num,
        orgdownNm: e.currentTarget.dataset.name,
      })
    }
    SetIsActive((current) => !current)
  }

  const handleAnimalClick = (e: MouseEvent<HTMLButtonElement>) => {
    setAniaml(e.currentTarget.value)
    SetaniMalIsActive((current) => !current)
  }

  const handleArrowIconClick = () => {
    SetIsActive((current) => !current)
  }

  return (
    <form onSubmit={handleSubmit} className={styles.searchFrom}>
      <h1>
        <label htmlFor='cityClass'>유기동물들의 친구가 되어주세요!</label>
      </h1>
      <div className={styles.dateContanter}>
        <DataInput />
      </div>
      <div className={styles.inputContainer} onClick={handleArrowIconClick} role='button' tabIndex={0}>
        <input id='cityClass' type='text' value={city.orgdownNm} readOnly />
        <ArrowIcon className={cx(styles.arrowIcon, { [styles.arrowIconOpen]: isActive })} />
      </div>
      <div className={styles.menuContainer}>
        <ul role='menu' className={cx(styles.menu, { [styles.menuActive]: isActive })}>
          {CITY.map((item) => {
            return (
              <li key={item.orgCd}>
                <button
                  onClick={handleClick}
                  data-name={item.orgdownNm}
                  data-num={item.orgCd}
                  type='button'
                  data-name-num
                >
                  {item.orgdownNm}
                </button>
              </li>
            )
          })}
        </ul>
      </div>
      <ul className={styles.choise}>
        {ANIMAL_KIND.map((item) => {
          return (
            <li key={item.value}>
              <button
                onClick={handleAnimalClick}
                value={item.value}
                type='button'
                className={cx({ [styles.animalButton]: aniMalIsActive })}
              >
                {item.text}
              </button>
            </li>
          )
        })}
      </ul>
      <Button type='submit' onClick={handleSubmit} size='normal'>
        찾기
      </Button>
    </form>
  )
}

export default SearchForm
