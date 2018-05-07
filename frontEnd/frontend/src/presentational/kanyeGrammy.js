import React from 'react'

const KanyeGrammy = (props) =>{
  let i = 0
  let grammyRender = []
  let cost = 0
  let imgURL = "./images/grammyBackdrop.png"

      if (props.count < 1){
         cost = 5000
      }
      else {
         cost = 5000 * Math.floor(Math.pow(1.75,props.count))
      }
      for (i; i<props.count; i++){
        grammyRender.push(<img alt="" src="./images/grammy.jpg"/>)
      }
      return(
        <div>
        <div style={{background: `url(${imgURL})`}}>
        <button onClick={()=>props.purchase(cost,"grammy")}>{cost}</button>
        {grammyRender}
        </div>
        </div>
      )


}

export default KanyeGrammy
