import styles from './searchResult.module.scss'

interface IText {
  text: string
}

const NoResult = ({ text }: IText) => {
  return (
    <ul className={styles.noResultContainer}>
      <li>{text}</li>
    </ul>
  )
}
export default NoResult
