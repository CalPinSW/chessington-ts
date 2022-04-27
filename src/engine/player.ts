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