import Piece from './piece';
import Board from "../board";
import Player from "../player";
import MovesAvailable from "./movesAvailable";
import Square from "../square";
import Direction from "./direction";

export default class Rook extends Piece {
    constructor(player: Player) {
        super(player);
    }

    getAvailableMoves(board: Board) {
        return this.getAllPossibleLateralMovesFromSquare(board, this.square(board)).list;
    }

}

