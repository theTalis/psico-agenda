import { Module } from '@nestjs/common';
import { ProfissionaisController } from './profissionais.controller';
import { ProfissionalService } from './shared/profissional.service';

@Module({
    controllers: [ProfissionaisController],
    providers: [ProfissionalService]
})
export class ProfissionaisModule {}
