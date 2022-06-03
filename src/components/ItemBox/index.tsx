import styles from './itemBox.module.scss'
import Modal from 'components/Modal'
import ModalPortal from 'components/Modal/Portal'
import { Item } from 'types'
import { useState } from 'react'

interface props {
  item: Item
}

const ItemBox = ({ item }: props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleClickModal = () => {
    setIsModalOpen((pre) => !pre)
  }

  return (
    <li className={styles.itemBox}>
      <button type='button' onClick={handleClickModal}>
        <img src={item.filename} alt='유기동물 사진' />
        <div>
          <dl>
            <div>
              <dt>상태:</dt>
              <dd>{item.processState}</dd>
            </div>
            <div>
              <dt>성별:</dt>
              <dd>{item.sexCd}</dd>
            </div>
            <div>
              <span>보호소:{item.careNm}</span>
            </div>
          </dl>
        </div>
      </button>
      <ModalPortal>{isModalOpen && <Modal setIsOpenPopup={setIsModalOpen} info={item} />}</ModalPortal>
    </li>
  )
}
export default ItemBox
