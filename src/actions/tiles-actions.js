import * as ActionTypes from './action-types'

const tilesActions = {
  preselect: (q, r) => {
    return {
      type: ActionTypes.PRESELECT_TILE
    , q
    , r
    }
  }
, select: (q, r) => {
    return {
      type: ActionTypes.SELECT_TILE
    , q
    , r
    }
  }
, removePreselectedTile: (q, r) => {
    return {
      type: ActionTypes.REMOVE_PRESELECTED_TILE
    , q
    , r
    }
  }
}

export default tilesActions
