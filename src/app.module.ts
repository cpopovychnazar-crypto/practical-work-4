import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetSuppliesController } from './pet-supplies/pet-supplies.controller';

@Module({
  imports: [],
  controllers: [AppController, PetSuppliesController],
  providers: [AppService],
})
export class AppModule {}
