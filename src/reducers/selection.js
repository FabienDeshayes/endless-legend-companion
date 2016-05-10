import _ from 'lodash'
import * as ActionTypes from '../actions/action-types'

export default function selection(selection = {}, action, state) {
  switch (action.type) {
  case ActionTypes.SELECT_TILE:
    return _.extend({}, selection, {
      fidsi: {
        food: sumFidsi(state, action.x, action.y, 'food')
      , industry: sumFidsi(state, action.x, action.y, 'industry')
      , dust: sumFidsi(state, action.x, action.y, 'dust')
      , science: sumFidsi(state, action.x, action.y, 'science')
      , influence: sumFidsi(state, action.x, action.y, 'influence')
      }
    })
  default:
    return selection
  }
}

function sumFidsi(state, x, y, field) {
  let sum = 0
  const tiles = state.tiles

  if (tiles && tiles[x] && tiles[x][y]) sum += tiles[x][y].fidsi[field]
  if (tiles && tiles[x - 1] && tiles[x - 1][y]) sum += tiles[x - 1][y].fidsi[field]
  if (tiles && tiles[x + 1] && tiles[x + 1][y]) sum += tiles[x + 1][y].fidsi[field]
  if (tiles && tiles[x] && tiles[x][y - 1]) sum += tiles[x][y - 1].fidsi[field]
  if (tiles && tiles[x] && tiles[x][y + 1]) sum += tiles[x][y + 1].fidsi[field]
  if (tiles && tiles[x + 1] && tiles[x + 1][y - 1]) sum += tiles[x + 1][y - 1].fidsi[field]
  if (tiles && tiles[x - 1] && tiles[x - 1][y + 1]) sum += tiles[x - 1][y + 1].fidsi[field]

  return sum
}
