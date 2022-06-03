import { Route, Routes } from 'react-router-dom'
import styles from './routes.module.scss'
import Layout from './_shared/Layout'
import FindAnimal from './findAnimal'
import ProtectAnimal from './protectAnimal'
import FavoriteAnimal from './favoriteAnimal'

const App = () => {
  return (
    <div className={styles.app}>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<FindAnimal />} />
          <Route path='/protect' element={<ProtectAnimal />} />
          <Route path='/bookmark' element={<FavoriteAnimal />} />
        </Route>
        <Route path='*' element={<div>잘못된 접근입니다.</div>} />
      </Routes>
    </div>
  )
}

export default App
