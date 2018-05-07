import React from 'react'
import KanyeYeezy from './kanyeYeezy.js'
import KanyeGrammy from './kanyeGrammy.js'
import KanyePersianRug from './kanyePersianRug.js'

const KanyeAssets = (props) =>{
  return(
    <div>
      <KanyeYeezy count={props.assets.yeezy} purchase={props.purchase} collect={props.collect}/>
      <KanyeGrammy count={props.assets.grammy} purchase={props.purchase} collect={props.collect}/>
      <KanyePersianRug count={props.assets.persianRug} purchase={props.purchase} collect={props.collect}/>
    </div>
  )
}

export default KanyeAssets
