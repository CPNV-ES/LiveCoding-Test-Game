<?php

/**
 * Allows the user to interact with the game
 */
class Game {

    /**
     * Move the circle
     */
    public function moveX($x) {
        if (is_int($x)) {
            $response = $engine->send("game.moveX({$x})");
            return $response;
        } else {
            throw new Exception('moveX only accepts integers');
        }
    }

    /**
     * Move the circle
     */
    public function moveY($y) {
        if (is_int($y)) {
            $response = $engine->send("game.moveY({$y})");
            return $response;
        } else {
            throw new Exception('moveY only accepts integers');
        }
    }

    /**
     * Move the circle
     */
    public function moveXY($x, $y) {
        if (is_int($x) && is_int($y)) {
            $response = $engine->send("game.moveXY({$x}, {$y})");
            return $response;
        } else {
            throw new Exception('moveXY only accepts integers');
        }
    }

}
