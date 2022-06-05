import styles from './searchResult.module.scss'
import useQuerySearch from '../hooks'

import Skeleton from '../skeleton'

import ItemBox from 'components/ItemBox'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { isEmpty } from 'lodash'

const SearchResult = () => {
  const [ref, inView] = useInView()
  const { data, isLoading, fetchNextPage, isFetching, status } = useQuerySearch()

  useEffect(() => {
    if (inView && !isLoading) {
      fetchNextPage()
    }
  }, [fetchNextPage, inView, isLoading])

  if (status === 'error') return <div>에러 입니다.</div>
  return (
    <div>
      <ul className={styles.resultContainer}>
        {isLoading
          ? new Array(45).fill(1).map((_, i) => {
              // eslint-disable-next-line react/no-array-index-key
              return <Skeleton key={`skeleton-${i}`} />
            })
          : data?.pages.map((page) => {
              if (isEmpty(page.items.item))
                return (
                  <div>
                    <li>검색 결과가 없습니다.</li>
                  </div>
                )
              return page.items.item.map((item) => {
                return <ItemBox item={item} key={item.desertionNo} />
              })
            })}
        {isFetching &&
          new Array(45).fill(1).map((_, i) => {
            // eslint-disable-next-line react/no-array-index-key
            return <Skeleton key={`skeleton-${i}`} />
          })}
        {!isLoading && <div style={{ width: '100%', height: '50px' }} ref={ref} />}
      </ul>
    </div>
  )
}
export default SearchResult
