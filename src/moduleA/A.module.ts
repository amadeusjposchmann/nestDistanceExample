import { Module } from '@nestjs/common';
import { XModule } from '../moduleX/X.module';

@Module({
    imports: [XModule]
})
export class AModule {}