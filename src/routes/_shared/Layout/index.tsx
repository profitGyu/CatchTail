import styles from './layout.module.scss'

import { Outlet } from 'react-router-dom'

import Header from '../Header'
import { Waves } from 'assets/svgs'

const Layout = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <Header />
        <div className={styles.searchFormContainer}>
          <Waves className={styles.waves} />
        </div>
      </div>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
