import styles from './favoriteAnimal.module.scss'
import { useRecoilState } from 'recoil'
import { bookMarkListState } from 'states'
import ItemBox from 'components/ItemBox'

const FavoriteAnimal = () => {
  const [BookmarkList, setBookmarkList] = useRecoilState(bookMarkListState)
  return (
    <ul className={styles.resultContainer}>
      {BookmarkList.map((item) => (
        <ItemBox item={item} key={item.desertionNo} />
      ))}
    </ul>
  )
}

export default FavoriteAnimal
