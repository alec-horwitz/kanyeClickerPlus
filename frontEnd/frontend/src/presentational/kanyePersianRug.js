import React from 'react'

const KanyePersianRug = (props) =>{
  let i = 0
  let rugRender = []
  let imgURL = "./images/persianRugBackdrop.png"

    for (i; i<props.count; i++){
      rugRender.push(<img alt="" src="./images/persianRug.png"/>)
    }
    return(
      <div>
      <div style={{background: `url(${imgURL})`}}>
      {rugRender}
      </div>
      </div>
    )

}

export default KanyePersianRug
