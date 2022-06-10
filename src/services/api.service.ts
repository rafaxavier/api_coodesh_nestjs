import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { HttpService } from '@nestjs/axios';
import { Article, ArticleDocument } from '../articles/entities/article.entity';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class ApiService {

  constructor( 
    private httpService: HttpService, 
    @InjectModel(Article.name) private articleModel: Model<ArticleDocument> ){
      httpService = this.httpService
  }

  // recupera todos os artigos da api
  getArticles(num: string){
    try {
      const result= this.httpService.get(`https://api.spaceflightnewsapi.net/v3/articles?_limit=${num}`)
      return result;

    } catch (error) {
        if (error.response) {
            return error.response.status;
        }
        return error;
    }
  }

  // salva no Banco de Dados todos artigos recuperados da API
  async loadArticles(){
    const numRegistro = await this.articleModel.estimatedDocumentCount();
    if(numRegistro  == 0){
      const limit = process.env.LOAD_NUM_ARTICLES_START;
      const result = await this.getArticles(limit);
      
      result.forEach(i => {
        this.articleModel.create(i.data);
      });
    }
  }

  // caso surja artigo novo na API ele será inserido no BD, Func disparado diariamente as 9:00
  reloadArticles(){
    const limit= process.env.LOAD_NUM_ARTICLES_DAILY;
    const result = this.getArticles(limit);

    result.forEach(i => {
      this.articleModel.create(i.data);
    });
  }
  
  //chama a funcao reloadArticles de domingo a sabado as 9:00 
  @Cron('0 0 9 * * 0-6',{
    timeZone: 'America/Sao_Paulo',
  })
  handleCron() {
    this.reloadArticles();
  }

}
