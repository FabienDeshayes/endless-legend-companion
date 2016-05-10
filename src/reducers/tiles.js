import _ from 'lodash'
import * as ActionTypes from '../actions/action-types'

export default function tiles(tiles = [], action) {
  switch (action.type) {
  case ActionTypes.PRESELECT_TILE:
    setAllTilesProperty(tiles, 'preselected', false)
    setAllTilesProperty(tiles, 'adjacentToPreselected', false)
    setPreselected(tiles, action.x, action.y)
    setPreadjacent(tiles, action.x, action.y - 1)
    setPreadjacent(tiles, action.x, action.y + 1)
    setPreadjacent(tiles, action.x - 1, action.y)
    setPreadjacent(tiles, action.x + 1, action.y)
    setPreadjacent(tiles, action.x + 1, action.y - 1)
    setPreadjacent(tiles, action.x - 1, action.y + 1)
    return [...tiles]
  case ActionTypes.SELECT_TILE:
    setAllTilesProperty(tiles, 'selected', false)
    setAllTilesProperty(tiles, 'adjacentToSelected', false)
    setSelected(tiles, action.x, action.y)
    setAdjacent(tiles, action.x, action.y - 1)
    setAdjacent(tiles, action.x, action.y + 1)
    setAdjacent(tiles, action.x - 1, action.y)
    setAdjacent(tiles, action.x + 1, action.y)
    setAdjacent(tiles, action.x + 1, action.y - 1)
    setAdjacent(tiles, action.x - 1, action.y + 1)
    return [...tiles]
  case ActionTypes.REMOVE_PRESELECTED_TILE:
    setAllTilesProperty(tiles, 'preselected', false)
    setAllTilesProperty(tiles, 'adjacentToPreselected', false)
    return [...tiles]
  default:
    return tiles
  }
}

function setAllTilesProperty(tiles, k, v) {
  tiles.forEach(function(row) {
    row.forEach(function(tile) {
      if (tile) tile[k] = v
    })
  })
}

function setTileProperty(tiles, x, y, k, v) {
  if (tiles && tiles[x] && tiles[x][y]) {
    tiles[x][y][k] = v
  }
}

function setPreselected(tiles, x, y) {
  setTileProperty(tiles, x, y, 'preselected', true)
}

function setSelected(tiles, x, y) {
  setTileProperty(tiles, x, y, 'selected', true)
}

function setPreadjacent(tiles, x, y) {
  setTileProperty(tiles, x, y, 'adjacentToPreselected', true)
}

function setAdjacent(tiles, x, y) {
  setTileProperty(tiles, x, y, 'adjacentToSelected', true)
}
