import React, {useState,useEffect} from 'react'
import {Colors} from '../Data/colors.js'
import '../css/semaforo.css'

const Semaforo = (props)=>{

let img = ''
if(!props.activate){
img = Colors[3]
}
return(
    <div className="semaforo">
        <div className="foto">
    <img src={img||Colors[props.color]} width="200px" height="200px"/>
    </div>
    </div>
)

}

export default Semaforo