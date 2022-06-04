import styles from './home.module.scss'
import BarChart from './chart'

const Home = () => {
  return (
    <div className={styles.home}>
      <section className={styles.chartSection}>
        <BarChart />
      </section>
      <section>안녕</section>
      <section>안녕</section>
    </div>
  )
}

export default Home
