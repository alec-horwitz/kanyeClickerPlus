import React from 'react'

const KanyePersianRug = (props) =>{
  let cost = 0
  let i = 0
  let rugRender = []
  let imgURL = "./images/persianRugBackdrop.png"
    if (props.count < 1){
       cost = 15000
    }
    else {
       cost = 15000 * Math.floor(Math.pow(1.75,props.count))
    }
    for (i; i<props.count; i++){
      rugRender.push(<img alt="" src="./images/persianRug.jpg"/>)
    }
    return(
      <div>
      <div style={{background: `url(${imgURL})`}}>
      <button onClick={()=>props.purchase(cost,"persianRug")}>{cost}</button>
      {rugRender}
      </div>
      </div>
    )

}

export default KanyePersianRug
