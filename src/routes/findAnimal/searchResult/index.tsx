import styles from './searchResult.module.scss'
import useQuerySearch from '../hooks'
import ItemBox from './ItemBox'

const SearchResult = () => {
  const { data, isLoading } = useQuerySearch()

  return (
    <div>
      <ul className={styles.resultContainer}>
        {data?.item.map((item) => {
          return <ItemBox item={item} key={item.desertionNo} />
        })}
      </ul>
    </div>
  )
}
export default SearchResult
