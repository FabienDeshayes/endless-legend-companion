import _ from 'lodash'
import * as ActionTypes from '../actions/action-types'

export default function grid(state = [], action) {
  switch (action.type) {
  case ActionTypes.PRESELECT_TILE:
    state[action.x][action.y].preselected = true
    return [... state]
  default:
    return state
  }
}
