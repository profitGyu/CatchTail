import styles from './gnb.module.scss'
import { cx } from 'styles'
import { NavLink } from 'react-router-dom'

import { NAVLIST } from 'model'

const GNB = () => {
  return (
    <nav>
      <ul className={styles.gnbList}>
        {NAVLIST.map((item) => {
          return (
            <li key={item.id}>
              <NavLink to={item.path} className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
                {item.title}
                <div className={styles.expandBubble} />
              </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
export default GNB
