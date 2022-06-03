import styles from './layout.module.scss'

import { Outlet } from 'react-router-dom'

import Header from '../Header'
import SearchForm from 'routes/findAnimal/searchForm'

const Layout = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <Header />
        <div className={styles.searchFormContainer}>
          <SearchForm />
        </div>
      </div>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
