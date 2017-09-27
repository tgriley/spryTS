export class SprytAnimation {
    public Name: string;
    public Row: number;
    public FirstFrameIndex: number;
    public LastFrameIndex: number;

    constructor(name: string, row: number, firstFrameIndex: number, lastFrameIndex: number) {
        this.Name = name;
        this.Row = row;
        this.FirstFrameIndex = firstFrameIndex;
        this.LastFrameIndex = lastFrameIndex;
    }
}