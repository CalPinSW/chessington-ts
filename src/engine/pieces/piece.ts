import Board from "../board";
import Square from "../square";
import Player from "../player";
import MovesAvailable from "./movesAvailable";
import Direction from "./direction";

export default class Piece {
    constructor(public readonly player: Player) {
    }

    getAvailableMoves(board: Board) {
        throw new Error('This method must be implemented, and return a list of available moves');
    }

    moveTo(board: Board, newSquare: Square) {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
    }

    getRow(board: Board){
        return board.findPiece(this).row
    }

    getCol(board: Board){
        return board.findPiece(this).col
    }


    addMoves(board: Board, square: Square, movesAvailable: MovesAvailable, direction: Direction): MovesAvailable {
        if (square.inBounds()) {
            if (!this.isPieceAtSquareOfBoard(board, square)) {
                movesAvailable.add(square.row, square.col);
                this.addMoves(board, square.offset(direction), movesAvailable, direction)
            }
            else if (square.isTakeable(board,this.player)){
                movesAvailable.add(square.row, square.col);
                return movesAvailable;
            }
        }
        return movesAvailable
    }

    isPieceAtSquareOfBoard(board: Board, square: Square) {
        return board.getPiece(square);
    }

    square(board: Board) : Square{
        return board.findPiece(this)
    }
}
