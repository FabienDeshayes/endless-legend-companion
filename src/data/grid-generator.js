function getRandomValue() {
  return Math.floor(Math.random() * (5 - 0)) + 0;
}

function generateTileData(x, y) {
  let tile = { fidsi: [] }

  tile.fidsi.food = getRandomValue()
  tile.fidsi.industry = getRandomValue()
  tile.fidsi.dust = getRandomValue()
  tile.fidsi.science = getRandomValue()
  tile.fidsi.influence = getRandomValue()

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
