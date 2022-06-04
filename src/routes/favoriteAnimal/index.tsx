import styles from './favoriteAnimal.module.scss'
import { useRecoilState } from 'recoil'
import { bookMarkListState } from 'states'
import ItemBox from 'components/ItemBox'

const FavoriteAnimal = () => {
  const [BookmarkList, setBookmarkList] = useRecoilState(bookMarkListState)
  return (
    <div className={styles.resultContainer}>
      <ul className={styles.resultContainer}>
        {BookmarkList.map((item) => (
          <ItemBox item={item} key={item.desertionNo} />
        ))}
      </ul>
    </div>
  )
}

export default FavoriteAnimal
