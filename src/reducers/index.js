import tiles from './tiles'
import selection from './selection'

export default function reducer(state = {}, action) {
  return {
    tiles: tiles(state.tiles, action)
  , selection: selection(state.selection, action, state)
  }
}
