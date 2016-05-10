import * as ActionTypes from './action-types'

const tilesActions = {
  preselect: (x, y) => {
    return {
      type: ActionTypes.PRESELECT_TILE
    , x
    , y
    }
  }
, select: (x, y) => {
    return {
      type: ActionTypes.SELECT_TILE
    , x
    , y
    }
  }
, removePreselectedTile: (x, y) => {
    return {
      type: ActionTypes.REMOVE_PRESELECTED_TILE
    , x
    , y
    }
  }
}

export default tilesActions
