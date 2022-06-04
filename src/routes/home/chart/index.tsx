import styles from './chart.module.scss'
import { DATALIST, ABANDONED_ANIMAL_TOTAL } from 'assets/data/chart_data'

import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryLabel,
  VictoryLegend,
  VictoryLine,
  VictoryStack,
  VictoryTooltip,
} from 'victory'

const CustomTooltip = () => {
  return (
    <VictoryTooltip
      flyoutHeight={40}
      flyoutWidth={100}
      flyoutPadding={25}
      cornerRadius={5}
      style={{ fill: '#fefefe', fontSize: 16, textAnchor: 'middle' }}
      flyoutStyle={{
        stroke: '#b0c48d',
        fill: '#b0c48d',
        margin: 10,
      }}
    />
  )
}

const BarChart = () => {
  const tooltip = CustomTooltip()
  const TICK_STYLE = {
    axis: { stroke: 'transparent' },
    tickLabels: { fontSize: 16, fontFamily: 'Roboto', fill: '#2f4858' },
    ticks: { stroke: 'none' },
    grid: { stroke: 'none' },
  }

  return (
    <div className={styles.barChart}>
      <h1>최근 5년간 국내 유기동물 발생 현황</h1>
      <VictoryChart domainPadding={{ x: [80, 0], y: [100, 10] }} width={600} height={400}>
        <VictoryAxis
          tickValues={[2022, 2021, 2020, 2019, 2018]}
          // tickLabelComponent={<VictoryLabel dx={40} />}
          style={TICK_STYLE}
        />
        <VictoryAxis
          dependentAxis
          tickLabelComponent={<VictoryLabel dx={60} />}
          tickFormat={(x) => `${x.toLocaleString()}마리`}
          style={TICK_STYLE}
        />
        <VictoryLine
          data={ABANDONED_ANIMAL_TOTAL}
          x='yaer'
          y='count'
          labels={({ datum }) => datum.count.toLocaleString()}
          style={{
            data: { stroke: 'transparent' },
            parent: { border: '1px solid #ccc' },
          }}
        />
        <VictoryStack colorScale={['#f4dc9c', '#b0c48d', '#9e9e9e']}>
          {DATALIST.map(({ id, data }) => {
            return (
              <VictoryBar
                key={`${id}-${data}`}
                data={data}
                x='yaer'
                y='count'
                labels={({ datum }) => {
                  const total = datum.count.toLocaleString()
                  return `${total}마리`
                }}
                labelComponent={tooltip}
                cornerRadius={{ top: id === 'ets' ? 3 : 0 }}
              />
            )
          })}
        </VictoryStack>
        <VictoryLegend
          x={200}
          y={370}
          centerTitle
          orientation='horizontal'
          rowGutter={{ top: 10, bottom: 0 }}
          gutter={50}
          colorScale={['#f4dc9c', '#b0c48d', '#9e9e9e']}
          style={{ title: { fontSize: 20 }, labels: { fill: '#2f4858', fontWeight: 700 } }}
          data={[{ name: '개' }, { name: '고양이' }, { name: '기타' }]}
        />
      </VictoryChart>
      <p>*2022년 6월4일까지의 자료입니다.</p>
    </div>
  )
}

export default BarChart
