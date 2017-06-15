class ArticlesController < ApplicationController

  def index
    articles = Article.all

    render json: articles
  end

  def show
    article = Article.find(params[:id])

    render json: article
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
