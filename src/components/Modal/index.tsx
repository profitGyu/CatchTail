import styles from './modal.module.scss'

import { MouseEvent, useMemo, useRef } from 'react'
import { useClickAway } from 'react-use'

import _ from 'lodash'
import store from 'storejs'

import { useRecoilState } from 'recoil'
import { bookMarkListState } from 'states'

import { Item } from 'types'
import Button from 'components/Button'
import { useNavigate } from 'react-router-dom'

interface Props {
  setIsOpenPopup: Function
  info: Item
}

const Modal = ({ setIsOpenPopup, info }: Props) => {
  const outsideRef = useRef<HTMLInputElement>(null)
  const [BookmarkList, setBookmarkList] = useRecoilState(bookMarkListState)

  const navigate = useNavigate()

  const handleCloseButtonClick = () => {
    setIsOpenPopup(false)
  }

  useClickAway(outsideRef, () => {
    setIsOpenPopup(false)
  })

  const onClickBookmarkAddHandle = () => {
    setBookmarkList((pre) => {
      return pre.concat(info)
    })
    store.set('BookmarkList', BookmarkList.concat(info))
  }

  const onClickBookMarkRemoveHandle = () => {
    const newFavorites = BookmarkList.filter((item) => item.desertionNo !== info.desertionNo)
    setBookmarkList(newFavorites)
    store.remove('BookmarkList')
    store.set('BookmarkList', newFavorites)
  }

  const isBookMark = useMemo(() => {
    return _.findIndex(BookmarkList, { desertionNo: info.desertionNo }) !== -1
  }, [BookmarkList, info.desertionNo])

  const handleManageClick = (e: MouseEvent<HTMLButtonElement>) => {
    const { number } = e.currentTarget.dataset
    navigate(`../detail/${number}`, { state: info, replace: true })
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modalContainer} ref={outsideRef}>
        <header>
          <button type='button' onClick={handleManageClick} data-number={info.desertionNo}>
            자세히 보기
          </button>
          <div className={styles.title}>도움이 필요해요!</div>
          <Button size='small' onClick={handleCloseButtonClick} primary>
            닫기
          </Button>
        </header>
        <div className={styles.imgContainer}>
          <img src={info.popfile.replace('http', 'https')} alt='유기동물 사진' />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.rightWapper}>
            <dl>
              <div>
                <dt>나이:</dt>
                <dd>{info.age}</dd>
              </div>
              <div>
                <dt>성별:</dt>
                <dd>{info.sexCd === 'M' ? '남아' : '여아'}</dd>
              </div>
              <div>
                <dt>상태:</dt>
                <dd>{info.processState}</dd>
              </div>
              <div>
                <dt>몸무게:</dt>
                <dd>{info.weight}</dd>
              </div>
              <div>
                <dt>종:</dt>
                <dd>{info.kindCd.replace(/\[.*?\] /g, '')}</dd>
              </div>
              <div>
                <dt>특징:</dt>
                <dd>{info.specialMark}</dd>
              </div>
            </dl>
          </div>
          <div className={styles.leftWapper}>
            <div>
              <dt>접수일시:</dt>
              <dd>{info.happenDt}</dd>
            </div>
            <div>
              <dt>구조위치:</dt>
              <dd>{info.noticeNo}</dd>
            </div>
            <div>
              <dt>보호소:</dt>
              <dd>{info.careNm}</dd>
            </div>
            <div>
              <dt>보호소 번호:</dt>
              <dd>{info.careTel}</dd>
            </div>
            <div>
              <dt>보호소 주소:</dt>
              <dd>{info.careAddr}</dd>
            </div>
            <div>
              <dt>담당 보호사:</dt>
              <dd>{info.chargeNm}</dd>
            </div>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          {isBookMark ? (
            <Button size='large' onClick={onClickBookMarkRemoveHandle}>
              친구 목록에서 제거
            </Button>
          ) : (
            <Button size='large' onClick={onClickBookmarkAddHandle}>
              친구 목록에 담기
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Modal
