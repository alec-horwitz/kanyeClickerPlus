import React from 'react'

const KanyePersianRug = (props) =>{
  let cost = 0
    if (props.count < 1){
       cost = 15000
    }
    else {
       cost = 15000 * Math.floor(Math.pow(1.75,props.count))
    }
    return(
      <div>
      <img alt="" onClick={()=>props.purchase(cost,"persianRug")} src="./images/persianRugBackdrop.png"/>
      {props.count}
      </div>
    )
}

export default KanyePersianRug
