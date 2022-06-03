import styles from './searchResult.module.scss'
import useQuerySearch from '../hooks'
import ItemBox from './ItemBox'
import Skeleton from '../skeleton'

const SearchResult = () => {
  const { data, isLoading } = useQuerySearch()
  return (
    <div>
      <ul className={styles.resultContainer}>
        {isLoading
          ? new Array(30).fill(1).map((_, i) => {
              // eslint-disable-next-line react/no-array-index-key
              return <Skeleton key={`skeleton-${i}`} />
            })
          : data?.item.map((item) => {
              return <ItemBox item={item} key={item.desertionNo} />
            })}
      </ul>
    </div>
  )
}
export default SearchResult
