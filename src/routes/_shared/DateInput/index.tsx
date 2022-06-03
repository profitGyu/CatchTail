import { useState } from 'react'
import DatePicker from 'react-datepicker'
import dayjs from 'dayjs'
import 'react-datepicker/dist/react-datepicker.css'
import { ko } from 'date-fns/esm/locale'
import { useSetRecoilState } from 'recoil'
import { DateRangeState } from 'routes/state'

const DataInput = () => {
  const today = new Date()

  const [startDate, setStartDate] = useState(new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1))
  const [endDate, setEndDate] = useState(today)

  const setDateRangevale = useSetRecoilState(DateRangeState)
  const handleChange = (dates: [Date, Date]) => {
    const [start, end] = dates

    setStartDate(start)
    setEndDate(end)
    const dateString = dates.map((date) => dayjs(date).format('YYYYMMDD'))
    setDateRangevale(dateString)
  }
  return (
    <DatePicker
      locale={ko}
      selected={startDate}
      dateFormat='yyyy년MM월dd일'
      minDate={new Date('2022-02-01')}
      maxDate={new Date()}
      onChange={handleChange}
      startDate={startDate}
      endDate={endDate}
      disabledKeyboardNavigation
      selectsRange
    />
  )
}
export default DataInput
