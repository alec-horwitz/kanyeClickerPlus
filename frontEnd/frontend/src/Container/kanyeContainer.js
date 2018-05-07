import React from 'react'
import KanyeClickHead from "../presentational/kanyeClickHead.js"
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
  setInterval(()=>{this.collect(this.state.assets.yeezy,50)},1000)
  setInterval(()=>{this.collect(this.state.assets.grammy,1000)},1000)
  setInterval(()=>{this.collect(this.state.assets.persianRug,10000)},1000)
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
  <label>Ye:</label>{this.state.score}
  <KanyeClickHead onClick={this.clickKanye}/>
  <KanyeAssets assets={this.state.assets} purchase={this.purchase} collect={this.collect}/>
  </div>
  )
}
}



export default KanyeContainer
