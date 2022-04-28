import Board from "../board";
import Square from "../square";
import Player from "../player";
import MovesAvailable from "./movesAvailable";
import Direction from "./direction";

export default class Piece {
    constructor(public readonly player: Player) {
    }

    getAvailableMoves(board: Board) {
        throw new Error('This method must be implemented, and return a list of available moves');
    }

    moveTo(board: Board, newSquare: Square) {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
    }

    getRow(board: Board){
        return board.findPiece(this).row
    }

    getCol(board: Board){
        return board.findPiece(this).col
    }


    recursivelyAddMovesInDirection(board: Board, square: Square, direction: Direction): MovesAvailable {
        let newMoves : MovesAvailable = new MovesAvailable();
        if (square.inBounds()) {
            if (!this.isPieceAtSquareOfBoard(board, square)) {
                newMoves.addSquare(square);
                newMoves.addMovesList(this.recursivelyAddMovesInDirection(board, square.offset(direction), direction))
            }
            else if (square.isNotOccupiedBySamePlayerPieceOrKing(board,this.player)){
                newMoves.addSquare(square);
                return newMoves;
            }
        }
        return newMoves
    }

    getAllPossibleLateralMovesFromSquare(board: Board, square: Square) {
        let newMoves : MovesAvailable = new MovesAvailable();
        newMoves.addMovesList(this.recursivelyAddMovesInDirection(board, square.offset(Direction.up()), Direction.up()));
        newMoves.addMovesList(this.recursivelyAddMovesInDirection(board, square.offset(Direction.down()), Direction.down()));
        newMoves.addMovesList(this.recursivelyAddMovesInDirection(board, square.offset(Direction.left()), Direction.left()));
        newMoves.addMovesList(this.recursivelyAddMovesInDirection(board, square.offset(Direction.right()), Direction.right()));
        return newMoves;
    }
    getAllPossibleDiagonalMovesFromSquare(board: Board, square: Square) : MovesAvailable {
        let newMoves : MovesAvailable = new MovesAvailable();
        newMoves.addMovesList(this.recursivelyAddMovesInDirection(board, square.offset(Direction.NW()), Direction.NW()));
        newMoves.addMovesList(this.recursivelyAddMovesInDirection(board, square.offset(Direction.SW()), Direction.SW()));
        newMoves.addMovesList(this.recursivelyAddMovesInDirection(board, square.offset(Direction.NE()), Direction.NE()));
        newMoves.addMovesList(this.recursivelyAddMovesInDirection(board, square.offset(Direction.SE()), Direction.SE()));
        return newMoves;
    }
    isPieceAtSquareOfBoard(board: Board, square: Square) : boolean {
        return board.getPiece(square) instanceof Piece;
    }

    square(board: Board) : Square{
        return board.findPiece(this)
    }
}
