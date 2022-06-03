import styles from './findLayout.module.scss'

import { Outlet } from 'react-router-dom'

import SearchForm from 'routes/findAnimal/searchForm'
import { Waves } from 'assets/svgs'
import Header from 'routes/_shared/Header'

const FindLayout = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <Header />
        <div className={styles.searchFormContainer}>
          <SearchForm />
          <Waves className={styles.waves} />
        </div>
      </div>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  )
}

export default FindLayout
