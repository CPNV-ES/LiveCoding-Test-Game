class Game

  def move_x x
    engine.send "game.moveX(#{x})"
  end

  def move_y y
    engine.send "game.moveX(#{y})"
  end

  def move_x_y x, y
    engine.send "game.moveXY(#{x}, #{y})"
  end

end