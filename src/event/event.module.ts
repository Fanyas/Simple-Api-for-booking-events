import { Module } from "@nestjs/common";
import { EventService } from "./event.service";
import { EventApiController } from "./event.api.controller";
import { PrismaService } from "src/prisma/prisma.service";
import { AppModule } from "src/app.module";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    imports: [PrismaModule],
    controllers: [EventApiController],
    providers: [EventService],
    exports: []
})
export class EventModule {};