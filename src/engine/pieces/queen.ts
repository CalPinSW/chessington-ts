import Piece from './piece';
import Board from "../board";
import Player from "../player";
import MovesAvailable from "./movesAvailable";
import Direction from "./direction";

export default class Queen extends Piece {
    constructor(player: Player) {
        super(player);
    }

    getAvailableMoves(board: Board) {
        return [...this.getAllPossibleDiagonalMovesFromSquare(board, this.square(board)).list,
            ...this.getAllPossibleLateralMovesFromSquare(board, this.square(board)).list];
    }
}
