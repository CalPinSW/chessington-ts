import Piece from './piece';
import Board from "../board";
import Player from "../player";
import MovesAvailable from "./movesAvailable";

export default class King extends Piece {
    constructor(player: Player) {
        super(player);
    }

    getAvailableMoves(board: Board) {
        let currentPosition = board.findPiece(this);
        let movesAvailable = new MovesAvailable;
        for (let rowIndex = Math.max(0, this.getRow(board) - 1); rowIndex <= Math.min(7, this.getRow(board) + 1); rowIndex++){
            for (let colIndex = Math.max(0, this.getCol(board) - 1); colIndex <= Math.min(7, this.getCol(board) + 1); colIndex++){
                if (rowIndex !== this.getRow(board) || colIndex !== this.getCol(board)){
                        movesAvailable.add(rowIndex, colIndex);
                }
            }
        }
        return  movesAvailable.list;
    }
}
