class ArticlesController < ApplicationController
  def index
    articles = Article.all

    render json: articles
  end

  def create
    articles = Article.all

    render json: articles
  end
end
