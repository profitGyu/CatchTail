import { useState } from 'react'
import styles from './header.module.scss'
import GNB from '../GNB'
import { Logo } from 'assets/svgs'

const Header = () => {
  const [clicked, setClicked] = useState(false)
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
