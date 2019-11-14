Rails.application.routes.draw do
  post 'sign_up', to: 'users#create'
  post 'sign_in', to: 'sessions#create'
  get 'current_user', to: 'sessions#authorize'
end
