import React from 'react'
import _ from 'lodash'

const SIZE = 30
    , HEIGHT = 2 * SIZE
    , WIDTH = Math.sqrt(3) / 2 * HEIGHT

export default class Tile extends React.Component {

  render() {
    const { x, y, data } = this.props

    let points = [
      [0          , .25 * HEIGHT]
    , [.5 * WIDTH , 0           ]
    , [WIDTH      , .25 * HEIGHT]
    , [WIDTH      , .75 * HEIGHT]
    , [.5 * WIDTH , HEIGHT      ]
    , [0          , .75 * HEIGHT]
    ]

    const origin = {
      x: x * WIDTH  + y % 2 * 1/2 * WIDTH
    , y: y * 3/4 * HEIGHT
    }

    points = _.map(points, function(tuple) { return (origin.x + tuple[0]) + ',' + (origin.y + tuple[1]) }).join(' ')

    const textStyle = {
      fontFamily: 'Consolas',
      fontSize  : '12px',
      fill      : '#ffffff',
      stroke    : '#000000'
    }

    return (
      <g>
        <polygon points={ points } fill="rgba(255,0,0,.3)" stroke="black"/>
        <text x={ origin.x + 1 * WIDTH / 3 } y={ origin.y + 1 * HEIGHT / 3 } style={ textStyle }>{ data.fidsi[0] }</text>
        <text x={ origin.x + 2 * WIDTH / 3 } y={ origin.y + 1 * HEIGHT / 3 } style={ textStyle }>{ data.fidsi[1] }</text>
        <text x={ origin.x + 1 * WIDTH / 3 } y={ origin.y + 2 * HEIGHT / 3 } style={ textStyle }>{ data.fidsi[2] }</text>
        <text x={ origin.x + 2 * WIDTH / 3 } y={ origin.y + 2 * HEIGHT / 3 } style={ textStyle }>{ data.fidsi[3] }</text>
        <text x={ origin.x + 1 * WIDTH / 2 } y={ origin.y + 4 * HEIGHT / 5 } style={ textStyle }>{ data.fidsi[4] }</text>
      </g>
    )
  }

}
