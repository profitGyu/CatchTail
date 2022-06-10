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
  const [roadViewLat, setRoadViewLat] = useState<number | undefined>()
  const [roadViewLon, setRoadViewLon] = useState<number | undefined>()

  const setMapType = (e: MouseEvent<HTMLButtonElement>) => {
    const newMapTypeId = e.currentTarget.dataset.target as unknown as kakao.maps.MapTypeId
    setMapTypeId(newMapTypeId)
  }

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
        <Map
          className={styles.mapWrapper}
          center={{ lat: mapLat, lng: mapLon }}
          style={{ width: '100%', height: '100%' }}
          onClick={onClickMapRoadViewCoords}
        >
          <MapMarker position={{ lat: mapLat, lng: mapLon }}>
            <div style={{ color: '#000', width: '500px', textAlign: 'center', backgroundColor: 'transparent' }}>
              {locationName}
            </div>
          </MapMarker>
          {mapTypeId && <MapTypeId type={mapTypeId} />}
        </Map>
        {roadViewLat && roadViewLon && (
          <Roadview
            className={styles.roadViewWrapper}
            position={{
              lat: roadViewLat,
              lng: roadViewLon,
              radius: 50,
            }}
            style={{
              width: '100%',
              height: '450px',
            }}
          />
        )}

        <button type='button' id='btnRoadmap' data-target={kakao.maps.MapTypeId.TRAFFIC} onClick={setMapType}>
          교통정보
        </button>
        <button type='button' id='btnSkyview' data-target={kakao.maps.MapTypeId.ROADVIEW} onClick={setMapType}>
          로드뷰
        </button>
      </div>
    )
  return <div>좌표가 없네요</div>
}

export default KakaoMaps
