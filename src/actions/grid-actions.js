import * as ActionTypes from './action-types'

const gridActions = {
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
}

export default gridActions
