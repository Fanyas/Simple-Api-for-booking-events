import { BadRequestException, ConflictException, HttpException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { Booking } from "./entities/booking.entity";
import { Prisma } from "@prisma/client";

@Injectable()
export class BookingService {
    constructor(private prisma: PrismaService) {}

    async createBooking(createBookingDTO: Booking) {
        try {

            const event = await this.prisma.event.findUnique({
                where: { id: createBookingDTO.event_id }
            });

            if (!event) throw new NotFoundException('Event not found');

            const count = await this.prisma.booking.count({
                where: { event_id: createBookingDTO.event_id }
            });
            if (count >= event.total_seats) {
                throw new BadRequestException('No seats available');
            }

            const booking = await this.prisma.booking.create({
                data: {
                    event_id: createBookingDTO.event_id,
                    user_id: createBookingDTO.user_id
                }
            });

            return booking;
        }
        catch (error) {
            if(error instanceof Prisma.PrismaClientKnownRequestError) {
                if(error.code === 'P2002') {
                    throw new ConflictException('Book already exists');
                }
                if (error.code === 'P2025') {
                    throw new NotFoundException('Related record not found');
                }
            }

            if (error instanceof HttpException) {
            throw error;
            }

            throw Error(`Booking create error: ${error.message}`);
        }
    }

    async findAll() {
        try {
            const bookings = await this.prisma.booking.findMany();
            return bookings;
        }
        catch (error) {
            throw new Error(`Bookings find error: ${error}`);
        }
    }
}