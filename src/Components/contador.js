import React, {useState} from 'react'
import '../css/contador.css'
const Contador =({timee})=>{

const [time, setTime] = useState(timee)
var tiempo = time
var timeee = timee
setTimeout(()=>{
  if(tiempo>1){
  setTime(tiempo - 1)
  }else{
    setTime(timeee)
  }
  
},1000)

    return(
        <div className="texto">
    <h1>{time}</h1>
    </div>
    )

}

export default Contador