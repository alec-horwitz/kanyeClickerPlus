import React from 'react'

const KanyeGrammy = (props) =>{
  let i = 0
  let grammyRender = []
  let imgURL = "./images/grammyBackdrop.png"

      for (i; i<props.count; i++){
        grammyRender.push(<img alt="" src="./images/grammy.png"/>)
      }
      return(
        <div>
        <div style={{background: `url(${imgURL})`}}>
        {grammyRender}
        </div>
        </div>
      )


}

export default KanyeGrammy
