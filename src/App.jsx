import './App.css'
import Card from './components/Card/Card'

function App() {
  const item1 = {
    name: 'Rick Sanchez',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
  }

  const item2 = {
    name: 'Morty Smith',
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
  }

  const item3 = {
    name: 'Summer Smith',
    image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg'
  }

  return (
    <>
      <Card item={item1} />
      <Card item={item2} />
      <Card item={item3} />
    </>
  )
}

export default App
