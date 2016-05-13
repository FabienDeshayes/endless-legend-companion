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
      _.map(tiles, function(row) {
        return _.map(row, function(data) {
          if (!data) return null
          return <Tile
            key={ data.q + ',' + data.r }
            q={ data.q }
            r={ data.r }
            data={ data }
            preselect={ () => { preselectTile(data.q, data.r) } }
            select={ () => { selectTile(data.q, data.r) } }
            removePreselect={ () => { removePreselectedTile(data.q, data.r) } }
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
    preselectTile: (q, r) => {
      dispatch(actions.preselect(q, r))
    }
  , selectTile: (q, r) => {
      dispatch(actions.select(q, r))
    }
  , removePreselectedTile: (q, r) => {
      dispatch(actions.removePreselectedTile(q, r))
    }
  }
}

const mapStateToProps = (state) => {
  return { tiles: state.tiles }
}

export default connect(mapStateToProps, mapDispatchToProps)(HexGrid)
