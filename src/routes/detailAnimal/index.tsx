import styles from './detailAnimal.module.scss'

import { Item } from 'types'

import { useLocation } from 'react-router-dom'

import useBookmark from 'hooks/useBookMark'

import Button from 'components/Button'

import KakaoMaps from 'components/Kakao/KakaoMap'

const DetailAnimal = () => {
  const state = useLocation()
  const info: Item = state.state as Item

  const { isBookMark, onClickBookMarkRemoveHandle, onClickBookmarkAddHandle } = useBookmark(info)

  // const [BookmarkList, setBookmarkList] = useRecoilState(bookMarkListState)

  // const isBookMark = useMemo(() => {
  //   return _.findIndex(BookmarkList, { desertionNo: info.desertionNo }) !== -1
  // }, [BookmarkList, info.desertionNo])

  // const onClickBookMarkRemoveHandle = () => {
  //   const newFavorites = BookmarkList.filter((item) => item.desertionNo !== info.desertionNo)
  //   setBookmarkList(newFavorites)
  //   store.remove('BookmarkList')
  //   store.set('BookmarkList', newFavorites)
  // }

  // const onClickBookmarkAddHandle = () => {
  //   setBookmarkList((pre) => {
  //     return pre.concat(info)
  //   })
  //   store.set('BookmarkList', BookmarkList.concat(info))
  // }

  return (
    <div className={styles.detailAnimal}>
      <div className={styles.imgContainer}>
        <div className={styles.imgWapper}>
          <img src={info.popfile.replace('http', 'https')} alt='유기동물 사진' />
        </div>
        {isBookMark ? (
          <Button size='large' onClick={onClickBookMarkRemoveHandle}>
            친구 목록에서 제거
          </Button>
        ) : (
          <Button size='large' onClick={onClickBookmarkAddHandle}>
            친구 목록에 담기
          </Button>
        )}
      </div>
      <div className={styles.textContainer}>
        <section className={styles.animalInfo}>
          <h1>동물 정보</h1>
          <table>
            <colgroup>
              <col className={styles.header} />
              <col className={styles.last} />
            </colgroup>
            <tbody>
              <tr>
                <th>공고번호</th>
                <td>{info.noticeNo}</td>
              </tr>
              <tr>
                <th>나이/ 몸무게</th>
                <td>{info.age}</td>
              </tr>
              <tr>
                <th>성별</th>
                <td>{info.sexCd === 'M' ? '남아' : '여아'}</td>
              </tr>
              <tr>
                <th>상태</th>
                <td>{info.processState}</td>
              </tr>
              <tr>
                <th>종</th>
                <td>{info.kindCd.replace(/\[.*?\] /g, '')}</td>
              </tr>
              <tr>
                <th>특징</th>
                <td>{info.specialMark}</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className={styles.shelterInfo}>
          <h1>보호소 정보</h1>
          <table>
            <colgroup>
              <col className={styles.header} />
              <col className={styles.last} />
            </colgroup>
            <tbody>
              <tr>
                <th>보호소</th>
                <td>{info.careNm}</td>
              </tr>
              <tr>
                <th>보호소 주소</th>
                <td>{info.careAddr}</td>
              </tr>
              <tr>
                <th>보호소 번호</th>
                <td>{info.careTel}</td>
              </tr>
              <tr>
                <th>담당 보호사</th>
                <td>{info.chargeNm}</td>
              </tr>
              <tr>
                <th>구조위치</th>
                <td>{info.noticeNo}</td>
              </tr>
              <tr>
                <th>접수일시</th>
                <td>{info.happenDt}</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
      <section>
        <KakaoMaps locationName={info.careNm} />
      </section>
    </div>
  )
}

export default DetailAnimal
