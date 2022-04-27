import Piece from './piece';
import Board from "../board";
import Player from "../player";
import MovesAvailable from "./movesAvailable";
import Direction from "./direction";
import Square from "../square";

export default class King extends Piece {
    constructor(player: Player) {
        super(player);
    }

    getAvailableMoves(board: Board) {
        let movesAvailable = new MovesAvailable;
        let direction = new Direction;
        for (let rowOffset = -1; rowOffset <= 1; rowOffset++){
            for (let colOffset = -1; colOffset <= 1; colOffset++){
                direction.set(rowOffset,colOffset)
                if (board.findPiece(this).offset(direction).inBounds()){
                    this.addMove(board, board.findPiece(this).offset(direction), movesAvailable);
                }
            }
        }

        return  movesAvailable.list;
    }

    addMove(board: Board, square : Square, movesAvailable : MovesAvailable) : MovesAvailable{
        if(board.getPiece(square)?.player !== this.player){
            movesAvailable.add(square.row, square.col)
        }
        return movesAvailable
    }

}
