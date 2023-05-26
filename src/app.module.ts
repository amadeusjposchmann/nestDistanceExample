import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { XModule } from './moduleX/X.module';
import { AModule } from './moduleA/A.module';

@Module({
  imports: [XModule, AModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
