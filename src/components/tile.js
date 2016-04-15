import React from 'react'
import _ from 'lodash'

const SIZE = 30
    , HEIGHT = 2 * SIZE
    , WIDTH = Math.sqrt(3) / 2 * HEIGHT

export default class Tile extends React.Component {

  render() {
    const { x, y } = this.props

    let points = [
      [0          , .25 * HEIGHT]
    , [.5 * WIDTH , 0           ]
    , [WIDTH      , .25 * HEIGHT]
    , [WIDTH      , .75 * HEIGHT]
    , [.5 * WIDTH , HEIGHT      ]
    , [0          , .75 * HEIGHT]
    ]

    points = _.map(points, function(tuple) { return (tuple[0] + x * WIDTH + y % 2 * 1/2 * WIDTH) + ',' + (tuple[1] + y * 3/4 * HEIGHT) }).join(' ')

    return (
      <g>
        <polygon points={ points } fill="red" stroke="blue"/>
      </g>
    )
  }

}
