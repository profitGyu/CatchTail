import styles from './searchResult.module.scss'
import useQuerySearch from '../hooks'

import Skeleton from '../skeleton'

import ItemBox from 'components/ItemBox'
import { useInView } from 'react-intersection-observer'
import { useCallback, useEffect, useRef, UIEvent, useTransition, useState } from 'react'
import { useMount } from 'react-use'

const SearchResult = () => {
  const content = useRef<HTMLUListElement | null>(null)
  const [isPending, startTransition] = useTransition()
  const [test, setTest] = useState<number>()

  const [ref, inView] = useInView()

  const { data, isLoading, fetchNextPage, isFetching, status } = useQuerySearch()

  useMount(() => {
    content.current?.scrollTo({
      top: 2000,
      behavior: 'auto',
    })
  })

  useEffect(() => {
    if (inView && !isLoading) {
      fetchNextPage()
    }
  }, [fetchNextPage, inView, isLoading])

  const onScroll = useCallback(
    (e: UIEvent<HTMLElement>) => {
      startTransition(() => {
        setTest(e.currentTarget.scrollTop)
      })
      console.log(test)
      // if (content.current?.scrollTop) {
      //   console.log('content.current.scrollTop')
      // }
    },
    [ref, test]
  )

  if (status === 'error') return <div>에러 입니다.</div>
  if (isLoading)
    return (
      <ul className={styles.resultContainer}>
        {new Array(45).fill(1).map((_, i) => (
          <Skeleton key={`skeleton-${i}`} />
        ))}
      </ul>
    )
  if (data?.pages[0].totalCount === 0)
    return (
      <ul className={styles.resultContainer}>
        <li>검색 결과가 없습니다.</li>
      </ul>
    )

  return (
    <div className={styles.resultContainer}>
      <ul className={styles.resultContainer} onScroll={onScroll} ref={content}>
        {data?.pages.map((page) =>
          page.items.item.map((item) => {
            return <ItemBox item={item} key={item.desertionNo} />
          })
        )}
        {isFetching &&
          new Array(12).fill(1).map((_, i) => {
            // eslint-disable-next-line react/no-array-index-key
            return <Skeleton key={`skeleton-${i}`} />
          })}

        {!isLoading && <div style={{ width: '100%', height: '50px' }} ref={ref} />}
      </ul>
    </div>
  )
}
export default SearchResult
