import _ from 'lodash'
import * as ActionTypes from '../actions/action-types'

export default function selection(selection = {}, action, state) {
  switch (action.type) {
  case ActionTypes.SELECT_TILE:
    return _.extend({}, selection, {
      fidsi: {
        food: sumFidsi(state, action.q, action.r, 'food')
      , industry: sumFidsi(state, action.q, action.r, 'industry')
      , dust: sumFidsi(state, action.q, action.r, 'dust')
      , science: sumFidsi(state, action.q, action.r, 'science')
      , influence: sumFidsi(state, action.q, action.r, 'influence')
      }
    })
  default:
    return selection
  }
}

function sumFidsi(state, q , r, field) {
  let sum = 0
  const tiles = state.tiles

  if (tiles && tiles[q] && tiles[q][r]) sum += tiles[q][r].fidsi[field]
  if (tiles && tiles[q - 1] && tiles[q - 1][r]) sum += tiles[q - 1][r].fidsi[field]
  if (tiles && tiles[q + 1] && tiles[q + 1][r]) sum += tiles[q + 1][r].fidsi[field]
  if (tiles && tiles[q] && tiles[q][r - 1]) sum += tiles[q][r - 1].fidsi[field]
  if (tiles && tiles[q] && tiles[q][r + 1]) sum += tiles[q][r + 1].fidsi[field]
  if (tiles && tiles[q + 1] && tiles[q + 1][r - 1]) sum += tiles[q + 1][r - 1].fidsi[field]
  if (tiles && tiles[q - 1] && tiles[q - 1][r + 1]) sum += tiles[q - 1][r + 1].fidsi[field]

  return sum
}
