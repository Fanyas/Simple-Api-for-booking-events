import { ConflictException, Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { Event } from "./entities/event.entity";

@Injectable()
export class EventService{
    constructor(
        private prisma: PrismaService,
    ) {};
    async createEvent(createEventDTO: Event) {
        try {
            const event = await this.prisma.event.create({
                data: {
                    name: createEventDTO.name,
                    total_seats: createEventDTO.total_seats
                }
            });
            return event;
        }
        catch (error) {
            if(error.code === 'P2002') {
                throw new ConflictException('Event already exists');
            }
            throw new Error(`Event create error: ${error}`);
        }
    }

    async findAll() {
        try {
            const events = await this.prisma.event.findMany();
            return events;
        }
        catch (error) {
            throw new Error(`Events find error: ${error}`);
        }
    }
};