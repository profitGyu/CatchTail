import { useQuery } from 'react-query'
import { useRecoilValue } from 'recoil'
import { SearchState } from 'routes/state'
import { findAbandonmentAPI } from 'servies/openData'

const useQuerySearch = () => {
  const Searchvalue = useRecoilValue(SearchState)

  const { data, isLoading } = useQuery(
    ['animal', Searchvalue],
    () =>
      findAbandonmentAPI(Searchvalue).then((rep) => {
        return rep.data.response.body.items
      }),
    {
      enabled: !!Searchvalue,
      refetchOnWindowFocus: false,
      staleTime: 2 * 60 * 1000,
      retry: 2,
    }
  )

  return { data, isLoading }
}

export default useQuerySearch
