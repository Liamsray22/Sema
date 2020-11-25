import React, {useState,useEffect} from 'react'
import {Colors} from '../Data/colors.js'
import '../css/semaforo.css'

const Semaforo = (props)=>{

let img = ''
if(!props.activate){
img = Colors[3]
}

// const [time, setTime] = useState(0)

// useEffect(()=>{
// setInterval(()=>{setTime(time+1)},1000)

// },[time])

return(
    <div className="semaforo">
        <div className="items">
    <img src={img||Colors[props.color]} width="200px" height="200px"/>
    {/* <h1>{time}</h1> */}
    </div>
    </div>
)

}

export default Semaforo