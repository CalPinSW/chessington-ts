import Piece from './piece';
import Board from "../board";
import Player from "../player";
import MovesAvailable from "./movesAvailable";

export default class Queen extends Piece {
    constructor(player: Player) {
        super(player);
    }

    getAvailableMoves(board: Board) {
        let currentPosition = board.findPiece(this);
        let movesAvailable = new MovesAvailable;
        for (let rowIndex = 0; rowIndex <= 7; rowIndex++){
            for (let colIndex = 0; colIndex <= 7; colIndex++){
                if (rowIndex !== this.getRow(board) || colIndex !== this.getCol(board)){
                    if (Math.abs(rowIndex - this.getRow(board)) === Math.abs(colIndex - this.getCol(board))
                        || rowIndex === this.getRow(board) || colIndex === this.getCol(board)){
                        movesAvailable.add(rowIndex, colIndex);
                    }

                }

            }
        }
        return  movesAvailable.list;
    }
}
