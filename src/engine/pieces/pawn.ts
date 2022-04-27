import Piece from './piece';
import Board from "../board";
import Player from "../player";
import MovesAvailable from "./movesAvailable";
import Square from "../square";
import Direction from "./direction";
import gameSettings from "../gameSettings";

export default class Pawn extends Piece {
    constructor(player: Player) {
        super(player);
    }

    getAvailableMoves(board: Board) {
        // Move one square up, Yet to add limitation on existing pieces.
        let movesAvailable = new MovesAvailable;
        let direction = new Direction();
        let startRow : number;
        if (this.player === "WHITE") {
            direction.up()
            startRow = 1;
        }
        else {
            direction.down()
            startRow = gameSettings.BOARD_SIZE - 2;
        }


        if (this.square(board).offset(direction).inBounds() && !board.getPiece(this.square(board).offset(direction))){
            movesAvailable.add(this.getRow(board) + direction.rowOffset, this.getCol(board));
            if (this.getRow(board) === startRow){
                if (this.square(board).offset(direction).offset(direction).inBounds() && !board.getPiece(this.square(board).offset(direction).offset(direction))){
                    movesAvailable.add(this.getRow(board) + (2 * direction.rowOffset), this.getCol(board));
                }
            }

        }
        /*if (this.player === "WHITE") {
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
        }*/
        return movesAvailable.list;
        //return new Array(0);
    }
}

