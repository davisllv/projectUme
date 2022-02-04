export interface IMovimentRecordInsert {
    id?: string,
    prevX: number;
    prevY: number;
    prevFinalPosition: string;
    actualX: number;
    actualY: number;
    actualFinalPosition: string
}