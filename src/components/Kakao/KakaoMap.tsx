import { MouseEvent, useEffect, useState } from 'react'
import { Map, MapMarker, MapTypeId, Roadview } from 'react-kakao-maps-sdk'

import styles from './kakaoMap.module.scss'

// https://react-kakao-maps-sdk.jaeseokim.dev/docs/sample/roadview/basicRoadview2

interface IKakaoProp {
  locationName: string
}

const KakaoMaps = ({ locationName }: IKakaoProp) => {
  const [mapTypeId, setMapTypeId] = useState<kakao.maps.MapTypeId>()
  const [mapLat, setMapLat] = useState<number>()
  const [mapLon, setMapLon] = useState<number>()
  const [roadIsOpen, setRoadIsOpen] = useState(false)
  const [roadViewLat, setRoadViewLat] = useState<number | undefined>()
  const [roadViewLon, setRoadViewLon] = useState<number | undefined>()

  const onClickMapRoadViewCoords = (_: kakao.maps.Map, event: kakao.maps.event.MouseEvent) => {
    setRoadViewLat(event.latLng?.getLat() ?? 0)
    setRoadViewLon(event.latLng?.getLng() ?? 0)
  }

  useEffect(() => {
    const ps = new kakao.maps.services.Places()

    ps.keywordSearch(locationName, (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        setMapLat(parseFloat(data[0].y))
        setMapLon(parseFloat(data[0].x))
      }
    })
  }, [locationName])

  if (mapLat && mapLon)
    return (
      <div className={styles.maps}>
        <div className={styles.mapWrapper}>
          <Map className={styles.map} center={{ lat: mapLat, lng: mapLon }} onClick={onClickMapRoadViewCoords}>
            <MapMarker position={{ lat: mapLat, lng: mapLon }}>
              <div style={{ padding: '5px', color: '#000' }}>
                Hello World! <br />
                <a
                  href='https://map.kakao.com/link/map/Hello World!,33.450701,126.570667'
                  style={{ color: 'blue' }}
                  target='_blank'
                  rel='noreferrer'
                >
                  큰지도보기
                </a>{' '}
                <a
                  href='https://map.kakao.com/link/to/Hello World!,33.450701,126.570667'
                  style={{ color: 'blue' }}
                  target='_blank'
                  rel='noreferrer'
                >
                  길찾기
                </a>
              </div>
            </MapMarker>
          </Map>
        </div>
        {roadViewLat && roadViewLon && (
          <div className={styles.roadViewWrapper}>
            <Roadview
              className={styles.roadView}
              position={{
                lat: roadViewLat,
                lng: roadViewLon,
                radius: 50,
              }}
            />
          </div>
        )}
      </div>
    )
  return <div>좌표가 없네요</div>
}

export default KakaoMaps
