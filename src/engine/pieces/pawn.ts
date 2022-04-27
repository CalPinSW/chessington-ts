import Piece from './piece';
import Board from "../board";
import Player, {getForwardDirection, getForwardLeftDirection, getForwardRightDirection} from "../player";
import MovesAvailable from "./movesAvailable";
import Direction from "./direction";
import gameSettings from "../gameSettings";
import player from "../player";

export default class Pawn extends Piece {
    enPessantAllowed : boolean = true;

    constructor(player: Player) {
        super(player);
    }

    getAvailableMoves(board: Board) {
        // Move one square up, Yet to add limitation on existing pieces.
        let movesAvailable = new MovesAvailable;
        let startRow : number;
        if (this.player === Player.WHITE) {
            startRow = 1;
        }
        else {
            startRow = gameSettings.BOARD_SIZE - 2;
        }

        //forward moves
        const forward = getForwardDirection(this.player);
        if (this.square(board).offset(forward).inBounds() && !board.getPiece(this.square(board).offset(forward))){
            movesAvailable.add(this.getRow(board) + forward.rowOffset, this.getCol(board));
            if (this.getRow(board) === startRow){
                if (this.square(board).offset(forward).offset(forward).inBounds() && !board.getPiece(this.square(board).offset(forward).offset(forward))){
                    movesAvailable.addSquare(this.square(board).offset(forward).offset(forward));
                }
            }

        }

        // Diagonal taking
        const forwardRight = getForwardRightDirection(this.player);
        if (this.square(board).offset(forwardRight).isTakeable(board,this.player)){
            movesAvailable.addSquare(this.square(board).offset(forwardRight));
        }
        const forwardLeft = getForwardLeftDirection(this.player);
        if (this.square(board).offset(forwardLeft).isTakeable(board,this.player)){
            movesAvailable.addSquare(this.square(board).offset(forwardLeft));
        }
        return movesAvailable.list;
        /*if (this.player === Player.WHITE) {
            direction.NW()
            if (this.square(board).offset(direction).isTakeable(board,this.player)){
                movesAvailable.addSquare(this.square(board).offset(direction));
            }
            direction.NE()
            if (this.square(board).offset(direction).isTakeable(board,this.player)){
                movesAvailable.addSquare(this.square(board).offset(direction));
            }
        }
        else {
            direction.SW()
            if (this.square(board).offset(direction).isTakeable(board,this.player)){
                movesAvailable.addSquare(this.square(board).offset(direction));
            }
            direction.SE()
            if (this.square(board).offset(direction).isTakeable(board,this.player)){
                movesAvailable.addSquare(this.square(board).offset(direction));
            }
        }*/


    }
}

