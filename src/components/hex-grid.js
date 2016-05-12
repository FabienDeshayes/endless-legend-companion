import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import Tile from './tile'
import actions from '../actions/tiles-actions'
import config from '../config/config.json'

class HexGrid extends React.Component {

  render() {
    const { tiles, preselectTile, selectTile, removePreselectedTile } = this.props

    const flatTiles = _.flatten(
      _.map(tiles, function(row, x) {
        return _.map(row, function(data, y) {
          if (!data) return null
          return <Tile
            key={ x + ',' + y }
            x={ x }
            y={ y }
            data={ data }
            preselect={ () => { preselectTile(x, y) } }
            select={ () => { selectTile(x, y) } }
            removePreselect={ () => { removePreselectedTile(x, y) } }
          />
        })
      })
    )

    return (
      <svg width={ config.map.width } height={ config.map.height }>
      { flatTiles }
      </svg>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    preselectTile: (x, y) => {
      dispatch(actions.preselect(x, y))
    }
  , selectTile: (x, y) => {
      dispatch(actions.select(x, y))
    }
  , removePreselectedTile: (x, y) => {
      dispatch(actions.removePreselectedTile(x, y))
    }
  }
}

const mapStateToProps = (state) => {
  return { tiles: state.tiles }
}

export default connect(mapStateToProps, mapDispatchToProps)(HexGrid)
