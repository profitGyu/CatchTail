import styles from './home.module.scss'
import Chart from './chart'

const Home = () => {
  return (
    <div>
      <section className={styles.chartSection}>
        안녕
        <Chart />
      </section>
      <section>안녕</section>
      <section>안녕</section>
    </div>
  )
}

export default Home
