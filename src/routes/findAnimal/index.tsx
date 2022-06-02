import { useMount } from 'react-use'
import { findSidoAPI, findAbandonmentAPI } from 'servies/openData'

const FindAnimal = () => {
  useMount(() => {
    const sido = findAbandonmentAPI.then((rep) => rep)
    console.log('sido:', sido)
  })

  return (
    <div>
      <h1>보호중 동물</h1>
      <form>
        <select name='City' id='City-select'>
          <option value='Seoul'>서울</option>
          <option value='Incheon'>인천</option>
          <option value='Busan'>부산</option>
          <option value='Daegu'>대구</option>
          <option value='Ulsan'>울산</option>
          <option value='Gwangju'>광주</option>
          <option value='Daejeon'>대전</option>
        </select>
        <div>
          <p>🐶</p>
          <p>🐱</p>
        </div>
      </form>
    </div>
  )
}

export default FindAnimal
