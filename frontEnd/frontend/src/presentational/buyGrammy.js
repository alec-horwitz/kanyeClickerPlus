import React from 'react'

const BuyGrammy = (props) =>{
  let cost = 0
    if (props.count < .99){
       cost = 5000
    }
    else {
       cost = (5000 * Math.pow(1.15,props.count)).toFixed(0)
    }
  return(
  <button onClick={()=>props.purchase(cost,"grammy")}>Grammy: {cost}</button>
  )

}

export default BuyGrammy
