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
            $response = Engine::send(
                json_encode([
                    "action" => "moveX",
                    "params" => $x
                ])
            );
            // usleep(500000);
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
            $response = Engine::send(
                json_encode([
                    "action" => "moveY",
                    "params" => $y
                ])
            );
            // usleep(500000);
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
            $response = Engine::send(
                json_encode([
                    "action" => "moveXY",
                    "params" => [$x, $y]
                ])
            );
            // usleep(500000);
            return $response;
        } else {
            throw new Exception('moveXY only accepts integers');
        }
    }

    /**
     * Reset circle position
     */
    public static function resetCirclePosition() {
        sleep(1);
        $response = Engine::send(
            json_encode([
                "action" => "resetCirclePosition"
            ])
        );
        return $response;
    }

    /**
     * Reset circle position
     */
    public static function waitUntilKeyPressed() {
        $keyCode = Engine::send(
            json_encode([
                "action" => "waitUntilKeyPressed"
            ])
        );
        return $keyCode;
    }

}
?>
