import React from 'react'

const KanyeGrammy = (props) =>{

    let cost = 0
      if (props.count < 1){
         cost = 5000
      }
      else {
         cost = 5000 * Math.floor(Math.pow(1.75,props.count))
      }
      return(
        <div>
        <img alt="" onClick={()=>props.purchase(cost,"grammy")} src="./images/grammyBackdrop.png"/>
        {props.count}
        </div>
      )


}

export default KanyeGrammy
