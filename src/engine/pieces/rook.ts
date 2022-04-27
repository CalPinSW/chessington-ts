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
        let movesAvailable = new MovesAvailable;
        let direction : Direction = new Direction;
        direction.up();
        this.addMoves(board, board.findPiece(this).offset(direction), movesAvailable, direction);
        direction.down()
        this.addMoves(board, board.findPiece(this).offset(direction), movesAvailable, direction);
        direction.left()
        this.addMoves(board, board.findPiece(this).offset(direction), movesAvailable, direction);
        direction.right()
        this.addMoves(board, board.findPiece(this).offset(direction), movesAvailable, direction);
        return movesAvailable.list;
    }

}

