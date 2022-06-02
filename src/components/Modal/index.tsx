import { useRef } from 'react'
import { useClickAway } from 'react-use'
import styles from './modal.module.scss'

import Button from 'components/Button'
import { Item } from 'types'

interface Props {
  setIsOpenPopup: Function
  info: Item
}

const Modal = ({ setIsOpenPopup, info }: Props) => {
  const outsideRef = useRef<HTMLInputElement>(null)

  const handleCloseButtonClick = () => {
    setIsOpenPopup(false)
  }

  useClickAway(outsideRef, () => {
    setIsOpenPopup(false)
  })

  return (
    <div className={styles.modal}>
      <div className={styles.modalContainer} ref={outsideRef}>
        <header>
          <div>자세히 보기</div>
          <div>도움이 필요해요!</div>
          <div>close</div>
        </header>
        <div className={styles.imgContainer}>
          <img src={info.popfile} alt='유기동물 사진' />
        </div>
        <div className={styles.textContainer}>
          <div>
            <dl>
              <dt>나이</dt>
              <dd>{info.age}</dd>
            </dl>
          </div>
          <div>
            <dt>나이</dt>
            <dd>{info.age}</dd>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
