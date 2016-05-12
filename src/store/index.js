import { createStore } from 'redux'

import reducer from '../reducers'
import generateGridData from '../data/grid-generator'
import config from '../config/config.json'

export default createStore(reducer, {tiles: generateGridData(config.tiles.columns, config.tiles.rows), selection:  null})
