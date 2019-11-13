Rails.application.routes.draw do
  post 'signup', to: 'users#create'
  post 'login', to: 'session#create'
end
