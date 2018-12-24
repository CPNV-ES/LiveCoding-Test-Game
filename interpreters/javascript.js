class Game {

  async moveX (x) {
    if (typeof x === 'number') {
      return await engine.send(`game.moveX(${x})`)
    } else {
      throw new Error('moveX only accepts integers')
    }
  }

  async moveY (y) {
    if (typeof y === 'number') {
      return await engine.send(`game.moveY(${y})`)
    } else {
      throw new Error('moveY only accepts integers')
    }
  }

  async moveXY (x, y) {
    if (typeof x === 'number' && typeof y === 'number') {
      return await engine.send(`game.moveXY(${x}, ${y})`)
    } else {
      throw new Error('moveXY only accepts integers')
    }
  }

}
