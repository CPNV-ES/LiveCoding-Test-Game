<?php

/**
 * Allows the user to interact with the game
 */
class Game {

    /**
     * Move the circle
     */
    public static function moveX($x) {
        if (is_int($x)) {
            $response = Engine::send("game.moveX({$x})");
            return $response;
        } else {
            throw new Exception('moveX only accepts integers');
        }
    }

    /**
     * Move the circle
     */
    public static function moveY($y) {
        if (is_int($y)) {
            $response = Engine::send("game.moveY({$y})");
            return $response;
        } else {
            throw new Exception('moveY only accepts integers');
        }
    }

    /**
     * Move the circle
     */
    public static function moveXY($x, $y) {
        if (is_int($x) && is_int($y)) {
            $response = Engine::send("game.moveXY({$x}, {$y})");
            return $response;
        } else {
            throw new Exception('moveXY only accepts integers');
        }
    }

}
?>
