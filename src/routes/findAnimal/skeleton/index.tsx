import styles from './skeleton.module.scss'

import React from 'react'

const Skeleton = () => {
  return (
    <li className={styles.skeletonItem}>
      <div>
        <div className={styles.skeletonImg} />
      </div>
      <div className={styles.skeletonInfo}>
        <p />
        <p />
        <p />
      </div>
    </li>
  )
}

export default Skeleton
