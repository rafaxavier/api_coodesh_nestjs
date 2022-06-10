import { Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Article, ArticleSchema } from './entities/article.entity';
import { HttpModule } from '@nestjs/axios';
import { ApiService } from 'src/services/api.service';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([{ name: Article.name, schema: ArticleSchema }])
  ],
  controllers: [ArticlesController],
  providers: [ArticlesService, ApiService]
})
export class ArticlesModule {}