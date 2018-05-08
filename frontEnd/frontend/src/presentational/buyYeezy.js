import React from 'react'

const BuyYeezy = (props) =>{
  let cost = 0
  if (props.count < .99){
     cost = 50
  }
  else {
     cost = (50 * Math.pow(1.15,props.count)).toFixed(0)
  }
  return(
    <button onClick={()=>props.purchase(cost,"yeezy")}>Yeezy: {cost}</button>
  )
}

export default BuyYeezy
