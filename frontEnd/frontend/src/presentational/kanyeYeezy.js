import React from 'react'

const KanyeYeezy = (props) =>{
let cost = 0
let yeezyRender = []
let i = 0
let imgURL = "./images/yeezyBackdrop.png"
  if (props.count < 1){
     cost = 50
  }
  else {
     cost = 50 * Math.floor(Math.pow(1.75,props.count))
  }
for (i; i<props.count; i++){
  yeezyRender.push(<img alt="" src="./images/yeezy.jpg"/>)
}
  return(
    <div>
    <div style={{background: `url(${imgURL})`}}>
    <button onClick={()=>props.purchase(cost,"yeezy")}>{cost}</button>
    {yeezyRender}
    </div>
    </div>
  )
}

export default KanyeYeezy
