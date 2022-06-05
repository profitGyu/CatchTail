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
    tickLabels: { fontSize: 16, fontFamily: 'Roboto', fill: '#2f4858', padding: 10 },
  }

  return (
    <div className={styles.barChart}>
      <VictoryChart domainPadding={{ x: [90, 0], y: [30, 0] }} width={600} height={400} padding={60}>
        <VictoryLabel
          x={25}
          y={15}
          style={{ fontFamily: 'inherit', fontSize: '28px', fontWeight: 'bold', fill: '#2f4858' }}
          text='최근 5년간 국내 유기동물 발생 현황'
        />
        <VictoryAxis tickValues={[2022, 2021, 2020, 2019, 2018]} style={TICK_STYLE} />
        <VictoryAxis
          dependentAxis
          tickLabelComponent={<VictoryLabel dx={60} />}
          tickFormat={(x) => `${x.toLocaleString()}`}
          style={TICK_STYLE}
        />
        <VictoryLine
          data={ABANDONED_ANIMAL_TOTAL}
          x='yaer'
          y='count'
          labels={({ datum }) => datum.count.toLocaleString()}
          animate={{ duration: 1000, easing: 'bounce' }}
          style={{
            data: { stroke: 'transparent' },
            parent: { border: '1px solid #ccc' },
            labels: { fill: '#2f4858' },
          }}
        />
        <VictoryStack colorScale={['#f4dc9c', '#b0c48d', '#9e9e9e']}>
          {DATALIST.map(({ id, data }) => {
            return (
              <VictoryBar
                animate={{ duration: 1000, easing: 'bounce' }}
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
        <VictoryLabel
          x={200}
          y={450}
          style={{ fontFamily: 'inherit', fontSize: '12px', fill: '#a0a0a0' }}
          text='*2022년 6월4일까지의 자료입니다.'
        />
      </VictoryChart>
    </div>
  )
}

export default BarChart
