function getRandomValue() {
  return Math.floor(Math.random() * (5 - 0)) + 0;
}

function generateTileData(q, r) {
  let tile = { fidsi: [] }

  tile.fidsi.food = getRandomValue()
  tile.fidsi.industry = getRandomValue()
  tile.fidsi.dust = getRandomValue()
  tile.fidsi.science = getRandomValue()
  tile.fidsi.influence = getRandomValue()
  tile.q = q
  tile.r = r

  return tile
}

export default function generateGridData(cols, rows) {
  let res = {}

  for (var i = 0 ; i < cols ; i++) {
    for (var r = 0 ; r < rows ; r++) {
      const q = i - Math.floor(r / 2)
      if (!res[q]) res[q] = {}
      res[q][r] = generateTileData(q, r)
    }
  }

  return res
}
