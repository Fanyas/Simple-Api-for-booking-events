import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiBody, ApiOperation, ApiTags } from "@nestjs/swagger";
import { EventService } from "./event.service";
import { Prisma } from "@prisma/client";
import { Event } from "./entities/event.entity";

@ApiTags('events')
@Controller('api/events')
export class EventApiController {
    constructor(private readonly eventService: EventService) {}

    @ApiOperation({summary: 'Create event'})
    @ApiBody({type: Event})
    @Post('create')
    async create(@Body() createEventDTO: Event) {
        return await this.eventService.createEvent(createEventDTO);
    }

    @ApiOperation({summary: "Get all events"})
    @Get('getAll')
    async findAll() {
        return await this.eventService.findAll();
    }
}