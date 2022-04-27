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
        for (let rowIndex = Math.max(0, currentPosition.row - 1); rowIndex <= Math.min(7, currentPosition.row + 1); rowIndex++){
            for (let colIndex = Math.max(0, currentPosition.col - 1); colIndex <= Math.min(7, currentPosition.col + 1); colIndex++){
                if (rowIndex !== currentPosition.row || colIndex !== currentPosition.col){
                        movesAvailable.add(rowIndex, colIndex);
                }
            }
        }
        return  movesAvailable.list;
    }
}
