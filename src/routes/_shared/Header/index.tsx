import styles from './header.module.scss'

import store from 'storejs'

import GNB from '../GNB'
import { useMount } from 'react-use'
import { useSetRecoilState } from 'recoil'
import { bookMarkListState } from 'states'

const Header = () => {
  const setBookmarkList = useSetRecoilState(bookMarkListState)
  useMount(() => {
    if (store.get('BookmarkList') !== undefined) {
      setBookmarkList(store.get('BookmarkList'))
    }
  })
  return (
    <div className={styles.header}>
      <div className={styles.logo}>Catch Tail</div>
      <div className={styles.navContainer}>
        <GNB />
      </div>
    </div>
  )
}

export default Header
