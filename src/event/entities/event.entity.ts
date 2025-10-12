import { ApiProperty } from "@nestjs/swagger";
import { Prisma } from "@prisma/client";

export class Event {
    @ApiProperty({
        example: 'someEvent',
        description: 'Event name'
    })
    name: string;

    @ApiProperty({
        example: 100,
        description: 'Number of seats available for the event'
    })
    total_seats: number;
}