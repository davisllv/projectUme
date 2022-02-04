import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";


export default class IMovimentDTO {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    comands: string
}