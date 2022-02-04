import { Body, Controller, ForbiddenException, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BadRequestSwagger } from 'src/swagger/badRequest/badRequestSwagger';
import createMovimentSwagger from 'src/swagger/createMovimentSwagger';
import { IMovimentDTO } from './Interface';

import { MovimentService } from './moviment.service';

@Controller('moviment')
@ApiTags('Moviments')
export class MovimentController {
    constructor(private movimentService: MovimentService) { }
    @Post()
    @ApiOperation({ summary: "Recebe os comandos que estão vindo do Front-end, ou seja, apenas comandos M, L e R, para efetuar a movimentação do Robo. São apenas esses comandos que podem ser digitados, pois há uma regex que impossibilita o dígito de outros. Após o recebimento desses dados, a API faz os testes para efetuar a movimentação do Robo, estará tudo correto se os comandos não forem o suficiente para tirar o mecanismo de fora da área demarcada, caso o seja, será retornado um erro tanto para o back-end como no front, requisando ao usuário, desde que ele o assim deseje, o reset da movimento, fazendo com o que o aparato vá para a sua posição inicial" })
    @ApiResponse({ status: 200, description: 'Nova movimentação enviada com sucesso', type: createMovimentSwagger })
    @ApiResponse({ status: 403, description: 'Pârametros Inválidos', type: BadRequestSwagger })

    async create(@Body() body: IMovimentDTO) {

        try {
            return await this.movimentService.create(body);
        } catch (e) {

            throw new ForbiddenException(e.message);

        }


    }
}
