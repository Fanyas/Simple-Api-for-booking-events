import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString } from "class-validator";

export class Booking {
    @ApiProperty({
        example: 1,
        description: "Event ID"
    })
    @IsInt()
    event_id: number;

    @ApiProperty({
        example: "user123",
        description: "User ID"
    })
    @IsString()
    user_id: string;

    @ApiProperty({
        example: 1
    })
    @IsInt()
    booking_count: number;
}