Rails.application.routes.draw do
  post 'signup', to: 'users#create'
  post 'sign_in', to: 'sessions#create'
  get 'current_user', to: 'sessions#authorize'
end
