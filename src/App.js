import './App.css';
import Semaforo from './Components/semaforo'
import Contador from './Components/contador'
import React, {useState,useEffect} from 'react'
import axios from 'axios'



function App() {

  //States
  const [active, setActive] = useState(false)
  const [active2, setActive2] = useState(false)
  const [active3, setActive3] = useState(true)
  const [seconds, setSeconds] = useState(5000)
  const [color, setColor] = useState(0)
  const [time, setTime] = useState(seconds/1000)


    
//Constantes

  var tiempo = time

  axios.get('http://localhost:3001/Semaforo').then(
    function (response) {
    if(response.data == "Me presione" && color ==0){
      console.log(response.data)
      window.location.reload()
    }
  }).catch(
    function (error) {
    console.log(error);
  });
  var segundos = seconds

  useEffect(()=>{
    setTimeout(()=>{
    if(color==0){
        setColor(1)
        setActive(true)
        setActive2(false)
        setActive3(false)
        setSeconds(5000)
    }
    else if(color==1){
        setColor(2)
        setActive2(true)
        setActive(false)
        setActive3(false)
        setSeconds(5000)

    }
    else if(color==2){
        setColor(0)
        setActive3(true)
        setActive2(false)
        setActive(false)
        setSeconds(3000)
        axios.post('http://localhost:3001/Bocina', {mensaje:"verde"}).then(
          function (response) {
          //console.log(response.data)
        }).catch(
          function (error) {
          console.log(error);
        });

    }

},segundos)

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
