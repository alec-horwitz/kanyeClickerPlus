import React from 'react'

const BuyRug = (props) => {
let cost = 0
if (props.count < .99){
   cost = 15000
}
else {
   cost = (15000 * Math.pow(1.15,props.count)).toFixed(0)
}
  return(
    <button onClick={()=>props.purchase(cost,"persianRug")}>Persian Rug:{cost}</button>
  )

}

export default BuyRug
