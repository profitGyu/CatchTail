import styles from './itemBox.module.scss'

import { useEffect, useState } from 'react'
import useDragDrop from 'hooks/useDragDrop'
import { useInView } from 'react-intersection-observer'

import { Item } from 'types'

import ModalPortal from 'components/Modal/Portal'
import Modal from 'components/Modal'
import Skeleton from 'routes/findAnimal/skeleton'

interface props {
  item: Item
  index?: number
}

const ItemBox = ({ item, index }: props) => {
  const [ref, inView] = useInView()
  const [isLoiding, setIsLoding] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { handleDragStart, handleDragOver, handleDragEnd, handleOnDrop } = useDragDrop()

  const handleClickModal = () => {
    setIsModalOpen((pre) => !pre)
  }

  useEffect(() => {
    if (inView) setIsLoding(true)
  }, [ref, inView, isLoiding])

  if (!isLoiding)
    return (
      <>
        <Skeleton />
        <div ref={ref} />
      </>
    )

  return (
    <li
      className={styles.itemBox}
      draggable={false}
      data-position={index}
      onDragOver={handleDragOver}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDrop={handleOnDrop}
    >
      <button type='button' onClick={handleClickModal}>
        <img src={item.filename.replace('http', 'https')} alt='유기동물 사진' />
        <div className={styles.textContainer}>
          <h1>
            {item.kindCd.replace(/\[.*?\] /g, '')},{item.sexCd === 'M' ? '남아' : ' 여아'}
          </h1>
          <dl>
            <div>
              <dt>털색:</dt>
              <dd>{item.colorCd}</dd>
            </div>
            <div>
              <dt>보호:</dt>
              <dd>{item.careNm}</dd>
            </div>
          </dl>
        </div>
      </button>
      <ModalPortal>{isModalOpen && <Modal setIsOpenPopup={setIsModalOpen} info={item} />}</ModalPortal>
    </li>
  )
}
export default ItemBox
