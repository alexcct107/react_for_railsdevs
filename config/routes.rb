Rails.application.routes.draw do
  get 'pages/index'
  get 'episodes', to: 'pages#episodes'
  root 'pages#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
