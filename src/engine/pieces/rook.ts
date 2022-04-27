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
        this.addMoves(board, board.findPiece(this).offset(Direction.up()), movesAvailable, Direction.up());
        this.addMoves(board, board.findPiece(this).offset(Direction.down()), movesAvailable, Direction.down());
        this.addMoves(board, board.findPiece(this).offset(Direction.left()), movesAvailable, Direction.left());
        this.addMoves(board, board.findPiece(this).offset(Direction.right()), movesAvailable, Direction.right());
        return movesAvailable.list;
    }

}

