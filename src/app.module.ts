import { Module } from '@nestjs/common';
import { EventModule } from './event/event.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    EventModule,
    MongooseModule.forRoot('mongodb://localhost/hashmeet-nest-db', {
      useNewUrlParser: true,
    }),
  ],
})
export class AppModule {}
