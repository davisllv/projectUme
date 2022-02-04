import { Module } from '@nestjs/common';
import { MovimentController } from './moviment/moviment.controller';
import { MovimentService } from './moviment/moviment.service';


@Module({
  imports: [],
  controllers: [MovimentController],
  providers: [MovimentService],
})
export class AppModule { }
