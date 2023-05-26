import { Injectable, Logger, OnModuleInit } from '@nestjs/common';

@Injectable()
export class YService implements OnModuleInit {

    private test:string = null;

    constructor() {
        Logger.log("Y constructor");
    }
    onModuleInit(): any {
        this.test = 'foo';
        Logger.log("Y init");
    }

    public getTest(): string {
        return this.test;
    }
}