import Direction from "./pieces/direction";

enum Player {
    WHITE = "WHITE",
    BLACK = "BLACK"
}

export default Player;

export function getForwardDirection(player: Player): Direction {
    return player === Player.WHITE ? Direction.up() : Direction.down()
}

export function getForwardRightDirection(player: Player): Direction {
    return player === Player.WHITE ? Direction.NE() : Direction.SW()
}

export function getForwardLeftDirection(player: Player): Direction {
    return player === Player.WHITE ? Direction.NW() : Direction.SE()
}

export function getRightDirection(player: Player): Direction {
    return player === Player.WHITE ? Direction.right() : Direction.left()
}

export function getLeftDirection(player: Player): Direction {
    return player === Player.WHITE ? Direction.left() : Direction.right()
}