import _ from 'lodash'
import * as ActionTypes from '../actions/action-types'

export default function tiles(tiles = {}, action) {
  switch (action.type) {
  case ActionTypes.PRESELECT_TILE:
    setAllTilesProperty(tiles, 'preselected', false)
    setAllTilesProperty(tiles, 'adjacentToPreselected', false)
    setPreselected(tiles, action.q, action.r)
    setPreadjacent(tiles, action.q, action.r - 1)
    setPreadjacent(tiles, action.q, action.r + 1)
    setPreadjacent(tiles, action.q - 1, action.r)
    setPreadjacent(tiles, action.q + 1, action.r)
    setPreadjacent(tiles, action.q + 1, action.r - 1)
    setPreadjacent(tiles, action.q - 1, action.r + 1)
    return Object.assign({}, tiles)
  case ActionTypes.SELECT_TILE:
    setAllTilesProperty(tiles, 'selected', false)
    setAllTilesProperty(tiles, 'adjacentToSelected', false)
    setSelected(tiles, action.q, action.r)
    setAdjacent(tiles, action.q, action.r - 1)
    setAdjacent(tiles, action.q, action.r + 1)
    setAdjacent(tiles, action.q - 1, action.r)
    setAdjacent(tiles, action.q + 1, action.r)
    setAdjacent(tiles, action.q + 1, action.r - 1)
    setAdjacent(tiles, action.q - 1, action.r + 1)
    return Object.assign({}, tiles)
  case ActionTypes.REMOVE_PRESELECTED_TILE:
    setAllTilesProperty(tiles, 'preselected', false)
    setAllTilesProperty(tiles, 'adjacentToPreselected', false)
    return Object.assign({}, tiles)
  default:
    return tiles
  }
}

function setAllTilesProperty(tiles, k, v) {
  _.forEach(tiles, function(row) {
    _.forEach(row, function(tile) {
      if (tile) tile[k] = v
    })
  })
}

function setTileProperty(tiles, q, r, k, v) {
  if (tiles && tiles[q] && tiles[q][r]) {
    tiles[q][r][k] = v
  }
}

function setPreselected(tiles, q, r) {
  setTileProperty(tiles, q, r, 'preselected', true)
}

function setSelected(tiles, q, r) {
  setTileProperty(tiles, q, r, 'selected', true)
}

function setPreadjacent(tiles, q, r) {
  setTileProperty(tiles, q, r, 'adjacentToPreselected', true)
}

function setAdjacent(tiles, q, r) {
  setTileProperty(tiles, q, r, 'adjacentToSelected', true)
}
