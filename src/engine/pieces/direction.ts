export default class Direction {
    rowOffset: number = 0;
    colOffset: number = 0;
    set (rowOffset: number, colOffset: number){
        this.rowOffset = rowOffset
        this.colOffset = colOffset
    }
    up () {
        this.rowOffset = 1;
        this.colOffset = 0;
    }
    down () {
        this.rowOffset = -1;
        this.colOffset = 0;
    }
    left () {
        this.rowOffset = 0;
        this.colOffset = -1;
    }
    right () {
        this.rowOffset = 0;
        this.colOffset = 1;
    }
    NE () {
        this.rowOffset = 1;
        this.colOffset = 1;
    }
    SE () {
        this.rowOffset = -1;
        this.colOffset = 1;
    }
    SW () {
        this.rowOffset = -1;
        this.colOffset = -1;
    }
    NW () {
        this.rowOffset = 1;
        this.colOffset = -1;
    }
}