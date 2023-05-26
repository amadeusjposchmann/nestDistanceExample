import { Module } from '@nestjs/common';
import { YService } from './Y.service';

@Module({
    providers: [YService],
    exports: [YService]
})
export class YModule {}