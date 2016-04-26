import _ from 'lodash'
import * as ActionTypes from '../actions/action-types'

export default function grid(state = [], action) {
  switch (action.type) {
  case ActionTypes.PRESELECT_TILE:
    resetPreselected(state)
    setPreselected(state, action.x, action.y)
    setPreselected(state, action.x, action.y - 1)
    setPreselected(state, action.x, action.y + 1)
    setPreselected(state, action.x - 1, action.y)
    setPreselected(state, action.x + 1, action.y)
    setPreselected(state, action.x + 1, action.y - 1)
    setPreselected(state, action.x - 1, action.y + 1)
    return [...state]
  default:
    return state
  }
}

function resetPreselected(state) {
  state.forEach(function(row) {
    row.forEach(function(tile) {
      if (tile) tile.preselected = false
    })
  })
}

function setPreselected(state, x, y) {
  if (state && state[x] && state[x][y]) {
    state[x][y].preselected = true
  }
}
