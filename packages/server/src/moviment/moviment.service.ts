import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ICarPosition, IMovimentDTO } from './Interface';
import { IMovimentRecordInsert } from './Interface/IMovimentRecordInsert';


export interface IMoviment {
    id: number;
    text: string;
}
let carPosition: ICarPosition = {
    x: 0,
    y: 0,
    finalPosition: "North",
};
const prisma = new PrismaClient()

@Injectable()
export class MovimentService {

    async create(movimentDto: IMovimentDTO) {
        const prevMoviment: ICarPosition = {
            ...carPosition
        }

        if (movimentDto.comands.toUpperCase() === "RESET") {
            carPosition = {
                finalPosition: 'North',
                x: 0,
                y: 0,
            }
            return carPosition
        }

        for (let i = 0; i < movimentDto.comands.length; i++) {
            if (movimentDto.comands[i].toUpperCase() === "M") {
                if (carPosition.finalPosition === "North") {
                    carPosition.y++;
                } else if (carPosition.finalPosition === "South") {
                    carPosition.y--;
                } else if (carPosition.finalPosition === "East") {
                    carPosition.x++;
                } else if (carPosition.finalPosition === "West") {
                    carPosition.x--;
                }
            }
            if (carPosition.x < 0) {

                carPosition.x = 0;
                throw Error('You are off the limits, try to reset')

            }
            if (carPosition.x > 4) {

                carPosition.x = 4;
                throw Error('You are off the limits, try to reset')
            }

            if (carPosition.y < 0) {

                carPosition.y = 0;

                throw Error('You are off the limits, try to reset')
            }
            if (carPosition.y > 4) {

                carPosition.y = 4;
                throw Error('You are off the limits, try to reset')
            }
            if (movimentDto.comands[i].toUpperCase() === "R") {
                if (carPosition.finalPosition === "North") {
                    carPosition.finalPosition = "East";

                } else if (carPosition.finalPosition === "East") {
                    carPosition.finalPosition = "South";

                } else if (carPosition.finalPosition === "South") {
                    carPosition.finalPosition = "West";

                } else if (carPosition.finalPosition === "West") {
                    carPosition.finalPosition = "North";

                }
            }
            if (movimentDto.comands[i].toUpperCase() === "L") {
                if (carPosition.finalPosition === "North") {
                    carPosition.finalPosition = "West";

                } else if (carPosition.finalPosition === "West") {
                    carPosition.finalPosition = "South";

                } else if (carPosition.finalPosition === "South") {
                    carPosition.finalPosition = "East";

                } else if (carPosition.finalPosition === "East") {
                    carPosition.finalPosition = "North";

                }
            }

        }


        const movimentData: IMovimentRecordInsert = {
            prevX: prevMoviment.x,
            prevY: prevMoviment.y,
            prevFinalPosition: prevMoviment.finalPosition,
            actualX: carPosition.x,
            actualY: carPosition.y,
            actualFinalPosition: carPosition.finalPosition
        }

        const movimentComand: ICarPosition = {

            ...carPosition
        }

        await prisma.movimentRecords.create({
            data: movimentData
        })


        return movimentComand
    }
}
