import React from 'react'

const KanyeYeezy = (props) =>{
let cost = 0
  if (props.count < 1){
     cost = 50
  }
  else {
     cost = 50 * Math.floor(Math.pow(1.75,props.count))
  }

  return(
    <div>
    <img alt="" onClick={()=>props.purchase(cost,"yeezy")} src="./images/yeezyBackdrop.png"/>
    {props.count}
    </div>
  )
}

export default KanyeYeezy
