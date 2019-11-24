Rails.application.routes.draw do
  resources :resumes, only: [:index, :create, :update, :destroy]

  post 'sign_up', to: 'users#create'
  post 'sign_in', to: 'sessions#create'
  get 'current_user', to: 'sessions#authorize'
end
