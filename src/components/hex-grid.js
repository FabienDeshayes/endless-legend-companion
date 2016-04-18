import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import Tile from './tile'

const MAP_WIDTH = 800
    , MAP_HEIGHT = 600

class HexGrid extends React.Component {

  render() {
    const grid = this.props.grid
    const tiles = _.flatten(
      _.map(grid, function(row, x) {
        return _.map(row, function(data, y) {
          return <Tile key={x + ',' + y} x={x} y={y} data={data} />
        })
      })
    )

    return (
      <svg width={ MAP_WIDTH } height={ MAP_HEIGHT }>
      { tiles }
      </svg>
    )
  }

}

const actions = {
//   increment: function() {
//     return { type: 'INCREMENT' }
//   }
// , decrement: function() {
//     return { type: 'DECREMENT' }
//   }
}

const mapStateToProps = function mapStateToProps(state) {
  return { grid: state.grid }
}

export default connect(mapStateToProps, actions)(HexGrid)
