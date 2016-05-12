import tiles from './tiles'
import selection from './selection'
import preselection from './preselection'

export default function reducer(state = {}, action) {
  return {
    tiles: tiles(state.tiles, action)
  , selection: selection(state.selection, action, state)
  , preselection: preselection(state.preselection, action, state)
  }
}
