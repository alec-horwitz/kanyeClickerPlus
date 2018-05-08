import React from 'react'

const KanyeYeezy = (props) =>{
let yeezyRender = []
let i = 0
let imgURL = "./images/yeezyBackdrop.png"

for (i; i<props.count; i++){
  yeezyRender.push(<img alt="" src="./images/yeezy.png"/>)
}
  return(
    <div>
      <div style={{background: `url(${imgURL})`}}>
      {yeezyRender}
      </div>
    </div>
  )
}

export default KanyeYeezy
