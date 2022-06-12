import styles from './searchResult.module.scss'

const NoResult = () => {
  return (
    <ul className={styles.resultContainer}>
      <li>검색 결과가 없습니다.</li>
    </ul>
  )
}
export default NoResult
