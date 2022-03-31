import React from 'react'

export default function Card({broker}) {
    // just add a card and  see weather the data is feched for post codes
  return (
  <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5" >
    <img src={broker.profilePicture} class="br-100 h4 w4 dib ba b--black-05 pa2"/>
    <h6 class="f3 mb2">{broker.name}</h6>
    <div class="dt w-100 mt1">
      <div class="dtc">
        <h1 class="f4 mv0">{broker.rating}</h1>
      </div>
      <div class="dtc tr">
        <h2 class="f4 mv0">{broker.rating}</h2>
      </div>
      <div class="dtc tr">
        <h2 class="f4 mv0">{broker.reviewCount}</h2>
      </div>
    </div>
  </div>

  )
}
