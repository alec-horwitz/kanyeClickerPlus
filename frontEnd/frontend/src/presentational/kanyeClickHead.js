import React from 'react'

const KanyeClickHead = (props) => {
return(
<img onClick={()=>{props.onClick()}} alt="" src="/images/kanyeClickHead.png"></img>
)
}

export default KanyeClickHead;
