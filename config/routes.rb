Rails.application.routes.draw do
  resources :articles, only: [:index, :create], format: 'json'
end

