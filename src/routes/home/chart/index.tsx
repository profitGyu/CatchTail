import DATALIST from 'assets/data/chart_data'
import { VictoryAxis, VictoryBar, VictoryChart, VictoryStack, VictoryTheme, VictoryTooltip } from 'victory'

const CustomTooltip = () => {
  return (
    <VictoryTooltip
      flyoutHeight={40}
      flyoutWidth={100}
      flyoutPadding={25}
      cornerRadius={5}
      style={{ fill: '#2f4858', fontSize: 20, textAnchor: 'middle' }}
      flyoutStyle={{
        stroke: '#3a474e',
        fill: '#fefefe',
        margin: 10,
      }}
    />
  )
}

const Chart = () => {
  const tooltip = CustomTooltip()
  return (
    <div>
      <VictoryChart domainPadding={{ x: [30, 30], y: [0, 10] }} width={500} height={300}>
        <VictoryAxis tickValues={[2022, 2021, 2020, 2019, 2018]} />
        <VictoryAxis dependentAxis tickFormat={(x) => `${x}`} />
        <VictoryStack colorScale={['#f4dc9c', '#b0c48d', '#9e9e9e']}>
          {DATALIST.map(({ id, data }) => {
            return (
              <VictoryBar
                key={`${id}-${data}`}
                data={data}
                x='yaer'
                y='count'
                labels={({ datum }) => {
                  return `${datum.count}마리`
                }}
                labelComponent={tooltip}
                cornerRadius={{ top: id === 'ets' ? 3 : 0 }}
              />
            )
          })}
        </VictoryStack>
      </VictoryChart>
    </div>
  )
}

export default Chart
