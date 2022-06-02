import { Route, Routes } from 'react-router-dom'
import styles from './routes.module.scss'
import Layout from './_shared/Layout'
import FindAnimal from './findAnimal'

const App = () => {
  return (
    <div className={styles.app}>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<FindAnimal />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
