import React from 'react'
import KanyeYeezy from './kanyeYeezy.js'
import KanyeGrammy from './kanyeGrammy.js'
import KanyePersianRug from './kanyePersianRug.js'
import BuyYeezy from './buyYeezy.js'
import BuyGrammy from './buyGrammy.js'
import BuyRug from './buyRug.js'
import KanyeClickHead from './kanyeClickHead'

const KanyeAssets = (props) =>{
  return(
    <div>
      <div className="container">
      <div className="row">

        <div className="col-md-4">
          <KanyeClickHead onClick={props.onClick} score={props.score}/>
        </div>
        <div className="col-md-4">
          <KanyeYeezy count={props.assets.yeezy}/>
          <KanyeGrammy count={props.assets.grammy}/>
          <KanyePersianRug count={props.assets.persianRug}/>
        </div>
        <div className="col-md-4">
          <BuyYeezy count={props.assets.yeezy} purchase={props.purchase}/>
          <BuyGrammy count={props.assets.grammy} purchase={props.purchase} />
          <BuyRug count={props.assets.persianRug} purchase={props.purchase}/>
        </div>
      </div>
      </div>

    </div>
  )
}

export default KanyeAssets
