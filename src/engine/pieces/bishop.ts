import Piece from './piece';
import Board from "../board";
import Player from "../player";
import MovesAvailable from "./movesAvailable";
import Direction from "./direction";

export default class Bishop extends Piece {
    constructor(player: Player) {
        super(player);
    }

    getAvailableMoves(board: Board) {
        let movesAvailable = new MovesAvailable;
        let direction : Direction = new Direction;
        direction.NE();
        this.addMoves(board, board.findPiece(this).offset(direction), movesAvailable, direction);
        direction.SE()
        this.addMoves(board, board.findPiece(this).offset(direction), movesAvailable, direction);
        direction.NW()
        this.addMoves(board, board.findPiece(this).offset(direction), movesAvailable, direction);
        direction.SW()
        this.addMoves(board, board.findPiece(this).offset(direction), movesAvailable, direction);
        return movesAvailable.list;
    }
}
