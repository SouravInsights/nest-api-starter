import { Module } from '@nestjs/common';
import { EventModule } from './event/event.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    EventModule,
    MongooseModule.forRoot('mongodb://localhost/nest-api-db', {
      useNewUrlParser: true,
    }),
  ],
})
export class AppModule {}
