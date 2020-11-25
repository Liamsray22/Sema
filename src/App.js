import './App.css';
import Semaforo from './Components/semaforo'
import React, {useState,useEffect} from 'react'

function App() {
  const [active, setActive] = useState(false)
  const [active2, setActive2] = useState(false)
  const [active3, setActive3] = useState(true)
  const [color, setColor] = useState(0)

  useEffect(()=>{
    setTimeout(()=>{
    if(color==0){
        setColor(1)
        setActive(true)
        setActive2(false)
        setActive3(false)
    }
    else if(color==1){
        setColor(2)
        setActive2(true)
        setActive(false)
        setActive3(false)

    }
    else if(color==2){
        setColor(0)
        setActive3(true)
        setActive2(false)
        setActive(false)

    }

},5000)
},[color])

  return (
    <div className="App">

      <Semaforo color={color} activate={active3}/>
      <Semaforo color={color} activate={active}/>
      <Semaforo color={color} activate={active2}/>
    </div>
  );
}

export default App;
