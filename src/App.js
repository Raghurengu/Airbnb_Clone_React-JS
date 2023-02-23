import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import {Card} from './components/Card';
import data from './data';






function App() {
  const info = data.map(datas => {
    return(
      <Card 
        img={datas.img}
        rating={datas.rating}
        revcount={datas.revcount}
        country={datas.country}
        title={datas.title}
        price={datas.price}
        />
    )
  })
  

  return (
    <div>
        <Navbar />
        <Hero />
        {info}
    </div>
  )
}

export default App;
