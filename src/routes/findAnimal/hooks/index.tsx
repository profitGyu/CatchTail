import { useQuery } from 'react-query'
import { useRecoilValue } from 'recoil'
import { SearchState } from 'routes/state'
import { findAbandonmentAPI } from 'servies/openData'

const useQuerySearch = () => {
  const Searchvalue = useRecoilValue(SearchState)

  const { data, isLoading, isError } = useQuery(
    ['animal', Searchvalue],
    () =>
      findAbandonmentAPI(Searchvalue).then((rep) => {
        return rep.data.response.body.items
      }),
    {
      enabled: !!Searchvalue,
      staleTime: 2 * 60 * 1000,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  )

  return { data, isLoading, isError }
}

export default useQuerySearch
