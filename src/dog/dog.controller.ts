import { Controller, Get, Param, Query, Req, Res } from '@nestjs/common';
import { DogService } from './dog.service';
import { query, Request } from 'express';

@Controller('dog')
export class DogController {
    constructor(private readonly dogService: DogService) {}

    // localhost:3000/dog
      @Get()
      public getHello(): string {
        return this.dogService.getHello();
      }
    
    // localhost:3000/dog/greet
      @Get('greet/:id')
      public introduce(@Param() params: any, @Query() quary: any): string {
        console.log('params:', params);
        console.log('quary:', quary);

        return this.dogService.introduce();
      }
    
}
