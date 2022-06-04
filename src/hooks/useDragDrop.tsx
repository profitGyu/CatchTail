import { useRecoilState } from 'recoil'
import store from 'storejs'
import { bookMarkListState } from 'states'

const useDragDrop = () => {
  const [bookmark, setBookmark] = useRecoilState(bookMarkListState)

  const handleDragOver = (e: React.DragEvent<HTMLLIElement>) => {
    e.preventDefault()
  }

  const handleDragStart = (e: React.DragEvent<HTMLLIElement>) => {
    e.currentTarget.classList.add('grabbing')
    e.dataTransfer.effectAllowed = 'move'
    if (e.currentTarget.dataset.position) {
      const targetPosition = e.currentTarget.dataset.position.toString()
      e.dataTransfer.setData('text/html', targetPosition)
    }
  }

  const handleDragEnd = (e: React.DragEvent<HTMLLIElement>) => {
    e.currentTarget.classList.remove('grabbing')
    e.currentTarget.style.opacity = ''
  }

  const handleOnDrop = (e: React.DragEvent<HTMLLIElement>) => {
    e.preventDefault()
    const data = Number(e.dataTransfer.getData('text/html'))
    if (isNaN(data)) return
    const targetPosition = Number(e.currentTarget.dataset.position)
    const list = [...bookmark]
    list[data] = list.splice(targetPosition, 1, list[data])[0]
    setBookmark(list)
    store.set('BookmarkList', list)
  }

  return { handleDragStart, handleDragEnd, handleDragOver, handleOnDrop }
}

export default useDragDrop
