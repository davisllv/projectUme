import { ApiProperty } from "@nestjs/swagger";

export default class ICarPosition {
    @ApiProperty()
    id?: number;

    @ApiProperty()
    x: number;

    @ApiProperty()
    y: number;

    @ApiProperty()
    finalPosition: string;
}