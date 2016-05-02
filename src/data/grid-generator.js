function getRandomValue() {
  return Math.floor(Math.random() * (5 - 0)) + 0;
}

function generateTileData(x, y) {
  let tile = {
      selected: false
    , adjacent: false
    , preselected: false
    , preadjacent: false
    , fidsi: []
    }

  tile.fidsi.push(getRandomValue())
  tile.fidsi.push(getRandomValue())
  tile.fidsi.push(getRandomValue())
  tile.fidsi.push(getRandomValue())
  tile.fidsi.push(getRandomValue())

  return tile
}

export default function generateGridData(cols, rows) {
  let res = []

  for (var i = 0 ; i < cols ; i++) {
    let col = []
    for (var j = 0 ; j < rows ; j++) {
      col.push(generateTileData(i, j))
    }
    res.push(col)
  }

  return res
}
