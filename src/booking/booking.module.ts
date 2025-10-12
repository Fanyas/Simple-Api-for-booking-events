import { Module } from "@nestjs/common";
import { BookingService } from "./booking.service";
import { BookingApiController } from "./booking.api.controller";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    imports: [PrismaModule],
    controllers: [BookingApiController],
    providers: [BookingService],
    exports: []
})

export class BookingModule {};