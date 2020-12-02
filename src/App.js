import './App.css';
import Semaforo from './Components/semaforo'
import React, {useState,useEffect} from 'react'
//import PostMessage from './Components/PostMessage'
import axios from 'axios'



function App() {

  //States
  const [active, setActive] = useState(false)
  const [active2, setActive2] = useState(false)
  const [active3, setActive3] = useState(true)
  const [time, setTime] = useState(5)
  const [seconds, setSeconds] = useState(5000)
  const [color, setColor] = useState(0)
  const [mostrar, setMostrar] = useState(false)

//Constantes
  const segundos = seconds
  // setTime(segundos/1000)
  var tiempo = time
const handleClick = ()=>{
  axios.get('http://localhost:3001/Semaforo').then(
    function (response) {
    console.log(response.data);
  }).catch(
    function (error) {
  console.log(error);
});
}
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
        // setSeconds(3000)
    }
    else if(color==1){
        setColor(2)
        setActive2(true)
        setActive(false)
        setActive3(false)
        // setSeconds(5000)

    }
    else if(color==2){
        setColor(0)
        setActive3(true)
        setActive2(false)
        setActive(false)
        // setSeconds(8000)

    }

},segundos)
},[color,tiempo])





  return (
    <div className="App">
{/* {mostrar? <div>Hola</div> : <div>Adios</div>} */}
<button onClick={handleClick}></button>
      <Semaforo time ={tiempo} color={color} activate={active3}/>
      <Semaforo time ={tiempo} color={color} activate={active}/>
      <Semaforo time ={tiempo} color={color} activate={active2}/>
      {/* <PostMessage/> */}
    </div>
  );
}

export default App;
