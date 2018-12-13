# Game class allows the user to interact with the game
class Game

  # Move the circle on x axis
  def move_x x
    x.is_a? Integer ? engine.send "game.moveX(#{x})" : raise "moveX only accepts integers"
  end

  # Move the circle on y axis
  def move_y y
    y.is_a? Integer ? engine.send "game.moveX(#{y})" : raise "moveY only accepts integers"
  end

  # Move the circle on both x and y axis
  def move_x_y x, y
    x.is_a? Integer && y.is_a? Integer ? engine.send "game.moveXY(#{x}, #{y})" : raise "moveXY only accepts integers"
  end

end