import { useLocation } from 'react-router-dom'

const DetailAnimal = () => {
  const { state } = useLocation()
  console.log(state)
  return <div>DetailAnimal</div>
}

export default DetailAnimal
