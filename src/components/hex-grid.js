import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import Tile from './tile'

class HexGrid extends React.Component {

  render() {
    const grid = this.props.grid
    const tiles = _.flatten(
      _.map(grid, function(row, x) {
        return _.map(row, function(col, y) {
          return <Tile key={x + ',' + y} x={x} y={y} />
        })
      })
    )

    return (
      <svg>
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
