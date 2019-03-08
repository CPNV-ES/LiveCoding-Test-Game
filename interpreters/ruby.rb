# Game class allows the user to interact with the game
class Game

  # Move the circle on x axis
  def self.move_x x
    raise "moveX only accepts integers" unless x.is_a? Integer
    Engine.send "game.moveX(#{x})"
  end

  # Move the circle on y axis
  def self.move_y y
    raise "moveY only accepts integers" unless y.is_a? Integer
    Engine.send "game.moveX(#{y})"
  end

  # Move the circle on both x and y axis
  def self.move_x_y x, y
    raise "moveXY only accepts integers" unless x.is_a? Integer && y.is_a? Integer
    Engine.send "game.moveXY(#{x}, #{y})" :
  end

end