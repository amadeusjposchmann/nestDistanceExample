import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { YService } from '../moduleY/Y.service';

@Injectable()
export class XService implements OnModuleInit {
    constructor(private readonly yService: YService) {
        Logger.log('X construct');
    }

    onModuleInit(): any {
        Logger.log('X init')
        if (!this.yService.getTest()) {
            throw new Error('Dependency not initialized');
        }
    }
}