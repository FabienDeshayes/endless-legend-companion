import React from 'react'
import _ from 'lodash'

const SIZE = 30
    , HEIGHT = 2 * SIZE
    , WIDTH = Math.sqrt(3) / 2 * HEIGHT
    , points = [
        [0          , .25 * HEIGHT]
      , [.5 * WIDTH , 0           ] // top
      , [WIDTH      , .25 * HEIGHT]
      , [WIDTH      , .75 * HEIGHT]
      , [.5 * WIDTH , HEIGHT      ] // bottom
      , [0          , .75 * HEIGHT]
      ]

export default class Tile extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { x, y, data, preselect } = this.props
        , origin = [
            x * WIDTH  + y * 1/2 * WIDTH // x coord
          , y * 3/4 * HEIGHT // y coord
          ]

    function translateToOrigin(coord, idx) {
      return origin[idx] + coord
    }

    const pointsStr = _
      .chain(points) // [[x1,y1],[x2,y2]]
      .map(_.partial(_.map, _, translateToOrigin)) // adds origin x/y, [[x1',y1'],[x2',y2']]
      .map(_.partial(_.join, _, ',')) // transform coord to string, ["x1,y1","x2,y2"]
      .join(' ') // add all points, "x1,y1 x2,y2"
      .value()

    const textStyle = {
      fontFamily: 'Consolas',
      fontSize  : '12px',
      fill      : '#ffffff',
      stroke    : '#000000'
    }
    const polygonStyle = {
      fill    : data.preselected ? 'rgba(255,0,0,.5)' : 'rgba(255,0,0,.3)',
      stroke  : 'black'
    }
    const groupStyle = {
      pointerEvents: 'all'
    }

    return (
      <g style={ groupStyle } onMouseOver={ preselect }>
        <polygon class="tile-background" points={ pointsStr } style={ polygonStyle }/>
        <text x={ origin[0] + 1 * WIDTH / 3 } y={ origin[1] + 1 * HEIGHT / 3 } style={ textStyle }>{ data.fidsi[0] }</text>
        <text x={ origin[0] + 2 * WIDTH / 3 } y={ origin[1] + 1 * HEIGHT / 3 } style={ textStyle }>{ data.fidsi[1] }</text>
        <text x={ origin[0] + 1 * WIDTH / 3 } y={ origin[1] + 2 * HEIGHT / 3 } style={ textStyle }>{ data.fidsi[2] }</text>
        <text x={ origin[0] + 2 * WIDTH / 3 } y={ origin[1] + 2 * HEIGHT / 3 } style={ textStyle }>{ data.fidsi[3] }</text>
        <text x={ origin[0] + 1 * WIDTH / 2 } y={ origin[1] + 4 * HEIGHT / 5 } style={ textStyle }>{ data.fidsi[4] }</text>
      </g>
    )
  }

}
