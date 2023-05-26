import { Module } from '@nestjs/common';
import { YModule } from '../moduleY/Y.module';
import { XService } from './X.service';

@Module({
    imports: [YModule],
    providers: [XService]
})
export class XModule {
}