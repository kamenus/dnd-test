let observer = null

function emitChange(knightPosition = [0, 0]) {
  observer(knightPosition)
}

export function observe(o) {
  if (observer) {
    throw new Error('Multiple observers not implemented.')
  }

  observer = o
  emitChange()
}

export function moveKnight(toX, toY) {
  let knightPosition = [toX, toY]
  emitChange(knightPosition)
}