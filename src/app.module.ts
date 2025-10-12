import { Module } from '@nestjs/common';
import { BookingModule } from './booking/booking.module';
import { ConfigModule } from '@nestjs/config';
import { EventModule } from './event/event.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    EventModule,
    BookingModule
  ],
  controllers: [],
  providers: [],
  exports: []
})
export class AppModule {}
