import { useMemo } from 'react'
import store from 'storejs'
import { useRecoilState } from 'recoil'
import { bookMarkListState } from 'states'
import { Item } from 'types'
import _ from 'lodash'

const useBookmark = (obj: Item) => {
  const [BookmarkList, setBookmarkList] = useRecoilState(bookMarkListState)

  const isBookMark = useMemo(() => {
    return _.findIndex(BookmarkList, { desertionNo: obj.desertionNo }) !== -1
  }, [BookmarkList, obj.desertionNo])

  const onClickBookMarkRemoveHandle = () => {
    const newFavorites = BookmarkList.filter((item) => item.desertionNo !== obj.desertionNo)
    setBookmarkList(newFavorites)
    store.remove('BookmarkList')
    store.set('BookmarkList', newFavorites)
  }

  const onClickBookmarkAddHandle = () => {
    setBookmarkList((pre) => {
      return pre.concat(obj)
    })
    store.set('BookmarkList', BookmarkList.concat(obj))
  }

  return { isBookMark, onClickBookMarkRemoveHandle, onClickBookmarkAddHandle }
}

export default useBookmark
