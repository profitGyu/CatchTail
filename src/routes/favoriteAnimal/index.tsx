import styles from './favoriteAnimal.module.scss'
import { useRecoilState } from 'recoil'
import { bookMarkListState } from 'states'
import ItemBox from 'components/ItemBox'

const FavoriteAnimal = () => {
  const [BookmarkList] = useRecoilState(bookMarkListState)
  return (
    <div>
      <ul className={styles.resultContainer}>
        {BookmarkList.map((item, index) => (
          <ItemBox item={item} key={item.desertionNo} index={index} />
        ))}
      </ul>
    </div>
  )
}

export default FavoriteAnimal
