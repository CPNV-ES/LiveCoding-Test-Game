# Commands available

* [moveX](#moveX)
* [moveY](#moveY)
* [moveXY](#moveXY)
* [waitUntilKeyPressed](#waitUntilKeyPressed)

## moveX
Moves the circle on the X axis.

Params :
* **x** `int` circle displacement offset

```php
// PHP
Game::moveX(100);
Game::moveX(-40);
```

```ruby
# Ruby
Game.move_x 100
Game.move_x -40
```

## moveY
Moves the circle on the Y axis.

Params :
* **y** `int` circle displacement offset

```php
// PHP
Game::moveY(100);
Game::moveY(-40);
```

```ruby
# Ruby
Game.move_y 100
Game.move_y -40
```

## moveXY
Moves the circle on the X and Y axis.

Params :
* **x** `int` circle displacement offset x axis
* **y** `int` circle displacement offset y axis

```php
// PHP
Game::moveXY(100, -50);
Game::moveXY(-40, 40);
```

```ruby
# Ruby
Game.move_x_y 100, -50
Game.move_x_y -40, 40
```

## waitUntilKeyPressed
Wait the user press a key, and return the keyCode.

Return :
* **keyCode** `int` The key code

```php
// PHP
$keyCode = Game::waitUntilKeyPressed();
// Check the key code
if ($keyCode == 37) {
  // Do action
}
```

```ruby
# Ruby
key_code = Game.wait_until_key_pressed
# Check the key code
if key_code == 37
  # Do action
end
```
