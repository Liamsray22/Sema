import './App.css';
import Semaforo from './Components/semaforo'
import React, {useState,useEffect} from 'react'

function App() {

  //States
  const [active, setActive] = useState(false)
  const [active2, setActive2] = useState(false)
  const [active3, setActive3] = useState(true)
  const [time, setTime] = useState(5)
  const [color, setColor] = useState(0)

//Constantes
  const tiempo = time

  useEffect(()=>{
    setTimeout(()=>{
      if(tiempo>1){
      setTime(tiempo - 1)
      }else{
        setTime(5)
      }
      
    },1000)
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
},[color,tiempo])

  return (
    <div className="App">

      <Semaforo time ={tiempo} color={color} activate={active3}/>
      <Semaforo time ={tiempo} color={color} activate={active}/>
      <Semaforo time ={tiempo} color={color} activate={active2}/>
    </div>
  );
}

export default App;
