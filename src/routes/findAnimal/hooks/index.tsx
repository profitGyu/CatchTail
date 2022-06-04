import { useInfiniteQuery, useQuery } from 'react-query'
import { useRecoilValue } from 'recoil'
import { SearchState } from 'routes/state'
import { findAbandonmentAPI } from 'servies/openData'

const useQuerySearch = () => {
  const Searchvalue = useRecoilValue(SearchState)

  const { data, isLoading, isError, fetchNextPage, isFetching } = useInfiniteQuery(
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
      getPreviousPageParam: (firstPage) => firstPage.pageNo - 1,
      getNextPageParam: (lastPage) => lastPage.pageNo + 1,
    }
  )

  return { data, isLoading, isError, fetchNextPage, isFetching }
}

export default useQuerySearch
