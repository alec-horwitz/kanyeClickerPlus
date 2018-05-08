import React from 'react'

const KanyeClickHead = (props) => {
return(
<div className="col">
<label>Ye:</label>{props.score}
<img onClick={()=>{props.onClick()}} alt="" src="/images/kanyeClickHead.png"></img>
</div>
)
}

export default KanyeClickHead;
