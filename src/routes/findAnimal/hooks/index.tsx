import { useInfiniteQuery, useQuery } from 'react-query'
import { useRecoilValue } from 'recoil'
import { SearchState } from 'routes/state'
import { findAbandonmentAPI } from 'servies/openData'

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
        console.log('endPage:', endPage)
        const result = endPage === lastPage.pageNo ? undefined : lastPage.pageNo + 1
        return result
      },
    }
  )

  return { data, isLoading, isError, fetchNextPage, isFetching, status }
}

export default useQuerySearch
