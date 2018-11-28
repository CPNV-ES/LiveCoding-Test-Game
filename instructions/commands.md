# Commands available

## Create a circle in the SVG

To add a new circle in the SVG, simply instanciate a new `Circle` class.

### Circle instanciation parameters
* **posX** `number` Center of the circle on X axis
* **posY** `number` Center of the circle on Y axis
* **radius** `number` Circle radius
* **color** `string` Color of the circle (CSS3 formats)

### Code samples

```js
let circle = new Circle(50, 50, 50, '#96AB49')
```

```ruby
circle = Circle.new 50, 50, 50, '#96AB49'
```

```php
$circle = new Circle(50, 50, 50, '#96AB49')
```

```python
circle = Circle(50, 50, 50, '#96AB49')
```

## Move the circle

The Circle class expose some methods to move the circle.

### Move circle

#### moveX
* **offset** `number` Move the circle on X axis by the amount of pixels specified
#### moveY
* **offset** `number` Move the circle on Y axis by the amount of pixels specified
#### moveXY
* **offsetX** `number` Deplacement on X axis
* **offsetY** `number` Deplacement on Y axis

### Code samples

```js
circle.moveX(40)
circle.moveY(-40)
circle.moveXY(20, -64)
```

```ruby
circle.move_x 40
circle.move_y -40
circle.move_x_y 20, -64
```

```php
$circle->moveX(40)
$circle->moveY(-40)
$circle->moveXY(40, -64)
```

```python
circle.moveX(40)
circle.moveY(-40)
circle.moveXY(20, -64)
```

## Remove a circle

Remove a circle from the canvas, simply call the destroy method.

### Code samples

```js
circle.destroy()
```

```ruby
circle.destroy
```

```php
$circle->destroy()
```

```python
circle.destroy()
```
