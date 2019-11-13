Rails.application.routes.draw do
  resources :users

  post 'signup', to: 'user#create'
  post 'login', to: 'session#create'
end
