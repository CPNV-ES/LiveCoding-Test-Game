# Game class allows the user to interact with the game
class Game:
    # Move the circle on x axis
    def move_x(self, x):
        isinstance(x, int) ? engine.send(f"game.moveX({x})") : raise Exception("move_x only accepts integers")

    def move_y(self, y):
        isinstance(y, int) ? engine.send(f"game.moveY({y})") : raise Exception("move_y only accepts integers")

    def move_x_y(self, x, y):
        isinstance(x, int) && isinstance(y, int) ? engine.send(f"game.moveXY({x}, {y})") : raise Exception("move_x_y only accepts integers")
