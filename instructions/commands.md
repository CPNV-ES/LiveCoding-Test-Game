# Commands available

## Move the circle

The Game class provides 3 methods to play with the circle.

### moveX(x)
* **x** `number` Move the circle on X axis by the amount of pixels specified

### moveY(y)
* **y** `number` Move the circle on Y axis by the amount of pixels specified

### moveXY(x, y)
* **x** `number` Movement on X axis
* **y** `number` Movement on Y axis

### Code samples

```js
game.moveX(40)
game.moveY(-40)
game.moveXY(20, -64)
```

```ruby
game.move_x 40
game.move_y -40
game.move_x_y 20, -64
```

```php
$game->moveX(40)
$game->moveY(-40)
$game->moveXY(40, -64)
```

```python
game.moveX(40)
game.moveY(-40)
game.moveXY(20, -64)
```
