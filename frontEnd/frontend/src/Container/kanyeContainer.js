import React from 'react'
import KanyeAssets from "../presentational/kanyeAssets.js"



class KanyeContainer extends React.Component{
constructor(){
super();
  this.state ={
  user: [],
  score: 50000,
  assets: {
    yeezy:0,
    grammy:0,
    persianRug:0
  },
  }
}
componentDidMount(){
  setInterval(()=>{this.collect(this.state.assets.yeezy,1)},1000)
  setInterval(()=>{this.collect(this.state.assets.grammy,10)},1000)
  setInterval(()=>{this.collect(this.state.assets.persianRug,100)},1000)
}
clickKanye = () =>{
this.setState({score: this.state.score + 1})
}

purchase = (cost,item)=>{
if (this.state.score > cost){
  this.setState({score: this.state.score - cost})
  this.setState({assets:{...this.state.assets,[item]: this.state.assets[item] + 1}})
  }
}
collect = (count,amount)=>{
this.setState({score: this.state.score + (count*amount)})
}

render(){
  return(

    <div>
      <KanyeAssets assets={this.state.assets} purchase={this.purchase} onClick={this.clickKanye} score={this.state.score} />

  </div>
  )
}
}



export default KanyeContainer
