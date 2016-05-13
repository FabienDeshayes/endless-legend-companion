import React from 'react'
import _ from 'lodash'

import config from '../config/config.json'

const SIZE = config.tiles.tileSize
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
    const { q, r, data, select, preselect, removePreselect } = this.props
        , origin = [
            config.map.padding + q * WIDTH  + r * 1/2 * WIDTH // x coord
          , config.map.padding + r * 3/4 * HEIGHT // y coord
          ]

    function translateToOrigin(coord, idx) {
      return origin[idx] + coord
    }

    function getFill() {
      if (data.selected) {
        return 'rgba(255,0,0,.9)'
      }
      if (data.adjacentToSelected) {
        return 'rgba(255,0,0,.6)'
      }
      if (data.preselected) {
        return 'rgba(255,0,0,.7)'
      }
      if (data.adjacentToPreselected) {
        return 'rgba(255,0,0,.4)'
      }
      return 'rgba(255,0,0,.1)'
    }

    const pointsStr = _
      .chain(points)                                // [[q1,r1],[q2,r2]]
      .map(_.partial(_.map, _, translateToOrigin))  // adds origin q/r, [[q1',r1'],[q2',r2']]
      .map(_.partial(_.join, _, ','))               // transform coord to string, ["q1,r1","q2,r2"]
      .join(' ')                                    // add all points, "q1,r1 q2,r2"
      .value()

    const textStyle = {
      fontFamily: 'Consolas',
      fontSize  : '12px',
      fill      : '#ffffff',
      stroke    : '#000000'
    }
    const polygonStyle = {
      fill    : getFill(),
      stroke  : 'black'
    }
    const groupStyle = {
      pointerEvents: 'all'
    }

    return (
      <g style={ groupStyle } onMouseOver={ preselect } onMouseOut={ removePreselect } onClick={ select } q={ q } r={ r }>
        <polygon class="tile-background" points={ pointsStr } style={ polygonStyle }/>
        <text x={ origin[0] + 1 * WIDTH / 3 } y={ origin[1] + 1 * HEIGHT / 3 } style={ textStyle }>{ data.fidsi.food }</text>
        <text x={ origin[0] + 2 * WIDTH / 3 } y={ origin[1] + 1 * HEIGHT / 3 } style={ textStyle }>{ data.fidsi.industry }</text>
        <text x={ origin[0] + 1 * WIDTH / 3 } y={ origin[1] + 2 * HEIGHT / 3 } style={ textStyle }>{ data.fidsi.dust }</text>
        <text x={ origin[0] + 2 * WIDTH / 3 } y={ origin[1] + 2 * HEIGHT / 3 } style={ textStyle }>{ data.fidsi.science }</text>
        <text x={ origin[0] + 1 * WIDTH / 2 } y={ origin[1] + 4 * HEIGHT / 5 } style={ textStyle }>{ data.fidsi.influence }</text>
      </g>
    )
  }

}
