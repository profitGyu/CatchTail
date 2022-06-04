import { useInfiniteQuery } from 'react-query'
import { findAbandonmentAPI } from 'servies/openData'

import { useRecoilValue } from 'recoil'
import { SearchState } from 'routes/state'

const useQuerySearch = () => {
  const Searchvalue = useRecoilValue(SearchState)

  const { status, data, isLoading, isError, fetchNextPage, isFetching } = useInfiniteQuery(
    ['animal', Searchvalue],
    ({ pageParam = 1 }) =>
      findAbandonmentAPI(Searchvalue, pageParam).then((rep) => {
        return rep.data.response.body
      }),
    {
      enabled: !!Searchvalue,
      staleTime: 2 * 60 * 1000,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: true,
      retry: 1,
      // getPreviousPageParam: (firstPage) => firstPage.pageNo - 1,
      getNextPageParam: (lastPage) => {
        const endPage =
          lastPage.totalCount > lastPage.numOfRows ? Math.floor(lastPage.totalCount / lastPage.numOfRows) : 1
        const result = endPage === lastPage.pageNo ? undefined : lastPage.pageNo + 1
        return result
      },
    }
  )

  return { data, isLoading, isError, fetchNextPage, isFetching, status }
}

export default useQuerySearch
