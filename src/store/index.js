import { createStore } from 'redux'

import reducer from '../reducers'
import gridData from '../data/grid.json'
import generateGridData from '../data/grid-generator'

export default createStore(reducer, {grid: generateGridData(5,5)})
