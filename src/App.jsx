import './App.css'
import Header from './Header'
import Card from './Card'
import data from "./assets/data"


function App() {
 const cards = data.map((place) => 
 <Card key={place.title} info={place} />)

  return (
    <div className='container'>
      <Header />
      {cards}
    </div>
  )
}

export default App
