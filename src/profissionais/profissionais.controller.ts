import { Controller, Get, Param, Body, Post, Put, Delete } from '@nestjs/common';
import { ProfissionalService } from './shared/profissional.service';
import { Profissional } from './shared/profissional';

@Controller('profissionais')
export class ProfissionaisController {

    constructor(
        private profissionalService: ProfissionalService
    ) { }

    @Get() 
    async getAll(): Promise<Profissional[]> {
        return this.profissionalService.getAll();
    }

    @Get(':id') 
    async getById(@Param('id') id: number): Promise<Profissional> {
        return this.profissionalService.getById(id);
    }

    @Post()
    async create(@Body() profissional: Profissional): Promise<Profissional> {
        return this.profissionalService.create(profissional);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() profissional: Profissional): Promise<Profissional> {
        profissional.id = id;
        return this.profissionalService.update(profissional);
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        this.profissionalService.delete(id);
    }
}
