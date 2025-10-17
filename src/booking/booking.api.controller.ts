import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiBody, ApiOperation, ApiTags } from "@nestjs/swagger";
import { BookingService } from "./booking.service";
import { Prisma } from "@prisma/client";
import { Booking } from "./entities/booking.entity";

@ApiTags('booking')
@Controller('api/booking')
export class BookingApiController {
    constructor(private readonly bookingService: BookingService) {};

    @ApiOperation({summary: "Create booking"})
    @ApiBody({type: Booking})
    @Post('reserve')
    async createBooking(@Body() createBookingDTO: Booking) {
        return await this.bookingService.createBooking(createBookingDTO);
    }

    @ApiOperation({summary: "Get all bookings"})
    @Get('getAll')
    async findAll() {
        return await this.bookingService.findAll();
    }

    @Get('top10')
    async findTop10() {
        return await this.bookingService.findTop10();
    }
    
}
