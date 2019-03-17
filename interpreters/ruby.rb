require 'json'

# Game class allows the user to interact with the game
class Game

  # Move the circle on x axis
  def self.move_x x
    Engine.send({ action: "moveX", params: x }.to_json)
  end

  # Move the circle on y axis
  def self.move_y y
    Engine.send({ action:'moveY', params: y }.to_json)
  end

  # Move the circle on both x and y axis
  def self.move_x_y x, y
    Engine.send({ action: 'moveXY', params: [x, y] }.to_json)
  end

  # Wait the user press a key on the game
  def self.wait_until_key_pressed
    Engine.send({ action: 'waitUntilKeyPressed' }.to_json)
  end

end
