import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticlesModule } from './articles/articles.module';

@Module({
  imports: [
    ConfigModule.forRoot(), 
    ScheduleModule.forRoot(),
    ArticlesModule, 
    MongooseModule.forRoot(process.env.DB_MONGO_STRING)
   
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
