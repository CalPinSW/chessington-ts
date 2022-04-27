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
                if (rowIndex !== currentPosition.row || colIndex !== currentPosition.col){
                    if (Math.abs(rowIndex - currentPosition.row) === Math.abs(colIndex - currentPosition.col)
                        || rowIndex === currentPosition.row || colIndex === currentPosition.col){
                        movesAvailable.add(rowIndex, colIndex);
                    }

                }

            }
        }
        return  movesAvailable.list;
    }
}
