import Piece from './piece';
import Board from "../board";
import Player from "../player";
import MovesAvailable from "./movesAvailable";
import Direction from "./direction";

export default class Bishop extends Piece {
    constructor(player: Player) {
        super(player);
    }

    getAvailableMoves(board: Board) {
        let movesAvailable = new MovesAvailable;
        //Don't modify movesAvailable in addMoves.
        this.addMoves(board, this.square(board).offset(Direction.NW()), movesAvailable, Direction.NW());
        this.addMoves(board, this.square(board).offset(Direction.SW()), movesAvailable, Direction.SW());
        this.addMoves(board, this.square(board).offset(Direction.SE()), movesAvailable, Direction.SE());
        this.addMoves(board, this.square(board).offset(Direction.NE()), movesAvailable, Direction.NE());

        return movesAvailable.list;
    }
}
