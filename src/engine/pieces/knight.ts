import Piece from './piece';
import Board from "../board";
import Player from "../player";
import MovesAvailable from "./movesAvailable";
import Square from "../square";
import Direction from "./direction";

export default class Knight extends Piece {
    constructor(player: Player) {
        super(player);
    }

    getAvailableMoves(board: Board){
        let movesAvailable = new MovesAvailable;
        for (let rowOffset = -2; rowOffset <= 2; rowOffset++){
            for (let colOffset =-2; colOffset <= 2; colOffset++){
                if ((Math.abs(rowOffset) + Math.abs(colOffset)) === 3 && (rowOffset != 0) && (colOffset != 0)){
                    const targetSquare = this.square(board).offset(Direction.Custom(rowOffset, colOffset));
                    if (targetSquare.isNotOccupiedBySamePlayerPieceOrKing(board, this.player)) {
                        movesAvailable.addSquare(this.square(board).offset(Direction.Custom(rowOffset, colOffset)));
                    }
                }
            }
        }
        return movesAvailable.list;
    }
}

