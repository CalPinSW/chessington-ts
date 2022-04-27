import Piece from './piece';
import Board from "../board";
import Player from "../player";
import MovesAvailable from "./movesAvailable";
import Square from "../square";

export default class Pawn extends Piece {
    constructor(player: Player) {
        super(player);
    }

    getAvailableMoves(board: Board) {
        // Move one square up, Yet to add limitation on existing pieces.
        let movesAvailable = new MovesAvailable;
        if (this.player === "WHITE") {
            if (!board.getPiece(Square.at(this.getRow(board) + 1, this.getCol(board)))) {
                movesAvailable.add(this.getRow(board) + 1, this.getCol(board));

                if (this.getRow(board) === 1) {
                    if (!board.getPiece(Square.at(this.getRow(board) + 2, this.getCol(board)))) {
                        movesAvailable.add(this.getRow(board) + 2, this.getCol(board));
                    }
                }
            }

        } else {
            if (!board.getPiece(Square.at(this.getRow(board) - 1, this.getCol(board)))) {
                movesAvailable.add(this.getRow(board) - 1, this.getCol(board));

                if (this.getRow(board) === 6) {
                    if (!board.getPiece(Square.at(this.getRow(board) - 2, this.getCol(board)))) {
                        movesAvailable.add(this.getRow(board) - 2, this.getCol(board));
                    }
                }
            }
        }
        return movesAvailable.list;
        //return new Array(0);
    }
}

