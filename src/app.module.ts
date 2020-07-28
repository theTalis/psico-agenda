import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfissionaisModule } from './profissionais/profissionais.module';

@Module({
  imports: [ProfissionaisModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
