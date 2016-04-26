import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import Tile from './tile'
import actions from '../actions/grid-actions'

const MAP_WIDTH = 800
    , MAP_HEIGHT = 600

class HexGrid extends React.Component {

  render() {
    const { grid, preselectTile } = this.props


    const tiles = _.flatten(
      _.map(grid, function(row, x) {
        return _.map(row, function(data, y) {
          if (!data) return null
          return <Tile
            key={ x + ',' + y }
            x={ x }
            y={ y }
            data={ data }
            preselect={ () => { preselectTile(x, y) } }
          />
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

const mapDispatchToProps = (dispatch) => {
  return {
    preselectTile: (x, y) => {
      dispatch(actions.preselect(x, y))
    }
  }
}

const mapStateToProps = (state) => {
  return { grid: state.grid }
}

export default connect(mapStateToProps, mapDispatchToProps)(HexGrid)
