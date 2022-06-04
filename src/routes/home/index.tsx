import styles from './home.module.scss'

import TypeIt from 'typeit-react'

import BarChart from './chart'

const Home = () => {
  return (
    <div className={styles.main}>
      <div className={styles.home}>
        <section className={styles.intoSection}>
          <h1>사지않고 입양하는 문화를 만들기 위해 노력합니다.</h1>
          <br />
          <h2> Catch Tail은</h2>
          <h2>
            <TypeIt
              options={{
                speed: 50,
              }}
            >
              잊혀져가는 유기동물들을 세상에 알리고 따뜻한 손길을 전해주는 서비스 입니다.
            </TypeIt>
          </h2>
          <h4>유기동물 입양,실종 정보를 조회할 수 있습니다.</h4>
        </section>
      </div>
      <section className={styles.chartSection}>
        <BarChart />
        <div className={styles.textSection}>
          <h2>매년 전국적으로 10만 마리 이상의 유기동물들이 보호소로 구조되고 있습니다.</h2>
          <h4>안탑깝게도 이중 절반에 가까운 동물들은 다시 가족을 만나지 못합니다.</h4>
        </div>
      </section>
      <section>안녕</section>
    </div>
  )
}

export default Home
