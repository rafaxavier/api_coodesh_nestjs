import { 
  HttpException,
  Injectable, 
  NotFoundException 
} from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Article, ArticleDocument } from './entities/article.entity';

@Injectable()
export class ArticlesService {

  constructor(@InjectModel(Article.name) private articleModel: Model<ArticleDocument> ){}

  async create(createArticleDto: CreateArticleDto) {
    const createdArticle = new this.articleModel(createArticleDto);
    const articleExist= await this.articleModel.findOne({'id': createdArticle.id});

    if(articleExist){
      throw new HttpException("esse artigo já existe", 400);
    }
    return createdArticle.save();
  }

  findAll() {
    return this.articleModel.find();
  }
  
  async findOne(id: string) {
    try {
      const article = await this.articleModel.findById(id);
      return article;
    } catch (error) {
      throw new NotFoundException();
    }
  }

  async update(id: string, updateArticleDto: UpdateArticleDto) {
    try {
      return await this.articleModel.findByIdAndUpdate( 
        { _id: id },
        { $set: updateArticleDto },
        { new: true }
      );

    } catch (error) {
      throw new NotFoundException();
    }
  }

  async remove(id: string) {
    try {
      const article = await this.articleModel.findByIdAndRemove(id);
    } catch (error) {
      throw new NotFoundException();
    }
  }
}
