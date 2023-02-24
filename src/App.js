import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import {Card} from './components/Card';
import data from './data';






function App() {

  const info = data.map(datas => {
    return(
      <Card 
       {...datas}
        />
    )
  })
  

  return (
    <div>
        <Navbar />
        <Hero />
        <div className='cardlist'>
        {info}
        </div>
    </div>
  )
}

export default App;
