import Square from "../square";

export default class MovesAvailable {
    list: Square[] = [];


    add(row: number, col: number) {
        this.list.push(Square.at(row, col));
    }
    addSquare(square: Square) {
        this.list.push(square);
    }

    addMovesList(newMovesList : MovesAvailable){
        this.list = [...this.list, ...newMovesList.list]
    }
}