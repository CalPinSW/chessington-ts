import Direction from "./pieces/direction";
import gameSettings from "./gameSettings";
import Board from "./board";
import King from "./pieces/king";
import Player from "./player"

export default class Square {
    constructor(public row: number, public col: number) {
    }

    static at(row: number, col:number): Square {
        return new Square(row, col);
    }

    equals(otherSquare: Square): boolean {
        return !!otherSquare && this.row === otherSquare.row && this.col === otherSquare.col;
    }

    offset(direction : Direction){
        return Square.at(this.row + direction.rowOffset, this.col + direction.colOffset)
    }

    toString(): string {
        return `Row ${this.row}, Col ${this.col}`;
    }

    inBounds(){
        return (this.row >= 0 && this.row <= gameSettings.BOARD_SIZE - 1 && this.col >= 0 && this.col <= gameSettings.BOARD_SIZE - 1)
    }

    isTakeable (board : Board, player: Player){
        return board.getPiece(this)?.player !== player && !(board.getPiece(this) instanceof King);
    }
}