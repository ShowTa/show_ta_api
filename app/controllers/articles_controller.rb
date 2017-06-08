class ArticlesController < ApplicationController

  def index
    articles = Article.all

    render json: articles
  end

  def create
    Article.create(article_params)
    articles = Article.all

    render json: articles
  end

  private

  def article_params
    params.permit(:title, :content)
  end
end
